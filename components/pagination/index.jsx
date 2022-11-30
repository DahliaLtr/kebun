import React from "react";
import { useState } from "react";

const Pagination = () => {
  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);

  const pages = [{ page: num }, { page: num + 1 }, { page: num + 2 }];

  function Next() {
    setNum(++num);
  }

  function back() {
    num > 1 && setNum(--num);
  }

  return (
    <div className="mt-10 flex justify-center bg-fit-[#D9D9D9] rounded-sm">
      <button onClick={back} className="bg-[#D9D9D9] rounded-sm px-3 hover:bg-gray-400">
        Prev
      </button>
      {pages.map((pg, i) => (
        <button key={i} onClick={() => setCur(pg.page)} className={`px-4 py-2 hover:text-[#D9D9D9] border border-[#D9D9D9] bg-[#FFFFFF] ${cur === pg.page && "bg-[#064635] text-[#FFFFFF]"} `}>
          {pg.page}
        </button>
      ))}
      <button onClick={Next} className="bg-[#D9D9D9] rounded-sm px-3 hover:bg-gray-400">
        Next
      </button>
    </div>
  );
};

export default Pagination;
