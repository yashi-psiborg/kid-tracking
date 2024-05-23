import React from "react";

const Table = ({ tableTitle, tableHeader, tableData, tableActions }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        {tableTitle && (
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            {tableTitle}
          </caption>
        )}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableHeader?.map((heading, i) => (
              <th
                key={heading?.key}
                scope="col"
                className={`px-6 py-3 ${
                  tableHeader?.length - 1 == i && "text-right"
                }`}
              >
                {heading?.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.map((data, i) => (
            <tr
              key={i}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              {tableHeader?.map((heading, j) =>
                heading?.key != `action` ? (
                  <td key={j} className={`px-6 py-4 whitespace-nowrap `}>
                    {data[heading?.key]}
                  </td>
                ) : (
                  <td key={j} className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
