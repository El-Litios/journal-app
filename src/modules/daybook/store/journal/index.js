import state from './states'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const JournalModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default JournalModule