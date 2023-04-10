import axios from 'axios';

const upload = async (file) =>{
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "filmhped0ote");

    try {
        const res = await axios.post("https://api.cloudinary.com/v1_1/df1l3qdiw/image/upload", data);

        const {url} = res.data;
        return url;
    } catch (error) {
        console.log(error);
    }
}

export default upload;