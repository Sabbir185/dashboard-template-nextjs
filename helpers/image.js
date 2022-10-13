import axios from "axios";

export const uploadImage = async (image, def) => {
    try {
        if(!!image) {
            const data = new FormData()
            data.append('image', image)
            let url = `https://api.imgbb.com/1/upload?key=${process.env.imgbb_key}`;
            const res = await axios.post(url, data, {})
            if (res.data.success) {
                return res.data.data.image.url
            }
        }
        return def || ''
    } catch (e) {
        return def || ''
    }
}