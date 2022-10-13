import {Form} from "antd";
import InputColor from "react-input-color";

const ColorInput = ({name = 'color', label = 'Color'}) => {
    return (
        <Form.Item name={name} label={label} initialValue="#5e72e4">
            <Input/>
        </Form.Item>
    )
}
export default ColorInput

const Input = ({value, onChange}) => (
    <>
        {value && (
            <InputColor initialValue={value} onChange={e => onChange(e.hex)}/>
        )}
    </>
)