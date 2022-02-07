import axios from "axios"


const uploadImage = async (file) => {

    if (!file) return

    try {
        
        const form_data = new FormData()
        form_data.append('upload_preset', 'th8fp46v')
        form_data.append('file', file)

        const url = 'https://api.cloudinary.com/v1_1/dckp2mpjz/image/upload'
        const {data} = await axios.post(url, form_data)

        console.log(data);

        return data.secure_url

    } catch (error) {
        console.log('error al cargar imagen', error);
        return null
    }
}

export default uploadImage