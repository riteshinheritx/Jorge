import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CancelIcon from "@mui/icons-material/Cancel";
import { uploadFile } from "../services/pim";
import { MidSizeButton } from "../core/sub_components/buttons";

const ImageUpload = ({ setErrors }) => {
  const [file, setFile] = useState();
  const [formData, setFormData] = useState();

  const onDrop = (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      const formData = new FormData();
      formData.append("file", selectedFile);
      setFormData(formData);
    } else {
      if (rejectedFiles.length > 0) {
        alert("Only .xlsx files are allowed!");
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".xlsx",
    onDrop,
    multiple: false,
  });

  const removeFile = (e) => {
    e.stopPropagation();
    setFile(null);
    setFormData(new FormData());
  };

  const handleUpload = async () => {
    const payload = {
      input_file: formData,
      sheet_name: "Sheet_one",
    };
    const res = await uploadFile(payload);
    if (res) {
      setErrors(res);
    }
  };

  useEffect(() => {
    if (file !== null) {
      setFile(null);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div
        {...getRootProps()}
        className="flex flex-col h-[30vh] items-center justify-center p-10 border border-dashed border-slate-400 bg-gray-50 rounded-lg"
      >
        Choose a File
        <input {...getInputProps()} className="" />
        {!file && (
          <>
            <CloudUploadIcon className="text-slate-200 text-9xl" />
            <p className="text-lg font-normal text-gray-500">
              Drag 'n' drop a .xlsx file, or click to select a .xlsx file.
            </p>
          </>
        )}
        {file && (
          <div className="flex flex-col items-center gap-4 mt-4">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              {/* <img
                src={imageUrl || ""}
                alt={file.name}
                className="object-cover w-24 h-24"
                onLoad={() => URL.revokeObjectURL(imageUrl || "")}
              /> */}
              <p className="text-sm font-light text-gray-700">{file.name}</p>
              <CancelIcon onClick={(e) => removeFile(e)} />
            </div>
          </div>
        )}
      </div>
      <div onClick={handleUpload}>
        <MidSizeButton title="Upload" />
      </div>
    </div>
  );
};

export default ImageUpload;
