import { useState } from "react";
import "./buttons.css";

const SmallSizeButton = ({ text, title = "title" }) => {
  return (
    <abbr title={title} classNameName="small-size-button">
      {text}
    </abbr>
  );
};

const MidSizeButton = ({ text }) => {
  return <div classNameName="mid-size-button">{text}</div>;
};

const Dropdown = ({ title, list, disable = false, setShowUploadDialog }) => {
  const [showDropDownList, setShowDropDownList] = useState(false);
  return (
    <div className="w-42">
      <button
        onClick={() => {
          if (disable) return;
          return setShowDropDownList(!showDropDownList);
        }}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white w-42 bg-slate-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {title}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        className={`z-10 ${
          !showDropDownList && "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {list &&
            list.length > 0 &&
            list.map((elem) => {
              return (
                <li
                  key={elem}
                  onClick={() => setShowUploadDialog(true)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {elem}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export { SmallSizeButton, MidSizeButton, Dropdown };
