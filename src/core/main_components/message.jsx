import React from "react";

function Message({ className, children }) {
  return <div className={`w-full rounded-md bg-gray-100 p-4 text-left ${className !== "" && className}`}>{children}</div>;
}

export default Message;
