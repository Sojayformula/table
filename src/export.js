import React from 'react';

const ExportCSV = ({ data, fileName }) => {
  // Function to convert data to CSV format
  const convertToCSV = (data) => {
    const headers = Object.keys(data[0]).join(','); // Get the headers
    const rows = data.map(row =>
      Object.values(row).join(',')
    ); // Convert each row to CSV format
    return [headers, ...rows].join('\n');
  };

  // Function to download CSV
  const downloadCSV = () => {
    const csv = convertToCSV(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${fileName}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={downloadCSV} className="px-4 py-2 bg-blue-500 text-white rounded">
      Export
    </button>
  );
};

export default ExportCSV;










// import React from 'react';

// const Export = (data) => {

//     const handleExport = () => {
//         const csvData = convertToCSV(data);
//         const blob = new Blob([csvData], {type: 'text/csv'})
//         const url = window.URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.style.display = 'none';
//         a.href = url;
//         a.download = 'data.csv';
//         document.body.appendChild(a);
//         a.click();
//         window.URL.revokeObjectURL(url);
//     };

//     const convertToCSV = (data) => {
//         const headers = Object.keys(data[0]).join(",");
//         const rows = data.map(row => Object.values(row).join(",")).join('\n');
//         return`${headers}\n${rows}`
//     }
//     return (
//         <div>
//             <button onClick={handleExport}>Export</button>
//         </div>
//     );
// }

// export default Export;



// import React from 'react';
// import * as XLSX from 'xlsx';

// const ExportToExcel = ({ tableData, fileName }) => {
//   const exportToExcel = () => {
//     // Create a new workbook and a worksheet
//     const workbook = XLSX.utils.book_new();
//     const worksheet = XLSX.utils.json_to_sheet(tableData);

//     // Append the worksheet to the workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

//     // Write the workbook and trigger the download
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   return (
//     <button onClick={exportToExcel} className="px-4 py-2 bg-blue-500 text-white rounded">
//       Export to Excel
//     </button>
//   );
// };

// export default ExportToExcel;
