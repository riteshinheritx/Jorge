import { Request } from "./network";

export const uploadFile = async (payload, isUpdate) => {
    try {
        const res = await Request({
            url: `https://t1a-container.azurewebsites.net/api/data/${isUpdate === "add" ? "load" : "update"}`,
            method: "POST",
            data: payload
        });

        if (res) {
            return res.data
        } else {
            console.log("something Went Wrong in sendMessageToAi API")
        }

    } catch (e) {
        return console.log("something went wrong in sendMessageToAi api")
    }
};
