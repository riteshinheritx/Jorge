import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CancelIcon from "@mui/icons-material/Cancel";
import { uploadFile } from "../services/pim";
import { MidSizeButton } from "../core/sub_components/buttons";
import { toast } from "react-toastify";
import * as XLSX from 'xlsx';



const ImageUpload = ({ uploaderType, setErrors }) => {
  const [inflight, setInflight] = useState(false);
  const [file, setFile] = useState();
  const [formData, setFormData] = useState(null);

  const onDrop = (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      if (selectedFile) {
        setFile(selectedFile);
        const newFormData = new FormData();
        newFormData.append("input_file", selectedFile);

        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const names = workbook.SheetNames;
          console.log("SheetNames--->", names)
          if (names.length > 0) {
            newFormData.append("sheet_name", names[0]);
          } else {
            toast.error("Failed to retrieve sheet names. Please check the file and try again")
            return
          }
          setFormData(newFormData);
        };
        reader.readAsArrayBuffer(selectedFile);
      }

    } else {
      if (rejectedFiles.length > 0) {
        toast.error("Only .xlsx files are allowed!");
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
    setFormData(null);
  };

  const handleUpload = async () => {
    if (inflight) {
      toast.error(
        "Request is already being processed. Please wait for it to complete."
      );
      return;
    }
    if (!formData) {
      toast.error(
        "File upload required. Please choose a file before continuing."
      );
      return;
    }

    setInflight(true);
    const res = await uploadFile(formData, uploaderType);
    setInflight(false);

    if (res) {
      if (res.error && (res.error || "").includes("Invalid file type")) {
        toast.error(res.error);
        return;
      }
      if (res.status === 200) {
        setErrors(res.payload);
      }
    } else {
      toast.error("File upload failed during the API request. Please try again.");
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
              <p className="text-sm font-light text-gray-700">{file.name}</p>
              <CancelIcon onClick={(e) => removeFile(e)} />
            </div>
          </div>
        )}
      </div>
      {formData && (
        <div onClick={handleUpload}>
          <MidSizeButton title="Upload" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
