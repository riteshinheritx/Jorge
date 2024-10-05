import React from "react";
import { Link } from "react-router-dom";

function ProtectedPage() {
  return (
    <div>
      Sample Page which should be protected
      <br /> <Link to="/">Home</Link>
    </div>
  );
}

export default ProtectedPage;
