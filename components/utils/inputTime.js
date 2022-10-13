import React from 'react';
import { Form, TimePicker } from 'antd';


const FormTimeInput = ({ label, formName, handleTimePickUp, handleTimeField, formPlaceholder, formMessage, requiredOption=false }) => {

    return (
        <div>
            <span className='text-gray-600'>{label}</span>
            <Form.Item
                rules={[
                    {
                        required: requiredOption,
                        message: `This field is required!`,
                    },
                ]}
            >
                <TimePicker  format='HH:mm' onChange={handleTimePickUp} onFocus={()=>handleTimeField(formName)}/>
            </Form.Item>
        </div>
    );
};

export default FormTimeInput;