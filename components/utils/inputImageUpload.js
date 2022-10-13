import { Tooltip } from 'antd';
import React from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import LoaderSpin from '../delete/loader';



const InputImageUpload = ({ input_name, imgTitle, imgURL, fileLoading, handleImage, images, requiredOption=false }) => {

    const url = images?.find(im => im[input_name]);

    return (
        <div className='mt-4 md:mt-3 text-center mx-auto'>
            <span className='text-gray-600 inline-block mb-2 relative'>
                {imgTitle}
                <Tooltip title="The file must be an image and less than or equal to 3MB!" color='blue'>
                    <span className='absolute top-1 left-[110%] text-purple-500 hover:text-purple-600 hover:shadow-sm cursor-pointer'> <BsFillQuestionCircleFill /> </span>
                </Tooltip>
            </span>
            <div title='Upload uber summary picture'>
                <label htmlFor={input_name}>
                    <div className='border-2 h-28 w-44 hover:border-purple-600 hover:border-dotted transition duration-500 hover:cursor-pointer'>
                        {
                            url ?
                                <img src={`${url[input_name]}`} alt="Image-file" className='h-28 w-28 pb-1 mx-auto block' />
                                :
                                <div className='text-center h-28 w-44 flex items-center justify-center relative'>
                                    <div>
                                        <div className='flex justify-center mt-2'>
                                            <AiOutlineCloudDownload size={20} />
                                        </div>
                                        <p>Upload a file</p>
                                    </div>

                                    {
                                        (fileLoading.isloading === true && fileLoading.inputName === input_name) &&
                                        <span className='absolute top-[3%] left-[15%]'>
                                            <span className="pl-1 inline-block"><LoaderSpin /></span>
                                            <p className='bg-purple-500 px-2 py-1 rounded-md text-white font-mono shadow-md'>Uploading...</p>
                                        </span>
                                    }
                                </div>
                        }
                        <input
                            id={input_name}
                            type="file"
                            className='invisible'
                            onChange={(e) => handleImage(e, input_name)}
                            required={requiredOption}
                        />
                    </div>
                </label>
            </div>
        </div>
    );
};



export default InputImageUpload;