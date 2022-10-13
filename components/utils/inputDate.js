import React from 'react';
import { DatePicker, Form } from 'antd';


const FormDateInput = ({ label, formName, handleDatePickUp, handleDateField, formPlaceholder, formMessage, requiredOption=false }) => {

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
                <DatePicker placeholder='MM/DD/YYYY' format='MM/DD/YYYY' style={{ width: '100%' }} onChange={handleDatePickUp} onFocus={() => handleDateField(formName)} />
            </Form.Item>
        </div>
    );
};

export default FormDateInput;