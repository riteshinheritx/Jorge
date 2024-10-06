import React, { useState } from "react";
import { Dropdown } from "../core/sub_components/buttons";
import ImageUpload from "./ImageUpload";
import ErrorListing from "../pages/ErrorListing";
import Message from "../core/main_components/message";

function PimPage() {
  const [uploaderType, setUploaderType] = useState(null);
  const [errors, setErrors] = useState();

  return (
    <div className="flex gap-10 flex-col h-full">
      <div className="flex gap-2 flex-wrap">
        <div className="flex gap-4 flex-wrap w-full">
          <div className={"w-42"}>
            <Dropdown
              onSelect={(flag, elm) => {
                setUploaderType(elm.value);
              }}
              value={uploaderType}
              title={
                !uploaderType
                  ? "Upload PIM data"
                  : uploaderType === "add"
                  ? "Add Items Field"
                  : "Update Items Field"
              }
              list={[
                { label: "Add Items Field", value: "add" },
                { label: "Update Items Field", value: "update" },
              ]}
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
          {uploaderType && !errors && (
            <div className="">
              <ImageUpload uploaderType={uploaderType} setErrors={setErrors} />
            </div>
          )}

          {errors && (
            <>
              <ErrorListing errors={errors} />
            </>
          )}
        </div>
      </div>

      {!errors && uploaderType ? (
        <Message className={"mt-auto"}>
          <p>
            Select the TASK you want to execute. After selecting, please select
            a file to <span className={"uppercase"}>{uploaderType}</span>.
          </p>
        </Message>
      ) : (
        <Message className={"mt-auto"}>
          Select the ACTION you want to execute
        </Message>
      )}
    </div>
  );
}

export default PimPage;
