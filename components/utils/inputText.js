import React from 'react';
import { Form, Input } from 'antd';


const FormInput = ({ label, formName, formPlaceholder, formMessage, formRequired = false, requiredOption=false }) => {

    return (
        <div>
            <span className='text-gray-600'>{label}</span>
            <Form.Item
                name={`${formName}`}
                rules={[
                    {
                        required: requiredOption,
                        message: `This field is required!`,
                    },
                ]}

            >
                <Input placeholder={`${formPlaceholder}`} style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }} />
            </Form.Item>
        </div>
    );
};

export default FormInput;