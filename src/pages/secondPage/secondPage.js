import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Dropdown } from "../../core/sub_components/buttons/buttons";

function SecondPage() {
  return (
    <div className="flex gap-10 flex-col justify-center items-center">
      Second Page
      <div className="flex gap-2 flex-wrap  p-4">
        {/* <button
          className="flex font-normal w-44 text-lg text-gray-500 items-center w-full p-2 pl-4 pr-4 justify-between  text-2xl font-light cursor-pointer bg-slate-100"
          onClick={(event) => {
            // handleButtonClick(event);
            return;
          }}
        >
          <span className="truncate">Select Folder</span>
          <KeyboardArrowDownIcon className="cursor-pointer" />
        </button> */}
        <Dropdown title="Upload PIM data" />
        <Dropdown title="Retrieve PIM data" disable={true} /> <Dropdown title="Delete PIM data"  disable={true}  />
        <Dropdown title="Edit PIM data"  disable={true}  />
      </div>
    </div>
  );
}

export default SecondPage;
