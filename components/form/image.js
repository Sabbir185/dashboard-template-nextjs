import React, {useEffect, useState} from "react"
import {Modal} from "antd"

const ImageInput = ({value, onChange, onSelect, url, pdf = false}) => {
    const [image, setImage] = useState()
    useEffect(() => {
        if (typeof onSelect === 'function' && typeof value === "object") {
            let reader = new FileReader()
            reader.readAsDataURL(value)
            reader.onload = function () {
                onSelect(reader.result)
            }
        }
    }, [value])

    const handleChange = e => {
        onChange(e.target.files[0])
    }

    return (
        <div className="position-relative hover:outline-none focus:outline-none hover:border-blue-600">
            <input
                type="file"
                className="form-control hover:outline-none focus:outline-none hover:shadow-none focus:shadow-none hover:border-blue-600 focus:border-blue-600"
                accept={"image/png, image/gif, image/jpeg" + ( pdf ? ' application/pdf' : '')} onChange={handleChange}
                   aria-label="Upload"/>
            {url && (
                <img role="button" src={url} alt="" onClick={() => setImage(url)} className="position-absolute" id="inputGroupFileAddon04" style={{height: 33, width: 48, right: 1, top: 1, zIndex: 10}}/>
            )}
            <Modal width={800} visible={image} onCancel={() => setImage(undefined)} footer={null}
                   bodyStyle={{padding: 0, zIndex: 60}}
                   closeIcon={<i className="fa fa-times fa-lg bg-dark absolute right-4 p-2 rounded bg-gray-300 bg-opacity-25 text-white top-4"/>}>
                <img className="w-100" style={{minHeight: 400}} src={image} alt={''}/>
            </Modal>
        </div>
    )

}
export default ImageInput