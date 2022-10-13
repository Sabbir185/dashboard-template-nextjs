import React from 'react';
import { Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';


const FormTextArea = ({ label, formName, formPlaceholder, formMessage, formRequired = false, requiredOption=false }) => {

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
                <TextArea placeholder={`${formPlaceholder}`} rows={3} cols={5} />
            </Form.Item>
        </div>
    );
};

export default FormTextArea;