import {useState} from "react"
import {Form} from 'antd'
import {BiLockAlt, BiLockOpenAlt} from "react-icons/bi";
import {useI18n} from "../../contexts/i18n";

const PasswordInputField = ({value, onChange, prefix, placeholder}) => {
    const [visible, setVisible] = useState(false)

    return (
        <div className="relative">
            <input
                className="form-input pe-8"
                type={visible ? "text" : "password"}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            <div
                className="absolute right-2.5 top-2.5 text-gray-500"
                role="button"
                onClick={() => setVisible(!visible)}>
                {visible ? <BiLockOpenAlt size={18}/> : <BiLockAlt size={18}/>}

            </div>
        </div>
    )
}

const PasswordInput = ({
                           name,
                           label,
                           required,
                           min = 6,
                           confirm = false,
                           noCurrent = false,
                           dependency = 'password'
                       }) => {
    const i18n = useI18n()
    let rules = [
        {required, message: 'Please enter a password'},
        {min: confirm ? 0 : min, message: 'Password must be at least 6 characters'}
    ]
    if (noCurrent) {
        rules.push(({getFieldValue}) => ({
            validator(_, value) {
                if ((!value && required) || getFieldValue('current_password') !== value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error("New password can't be same as current password"));
            },
        }))
    }

    if (confirm) {
        rules.push(({getFieldValue}) => ({
            validator(_, value) {
                if ((!value && required) || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
        }))
    }

    return (
        <Form.Item name={name} label={!!i18n.t ? i18n.t(label) : label} rules={rules} initialValue="">
            <PasswordInputField/>
        </Form.Item>
    )
}
export default PasswordInput