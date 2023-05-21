import { createStore } from "vuex";

import journal from '../modules/daybook/store/journal/index'
import auth from '../modules/auth/store/auth/index'


const store = createStore({
    modules: {
        journal,
        auth
    }
})


export default store