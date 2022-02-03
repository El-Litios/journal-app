
import axios from 'axios'

const journal = axios.create({
    baseURL: 'https://vue-journal-app-e6f46-default-rtdb.firebaseio.com'
})

export default journal