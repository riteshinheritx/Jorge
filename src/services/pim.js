import { toast } from "react-toastify";
import { Request } from "./network";

export const uploadFile = async (payload, isUpdate) => {
    try {
        return await Request({
            url: `https://t1a-container.azurewebsites.net/api/data/${isUpdate === "add" ? "load" : "update"}`,
            method: "POST",
            data: payload
        });
    } catch (e) {
        if(e?.response?.data?.error?.includes("Invalid file type.")){
            return toast.error(e.response.data.error)
        }
        return console.log("something went wrong in upload file api")
    }
};
