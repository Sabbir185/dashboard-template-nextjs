import React from 'react';
import { Form, Radio } from 'antd';


const FormInputRadioButton = ({ label, input_name, select_options=[], requiredOption=false }) => {


    return (
        <>
            <span className='text-gray-600'>{label}</span>
            <Form.Item
                name={`${input_name}`}
                rules={[
                    {
                        required: requiredOption,
                        message: `This field is required!`,
                    },
                ]}
            >
                <Radio.Group >
                    {
                        select_options?.length >0 &&
                        select_options?.map((rd, i) => 
                            <Radio value={rd} key={i+4575889}>
                                <span className='capitalize'>{rd}</span>
                            </Radio>
                        )
                    }
                </Radio.Group>
            </Form.Item>
        </>
    );
};

export default FormInputRadioButton;