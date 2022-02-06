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


export const updateEntry = async ( {commit} ,  entry) =>  {
    const { date, picture, text } = entry

    const dataToSave = {date, picture, text}

    const res = await journal.put(`/entries/${entry.id}.json`, dataToSave)
    console.log(res);
    console.log({...entry});

    commit('updateEntry', {...entry})
} 


export const createEntry = async ({commit}, entry) => {

    const { date, picture, text } = entry

    const dataToSave = { date, picture, text }

    const {data} = await journal.post(`/entries.json`, dataToSave)
    dataToSave.id = data.name

    commit('addEntry', dataToSave)

    return data.name
} 