import React from "react";

function ErrorListing({ errors }) {
  return (
    <div>
      {errors && errors.length === 0 ? (
        <>NO ERRORS FOUND</>
      ) : (
        <>
          <h2 className="my-4 text-lg border-b text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-6 py-3">
            Errors
          </h2>
          <div className="relative overflow-x-auto h-80">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                {errors &&
                  errors.length > 0 &&
                  errors
                    .filter((elem) => elem.status === "error")
                    .map((elem, index) => {
                      return (
                        <tr
                          key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <td className="px-6 py-4">{index + 1}</td>
                          <td className="px-6 py-4 uppercase">{Object.keys(elem)[1]}</td>
                          <td className="px-6 py-4">{elem.sku.toString()}</td>
                          <td className="px-6 py-4 uppercase">{elem.status}</td>
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
