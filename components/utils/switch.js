import { Form, Switch } from 'antd';
import React from 'react';


const FormSwitch = ({ label, formName, handleSwitchBooleanStatus, requiredOption = false }) => {


    return (
        <div>
            <span className='text-gray-600'>{label}</span>
            <div className=''>
                <Form.Item
                    name={`${formName}`}
                    initialValue={false}
                    rules={[
                        {
                            required: requiredOption,
                            message: `This field is required!`,
                        },
                    ]}
                >
                    <Switch onChange={(e) => handleSwitchBooleanStatus(e, formName)} className='mt-2' />
                    <small className='block pt-1'> ( <span className='text-purple-500'>No</span> / <span className='text-green-700'> Yes </span> )</small>
                </Form.Item>
            </div>
        </div>
    );
};

export default FormSwitch;