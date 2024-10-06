import React, { useState } from "react";
import { Dropdown } from "../core/sub_components/buttons";
import ImageUpload from "./ImageUpload";
import ErrorListing from "../pages/ErrorListing"

function PimPage() {
  const [showUploader, setShowUploader] = useState(false);
  const [errors, setErrors] = useState()

  return (
    <div className="flex gap-10 flex-col h-full">
      <div className="flex gap-2 flex-wrap">
        <div className="flex gap-2 flex-wrap">
          <div className={"w-42"}>
            <Dropdown
              onSelect={(flag, elm) => {
                setShowUploader(true)
              }}
              title="Upload PIM data"
              list={["Add Items Field", "Update Items Field"]}
            />
          </div>
          <div className={"w-42"}>
            <Dropdown title="Retrieve PIM data" disable={true} />
          </div>
          <div className={"w-42"}>
            <Dropdown title="Delete PIM data" disable={true} />
          </div>
          <div className={"w-42"}>
            <Dropdown title="Edit PIM data" disable={true} />
          </div>
        </div>

        <div className={"w-full my-4"}>
          {showUploader && !errors && (
            <div className="">
              <ImageUpload setErrors={setErrors} />
            </div>
          )}

          {errors && <><ErrorListing errors={errors} /></>}
        </div>
      </div>
    </div>
  );
}

export default PimPage;
