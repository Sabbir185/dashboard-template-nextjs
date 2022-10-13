import React from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { ImFileExcel } from 'react-icons/im';
import { Tooltip } from 'antd';
import { MdFileDownload } from 'react-icons/md';


const ExportExcel = ({ productDetail, user, finalDataDetail, action, allFile, titleAll, downloadAll, rowData }) => {

    const fileType = "xlsx"

    const exportDataToFile = () => {
        const product1 = XLSX.utils.json_to_sheet(rowData);
        let wb1 = { Sheets: { data: product1 }, SheetNames: ["data"] };

        product1["!cols"] = [
            { width: 28 },
            { width: 8 },
            { width: 12 },
            { width: 12 },
            { width: 12 }
        ];

        finalDataDetail.map((item, index) => {
            var wscols = [
                { width: 35 },    
                { width: 50 },  
                { width: 30 },
                { width: 30 },
            ];

            item['json'] = XLSX.utils.json_to_sheet(item.data);

            item.json["!cols"] = wscols;
        })

        let obj = {
            Sheets: {},
            SheetNames: []
        }

        obj = wb1;

        finalDataDetail.map((item, key) => {
            return (obj.Sheets[item.category] = item.json,
                obj.SheetNames.push(item.category))
        })

        const test = { ...obj }
        const excelBuffer = XLSX.write(test, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, `${titleAll ? titleAll : "Student-TaxFile"}` + ".xlsx")
    }


    return (
        <div>
            {
                (action === true && allFile === false) &&
                <Tooltip placement="top" title="Download Excel File">
                    <span
                        className="inline-block bg-green-600 hover:bg-green-600 p-[5px] rounded-[3px] text-white cursor-pointer"
                        onClick={exportDataToFile}
                    >
                        <ImFileExcel />
                    </span>
                </Tooltip>
            }
            {
                (action === false && allFile === true) &&
                <div>
                    {
                        (finalDataDetail?.length >= 1 && finalDataDetail[0]?.category !== 'undefined undefined 0') ?

                            <div className='flex items-center gap-1 text-white' onClick={exportDataToFile}>
                                <span><MdFileDownload /></span>
                                <button>DOWNLOAD SELECTED FILE</button>
                            </div>
                            :
                            <Tooltip placement="top" title="Please select one or more files" color='red'>
                                <div className='flex items-center gap-1 text-white cursor-not-allowed'>
                                    <span className='hover:cursor-not-allowed'><MdFileDownload /></span>
                                    <button className='hover:cursor-not-allowed'>DOWNLOAD SELECTED FILE</button>
                                </div>
                            </Tooltip>
                    }
                </div>

            }

            {
                (downloadAll === true) &&
                <Tooltip placement="top" title="Download all files" color='#9925E5'>
                    <div className='flex items-center gap-1 text-white' onClick={exportDataToFile}>
                        <span><MdFileDownload /></span>
                        <button>DOWNLOAD ALL</button>
                    </div>
                </Tooltip>
            }
        </div>
    );
};

export default ExportExcel;

