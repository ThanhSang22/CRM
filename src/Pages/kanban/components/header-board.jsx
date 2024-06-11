import React, { useState } from 'react';
import Button from '../../../components/button';
import { IoMdAdd, IoMdCloudUpload } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { importOpp } from '../../../redux/slice/opportunitySlice';
import * as XLSX from 'xlsx';

function HeaderBoard({ toggleCreatingTask, onChange }) {
  const [file, setFile] = useState(null);
  const [uploadedData, setUploadedData] = useState(null);

  const dispatch = useDispatch();
  const handleImport = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        // Step 2: Parse Excel data
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        // Step 3: Dispatch Redux action to upload data
        dispatch(importOpp(jsonData));
        setUploadedData(jsonData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className="flex mx-9 my-6 justify-between z-10">
      {/* {uploadedData && (
        <div>
          <h2>Uploaded Data:</h2>
          <table>
            <thead>
              <tr>
                {uploadedData[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {uploadedData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )} */}
      <div className="flex gap-3">
        <Button
          icon={<IoMdAdd size={20} />}
          onClick={toggleCreatingTask}
          name="Create"
          className="p-1.5 !text-[#4D648D] font-semibold h-[30px] border-[#4D648D] rounded-[5px] border-[1px] !text-[15px] normal-case"
        />

        <div className="relative cursor-pointer flex items-center">
          <Button
            type="submit"
            icon={<IoMdCloudUpload size={20} />}
            name="Import"
            onClick={handleImport}
            className="p-1.5 !text-[#4D648D] font-semibold h-[30px] border-[#4D648D] rounded-[5px] border-[1px] !text-[15px] normal-case"
          />
          <input
            type="file"
            accept=".xlsx, .xls"
            onClick={handleImport}
            className="flex absolute left-[38px] top-[0%] scale-125 !cursor-pointer opacity-0"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </div>
      <div className="w-60">
        <div className="relative w-full min-w-[200px] h-7">
          <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
            <FiSearch />
          </div>
          <input
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 
            disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border
            border focus:border-1 text-sm px-3 py-2.5 
            rounded-[7px] !pr-9 border-blue-gray-200 focus:border-[#8E8E8E]"
            placeholder="Search..."
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderBoard;
