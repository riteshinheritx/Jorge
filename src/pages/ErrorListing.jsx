import React from "react";

function ErrorListing({ errors }) {

  const errorRows = errors && errors.length > 0 && errors.filter((elem) => typeof elem !== "string" && elem?.status === "error")

  return (
    <div>
      {errorRows.length === 0 ? (
        <div className={"my-4 text-lg border-b text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-6 py-3"}>
          <p>NO ERRORS FOUND</p>
        </div>
      ) : (
        <>
          <h2 className="my-4 text-lg border-b text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-6 py-3">
            Errors
          </h2>
          <div className="relative overflow-x-auto h-80">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                {errorRows.length > 0 && errorRows.map((elem, index) => {
                      return (
                        <tr
                          key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <td className="px-6 py-4">{index + 1}</td>
                          <td className="px-6 py-4 uppercase">
                            {Object.keys(elem)[1]}
                          </td>
                          <td className="px-6 py-4">
                            {elem.sku === null ? "Nan" : elem.sku}
                          </td>
                          <td className="px-6 py-4 uppercase">{elem?.status}</td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default ErrorListing;
