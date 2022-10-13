import {Form, Upload} from "antd";
import React, {useEffect, useState} from "react";
import axios from "axios";

//File Input Component
const InputFile = (props) => {
    let max = props.max || 1
    let name = props.name || 'img'
    let listType = props.listType || "picture-card"

    let [refresh, setRefresh] = useState()
    let reload = () => setRefresh(!refresh)

    useEffect(() => {
        reload()
    }, [])

    const fileList = () => {
        let values = props.form.getFieldsValue()
        if (values[name]) {
            return values[name]
        }
        return []
    }

    const onChange = ({fileList: newFileList}) => {
        let value = {}
        value[name] = newFileList
        props.form.setFieldsValue(value)
        reload()
    }

    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = document.createElement("img");
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };

    return (
        <div className="form-group">
            {props.label && (<label className="block mb-2">{props.label}</label>)}
            <Form.Item name={name}>
                <Upload accept="image/png, image/gif, image/jpeg" listType={listType} onPreview={onPreview}
                        fileList={fileList()} onChange={onChange} maxCount={max}>
                    {fileList().length < max && "+ upload"}
                </Upload>
            </Form.Item>
        </div>
    )
}

export default InputFile

export const uploadImage = async image => {
    try {
        const data = new FormData()
        data.append('image', image)
        let url = `https://api.imgbb.com/1/upload?key=${process.env.imgbb_key}`;
        const res = await axios.post(url, data, {})
        if (res.data.success) {
            console.log(res.data)
            return res.data.data.image.url
        }
    } catch (e) {
        return ''
    }
}

export const getUploadImageUrl = async image => {
    if (image?.length > 0) {
        if (image[0].uid === '-1') {
            return image[0].url
        } else {
            let {originFileObj} = image[0]
            return await uploadImage(originFileObj)
        }
    }
    return ''
}

export const getUploadImagesUrl = async images => {
    console.log(images)
    if (images?.length > 0) {
        let urls = []
        for (let i = 0; i < images?.length; i++) {
            if (+images[i].uid < 0) {
                urls.push( images[i].url)
            } else {
                let {originFileObj} = images[i]
                let url = await uploadImage(originFileObj)
                urls.push(url)
            }
        }
        return urls;
    }
    return []
}