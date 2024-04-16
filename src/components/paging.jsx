import React from 'react';
import { Button } from '@material-tailwind/react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Paging = () => {
  const [active, setActive] = React.useState(1);

  const next = () => {
    if (active === 10) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };
  return (
    <div className="flex items-center gap-4 text-[#4D648D]">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <GrFormPrevious strokeWidth={2} className="h-4 w-4  text-[#4D648D]" />
      </Button>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={active}
          onChange={(e) => setActive(e.target.value)}
          className="outline-none w-3"
        />
        {/* {active}  */}
        of 10 pages
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === 10}
      >
        <GrFormNext strokeWidth={2} className="h-4 w-4  text-[#4D648D]" />
      </Button>
    </div>
  );
};

export default Paging;
