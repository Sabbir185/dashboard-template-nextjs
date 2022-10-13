import {ExcelExport} from "./export-xlsx";

export const reportExportToExcel = ({fileName, sheetName, headers,  data, title, descriptions = []}) => {
    const excelExport = new ExcelExport()
    const SETTINGS_FOR_EXPORT = {
        fileName: fileName,
        workSheets: [
            {
                sheetName: sheetName,
                startingRowNumber: 1,
                gapBetweenTwoTables: 2,
                tableSettings: {
                    data: {
                        importable: true,
                        headerDefinition: headers,
                        tableTitle: title,
                        descriptions: descriptions,
                    },
                },
            },
        ],
    }
    excelExport.downloadExcel(SETTINGS_FOR_EXPORT, [{data}]).then(r => {});
}
