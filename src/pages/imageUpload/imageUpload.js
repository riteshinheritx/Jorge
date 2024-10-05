import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CancelIcon from "@mui/icons-material/Cancel";


const ImageUpload = ({
    setFile,
    file,
    setImgFormData,
    imgFormData,
    setImageUrl,
    imageUrl,
  }) => {
    const onDrop = useCallback((acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const selectedFile = acceptedFiles[0];
        setFile(selectedFile);
        const url = URL.createObjectURL(selectedFile);
        setImageUrl(url);
        uploadFile(selectedFile);
      }
    }, []);
  
    const uploadFile = (file) => {
      const formData = new FormData();
      formData.append("file", file);
      setImgFormData(formData);
    };
  
    const removeFile = (
      e   ) => {
      e.stopPropagation();
      setFile(null);
      setImageUrl(null);
      setImgFormData(new FormData());
    };
  
    const { getRootProps, getInputProps } = useDropzone({
      accept: {
        "image/*": ["png", "jpeg"],
      },
      onDrop,
      multiple: false,
    });
  
    useEffect(() => {
      if (imgFormData && imgFormData == new FormData()) {
        if (file !== null && setImageUrl !== null) {
          setFile(null);
          setImageUrl(null);
        }
      }
    }, [imgFormData]);
  
    return (
      <div
        {...getRootProps()}
        className="flex flex-col h-[30vh] items-center justify-center p-10 border border-dashed border-slate-400 bg-gray-50 rounded-lg"
      >
        Choose a File
        <input {...getInputProps()}  className="" />
        {!file && (
          <>
            <CloudUploadIcon className="text-slate-200 text-9xl" />
            <p className="text-lg font-normal text-gray-500">
              Drag 'n' drop a file, or click to select a file.
            </p>
          </>
        )}
        {file && (
          <div className="flex flex-col items-center gap-4 mt-4">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <img
                src={imageUrl || ""}
                alt={file.name}
                className="object-cover w-24 h-24"
                onLoad={() => URL.revokeObjectURL(imageUrl || "")}
              />
              <p className="text-sm font-light text-gray-700">{file.name}</p>
              <CancelIcon onClick={(e) => removeFile(e)} />
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ImageUpload;