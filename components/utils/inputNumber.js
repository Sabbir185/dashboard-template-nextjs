import React from 'react';
import { Form, InputNumber } from 'antd';


const FormNumber = ({ label, formName, formPlaceholder, formMessage, formRequired = false, requiredOption=false }) => {

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
                <InputNumber placeholder={`${formPlaceholder}`} style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', width: '100%' }} />
            </Form.Item>
        </div>
    );
};

export default FormNumber;