import React from 'react';
import SignatureCanvas from 'react-signature-canvas'


const DigitalSignature = ({ handleDigitalSignatureData, handleDigitalSignatureClear, digitalSignatureRef }) => {


    return (
        <div className=''>
            <h6 className='bg-gray-300 py-1 px-2 text-center text-slate-600 mb-3'>Sign in given box and click to save button</h6>
            <SignatureCanvas penColor='green'
                canvasProps={{ width: 230, height: 100, className: 'sigCanvas border-2 mx-auto' }} ref={digitalSignatureRef} />

            <div className='flex justify-center gap-2 mt-3'>
                <span className='btn btn-primary btn-sm' onClick={handleDigitalSignatureData}>Save</span>
                <span className='btn btn-danger btn-sm' onClick={handleDigitalSignatureClear}>Clear</span>
            </div>

        </div>
    );
};

export default DigitalSignature;