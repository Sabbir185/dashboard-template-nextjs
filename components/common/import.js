import {Modal} from "antd";
import {useState} from "react";
import Button from "./button";
import {useAction} from "../../helpers/hooks";

const Import = ({visible, setVisible, title, onFinish, descriptions, template}) => {
    const [error, setError] = useState(false)
    const [file, setFile] = useState()

    const handleDownload = () => {
        let link = document.createElement("a");
        link.href = `/templates/${template}.xlsx`
        link.download = `${template}.xlsx`;
        link.click();
    }

    return (
        <Modal visible={visible} onCancel={() => {
            setVisible(false)
            setFile(undefined)
        }} title={title} footer={null} destroyOnClose={true} width={1000}>
            <input
                className="form-control mb-3"
                type="file"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                onChange={(e) => {
                    setError(false)
                    setFile(e.target.files[0])
                }}
            />
            {error && <p className="text-danger mb-3">Please select a file</p>}
            <Button onClick={() => {
                if (file) {
                    setError(false)
                    onFinish(file)
                    setVisible(false)
                    setFile(undefined)
                } else {
                    setError(true)
                }
            }}>Submit</Button>
            {template && (
                <button
                    className="btn btn-success ml-2 btn-sm h-9"
                    onClick={handleDownload}>
                    Download Example
                </button>
            )}
            <p className="mt-2">Please download this <a className="text-primary" onClick={handleDownload}>Example file</a> for example how excel will be formatting</p>
            <table className="table table-bordered mt-3">
                <tbody>
                {descriptions?.map((d, index) => (
                    <tr key={index}>
                        <td>{d.title}</td>
                        <td>{d.required &&
                            <span className="text-primary text-xs border border-primary px-2 rounded">This Field is required</span>} {d?.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </Modal>
    )
}
export default Import