import { IconPicker as Input } from 'react-fa-icon-picker'
import {Form} from "antd";


const IconPicker = () => {
    return (
        <>
            <Form.Item name="icon" label="Icon" className="mb-2">
                <Input pickerIconStyles={{fontsize: 28, padding: 8}}/>
            </Form.Item>
        </>
    )
}
export default IconPicker