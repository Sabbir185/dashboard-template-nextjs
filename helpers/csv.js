import Papa from 'papaparse'

export const exportFileToCSV = (title, json) => {
    const jsonExport = require('jsonexport');
    jsonExport( json, function(err, csv){
        if (!err){
            let link = document.createElement("a");
            link.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
            link.download = title + ".csv";
            link.click();
        }
    });
}

export const importCSVtoJSON = response => {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
    input.onchange = e => {
        let file = e.target.files[0];
        if(file.type === 'text/csv') {
            Papa.parse(file, {
                complete: function(results) {
                    let data = results.data
                    let headers = data[0]
                    let result = []
                    for(let i =1; i<data.length; i++) {
                        let obj = {}
                        for (let j = 0; j < headers.length; j++) {
                            obj[headers[j]] = data[i][j]
                        }
                        result.push(obj)
                    }
                    response(result)
                }
            });
        } else {
            Swal.fire('Error', 'Only CSV file can be uploaded', 'error');
        }
    }
    input.click();
}

function csvJSON(csv) {
    const lines = csv.split('\n')
    const result = []
    const headers = lines[0].split(',')

    for (let i = 1; i < lines.length; i++) {
        if (!lines[i])
            continue
        const obj = {}
        const currentline = lines[i].split(',')

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j]
        }
        result.push(obj)
    }
    return result
}