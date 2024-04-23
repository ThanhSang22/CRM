import React from 'react';
import { Button } from '@material-tailwind/react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Paging = ({ currentPage, setCurrentPage, totalPages }) => {
  const next = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex items-center gap-4 text-[#4D648D]">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={currentPage === 1}
      >
        <GrFormPrevious strokeWidth={2} className="h-4 w-4 text-[#4D648D]" />
      </Button>
      <div className="flex items-center gap-2">
        {/* <input
          type="text"
          value={currentPage}
          onChange={(e) => setCurrentPage(e.target.value)}
          className="outline-none w-3"
        /> */}
        <span>{currentPage}</span>
        of <span>{totalPages}</span> pages
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={currentPage === totalPages}
      >
        <GrFormNext strokeWidth={2} className="h-4 w-4 text-[#4D648D]" />
      </Button>
    </div>
  );
};

export default Paging;
