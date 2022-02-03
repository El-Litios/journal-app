import journal from "@/api/journal"


export const laodEntries = async ({commit} ) => {
    const { data } = await journal.get('/entries.json')
    const entries = []
    for(let id of Object.keys(data)){
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries)
}


export const updateEntry = async (/* {commit} */) => {

} 


export const createEntry = async (/* {commit} */) => {

} 