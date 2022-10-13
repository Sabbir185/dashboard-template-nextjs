import { Tooltip } from 'antd';
import React from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';



const InputFileUpload = ({ input_name, placeholder, fileTitle, fileLoading, handleFile, files, requiredOption=false }) => {

    const url = files?.find(file => file[input_name]);


    return (
        <div className=''>
            <span className='text-gray-600 inline-block mb-2 relative'>
                {fileTitle}
                <Tooltip title="Maximum size is 5 MB! Valid files are image, csv, pdf, excel, zip, rar" color='blue'>
                    <span className='absolute top-1 left-[110%] text-purple-500 hover:text-purple-600 hover:shadow-sm cursor-pointer'> <BsFillQuestionCircleFill /> </span>
                </Tooltip>
            </span>

            <input
                id={input_name}
                type="file"
                onChange={(e) => handleFile(e, input_name)}
                required={requiredOption}
            />
        </div>
    );
};



export default InputFileUpload;