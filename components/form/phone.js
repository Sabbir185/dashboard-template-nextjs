import {default as Input} from 'react-phone-number-input/input'
import {Form} from "antd";
import {isValidPhoneNumber} from "react-phone-number-input";
import {useI18n} from "../../contexts/i18n";

const PhoneInput = ({name = 'phone', label = 'Phone', required}) => {
    const i18n = useI18n()
    return (
        <Form.Item
            name={name}
            label={!!i18n.t ? i18n.t(label) : label}
            rules={[
                {required: required , message: "Please provide phone number"},
                () => ({
                    validator(_, value) {
                        if (value && !isValidPhoneNumber(value)) {
                            return Promise.reject(new Error('Invalid Phone number'))
                        }
                        return Promise.resolve();
                    },
                })
            ]}
            initialValue="">
            <Input className="form-input" withCountryCallingCode international/>
        </Form.Item>
    )
}
export default PhoneInput