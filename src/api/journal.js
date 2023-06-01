
import axios from 'axios'

const journal = axios.create({
    baseURL: 'https://vue-journal-app-e6f46-default-rtdb.firebaseio.com'
})

journal.interceptors.request.use( (config => {
    
    config.params = {
        auth: localStorage.getItem('idToken')
    }
    
    return config
}) )

export default journal