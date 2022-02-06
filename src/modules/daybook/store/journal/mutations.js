export const setEntries =  (state, payload) => {
    
    state.entries = [...state.entries, ...payload]
    state.isLoading = false
} 

export const updateEntry =  (state, payload) => {
    //hace que el indice de la entrada actualizada no se pierda en el arreglo de entries
    const idIndex = state.entries.map(e => e.id).indexOf( payload.id )
    
    state.entries[idIndex] = payload
} 

export const addEntry =  ( state, payload ) => {
    state.entries = [ payload, ...state.entries ]
} 