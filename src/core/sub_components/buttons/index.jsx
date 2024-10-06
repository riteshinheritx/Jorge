import { useEffect, useRef, useState } from "react";
import "./buttons.scss";

const MidSizeButton = ({ title, link }) => {
  return <button className="mid-size-button">{title}</button>;
};

const Dropdown = ({ title, list, value, disable = false, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <div className="w-full relative" ref={dropdownRef}>
      <button
        onClick={() => {
          if (disable) return;
          return setIsOpen(!isOpen);
        }}
        data-dropdown-toggle="dropdown"
        className={`text-white w-42 bg-[#13121f] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ${disable ? "opacity-60 cursor-not-allowed" : ""}`}
        type="button"
      >
        {title}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
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
        className={`z-10 ${
          !isOpen && "hidden"
        } absolute mt-2 top-[100%] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          {list &&
            list.length > 0 &&
            list.map((elem, index) => {
              const elmTitle = typeof elem === "string" ? elem : elem.label
              const isSelected = (typeof elem === "string" ? elem : elem.value) === value
              return (
                <li
                  key={index}
                  onClick={() => {
                    onSelect(true, elem);
                    setIsOpen(false);
                  }}
                  className={`${isSelected && "bg-gray-600"} text-left cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                >
                  {elmTitle}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export { MidSizeButton, Dropdown };
