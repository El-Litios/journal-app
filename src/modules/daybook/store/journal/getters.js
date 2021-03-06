/* export const Getters =  (state) => {
    return state.something
} */

export const getEntriesByTerm =  ( state ) => ( term = '') => {
    if (term.length === 0) {
        return state.entries
    }
    
    return state.entries.filter(e => e.text.toLowerCase().includes(term.toLocaleLowerCase()))
} 


export const getEntriesById =  ( state ) => ( id = '' ) => {
    const entryFound = state.entries.find(entry => entry.id === id)

    if (!entryFound) return 

    return { ...entryFound }
} 