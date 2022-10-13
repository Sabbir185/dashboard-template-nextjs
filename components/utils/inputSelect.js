import React from 'react';
import { Form, Select } from 'antd';
const { Option } = Select;


const FormInputSelect = ({ label, formName, select_options, formPlaceholder, formMessage, formRequired = false, provinceData, requiredOption=false, setMaritalStatus }) => {

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
                <Select

                    style={{
                        width: '100%',
                        borderTop: 'none',
                    }}
                    placeholder={`${formPlaceholder || 'Select'}`}
                    onChange={setMaritalStatus}
                >
                    {
                        select_options?.map((data, i) => (
                            <Option
                                value={data}
                                key={i + 7987987}

                            >
                                <span className='capitalize'>{data?.split('_').join(' ')}</span>
                            </Option>
                        ))
                    }

                    {/* other options if needed */}
                    {
                        formName === 'province_name' &&
                        provinceData?.map((province, i) => (
                            <Option
                                value={province?._id}
                                key={province?._id}

                            >
                                <span className='capitalize'>{province?.name?.split('_').join(' ')}</span>
                            </Option>
                        ))
                    }
                </Select>
            </Form.Item>
        </div>
    );
};

export default FormInputSelect;