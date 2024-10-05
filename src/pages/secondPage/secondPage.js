import React, { useState } from "react";
import { Dropdown } from "../../core/sub_components/buttons/buttons";
import Message from "../../core/sub_components/message/message";
import ImageUpload from "../imageUpload/imageUpload";

function SecondPage() {
  const [showUploadDialog, setShowUploadDialog] = useState(false);

  return (
    <div className="flex gap-10 flex-col justify-evenly h-full items-center">
      <div className="flex gap-2 flex-wrap p-4">
        <div className="flex gap-2 flex-wrap p-4">
          <Dropdown
            setShowUploadDialog={setShowUploadDialog}
            title="Upload PIM data"
            list={["Add Items Field", "Update Items Field"]}
          />
          <Dropdown title="Retrieve PIM data" disable={true} />
          <Dropdown title="Delete PIM data" disable={true} />
          <Dropdown title="Edit PIM data" disable={true} />
        </div>
        <div>{showUploadDialog && <div className=""><ImageUpload /></div>}</div>
      </div>
      <div>
        <Message message="second page" />
      </div>
    </div>
  );
}

export default SecondPage;
