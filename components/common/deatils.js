import {Table} from "react-bootstrap";
import {useI18n} from "../../contexts/i18n";


const DetailsTable = ({columns, data}) => {
    const i18n = useI18n()
    return (
        <Table bordered>
            <tbody className="text-sm">
            {data && columns?.map((column, index) => (
                <tr key={index}>
                    <td className="w-1/2" style={{padding: 12}}>{i18n.t(column?.label)}</td>
                    <th style={{padding: 12}} className={column?.className}>
                        {column.formatter ? column.formatter(data[column.dataField], data) : data[column.dataField]}
                    </th>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}
export default DetailsTable