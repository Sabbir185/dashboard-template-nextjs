import { AWSFileUploadAPI } from "../../helpers/backend_helper";


const fileUploadAWS = (setFileLoading, e, cb, setIsPhotoUploaded, arrayData = false) => {
    setFileLoading(true);

    const data = new FormData()
    data.append('file', e.target.files[0])

    AWSFileUploadAPI(data).then(url => {
        if (url?.url) {
            if (arrayData === false) {
                cb(url?.url)
                setIsPhotoUploaded(true)
                setFileLoading(false)

            } else if (arrayData === true) {
                cb(pre => [...pre, url?.url])
                setIsPhotoUploaded(true)
                setFileLoading(false)
            }

        } else {
            setIsPhotoUploaded(false)
            setFileLoading(false)
        }
    });
}


export {
    fileUploadAWS
}