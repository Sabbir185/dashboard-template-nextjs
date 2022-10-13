import {reportExportToExcel} from "../../helpers/excel";
import {exportFileToCSV} from "../../helpers/csv";
import {AiFillFileExcel} from "react-icons/ai";
import {FaFileCsv} from "react-icons/fa";
import {FiPrinter} from "react-icons/fi";
import {Loader} from "./preloader";
import {useI18n} from "../../contexts/i18n";

const ReportTable = ({
                         columns,
                         data,
                         indexed,
                         action,
                         pagination = false,
                         shadow = true,
                         loading,
                         descriptions = [],
                         title,
                         subtitle,
                         date,
                         error,
                        customRows
                     }) => {
    const i18n = useI18n()
    const handlePrint = () => {
        let report = document.querySelector('#report_table').innerHTML;
        let frame = window.frames['print-frame'].contentWindow
        frame.document.head.innerHTML = `
        <style>    
        table, th, td {
            font-size: 12px;
            border-collapse: collapse;
            min-width: 60px;
            text-align: left;
            padding: 10px 0;
            border: 1px solid rgba(0,0,0,.2);
        }
        table {
            width: 100%;
            padding: 5px;
            border: 1px solid rgba(0,0,0,.2);
            margin-top: 8px;
        }
        table table {
            border: none;
        }
        th {
            padding: 5px;
        }
        td {
            padding: 5px;
        }
        .hide-report {
            display: none;
        }
        h4 {
            margin-bottom: 0;
        }
        p {
            margin: 10px 0;
        }
        .text-right {
            text-align: right;
        }
        .font-bold {
            font-weight: bold;
        }
        </style>
        `
        frame.document.body.innerHTML = `<table>${report}</table>`
        window.setTimeout(() => {
        frame.print();
    }, 300)
    }

    let initialDes = []
    if (subtitle) {
        initialDes.push(subtitle)
    }
    if (date) {
        initialDes.push(`${i18n.t("Date")}: ${date?.start?.format('Do MMM, YYYY')} - ${date?.end?.format('Do MMM, YYYY')}`)
    }

    const handleExportExcel = () => {
        reportExportToExcel({
            fileName: `${title || 'Report'}`,
            sheetName: 'Sheet 1',
            data: data?.map((d, index) => ({
                index: index + 1,
                ...d
            })) || [],
            headers: [
                {
                    name: 'No',
                    key: 'index',
                    width: 25,
                },
                ...columns?.map(c => ({
                    name: c.text,
                    key: c.dataField,
                    width: 25,
                })),
            ],
            title: title,
            descriptions: [...initialDes, ...descriptions],
        })
    }

    const handleExportCSV = () => {
        exportFileToCSV(`${title || 'Report'}`, data?.map((d, ind) => {
            let c = {
                No: ind + 1
            }
            columns?.forEach(col => {
                c[col.text] = d[col.dataField]
            })
            return c
        }))
    }


    return (
        <>
            <div className={`w-full bg-white ${shadow ? 'shadow-lg' : ''} rounded-sm`}>
                <div className="px-4 pt-3 pb-2 border-b border-gray-100 flex flex-wrap justify-between">
                    <div className="flex flex-wrap w-full md:w-3/5 mb-2 md:mb-0">
                        {action}
                    </div>
                    <div className="w-full md:w-2/5 flex md:justify-end pt-3">
                        <div className="border-y border-main border-l rounded h-10">
                            <button
                                className="border-main h-full border-r px-3 text-main hover:bg-main hover:text-white"
                                onClick={handleExportExcel}><AiFillFileExcel
                                className="inline-block"/> {i18n.t("Excel")}
                            </button>
                            <button
                                className="border-main h-full border-r px-3 text-main hover:bg-main hover:text-white"
                                onClick={handleExportCSV}><FaFileCsv
                                className="inline-block"/> {i18n.t("CSV")}
                            </button>
                            <button className="h-full px-2 text-main border-main border-r rounded-l hover:bg-main hover:text-white"
                                    onClick={handlePrint}>
                                <FiPrinter
                                    className="inline-block"/> {i18n.t("Print")}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-3 relative" id="report_table">
                    <div className="hidden">
                        <h4 style={{marginBottom: 0}}>{title}</h4>
                        {subtitle && <p>{subtitle}</p>}
                        {date && (
                            <p>{"Date"}: {date?.start?.format('Do MMM, YYYY')} - {date?.end?.format('Do MMM, YYYY')}</p>
                        )}
                        {descriptions?.map((d, index) => (
                            <p key={index}>{d}</p>
                        ))}
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead className="text-xs font-semibold uppercase text-gray-500 bg-gray-300">
                            <tr>
                                {indexed && (
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">#</div>
                                    </th>
                                )}
                                {columns?.map((column, index) => (
                                    <th className="p-2 whitespace-nowrap" key={index}>
                                        <div
                                            className={`font-semibold ${column?.className}`}>{i18n.t(column.text)}</div>
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100">
                            {loading ? (
                                <tr>
                                    <td className="h-44">
                                        <div className='absolute w-full flex justify-center'>
                                            <Loader/>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                <>
                                    {(pagination ? data?.data : data)?.map((row, index) => (
                                        <tr key={index}>
                                            {indexed &&
                                                <td className="p-2 whitespace-nowrap text-gray-500">{(pagination ? data?.from : 1) + index}</td>}
                                            {columns?.map((column, index) => (
                                                <td className={`p-2 whitespace-nowrap text-gray-500 ${column?.className || ''}`}
                                                    key={index}>
                                                    {column.formatter ? column.formatter(row[column.dataField], row) : (row[column.dataField] || '-')}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </>
                            )}
                            {customRows}
                            </tbody>
                        </table>
                        {error && <p className="text-center my-4 text-danger text-xl">{i18n.t("No Report Found")}</p>}
                    </div>
                </div>
            </div>
            <iframe id="print-frame" className="hidden"/>
        </>
    )
}
export default ReportTable
