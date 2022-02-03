export const setEntries =  (state, payload) => {
    
    state.entries = [...state.entries, ...payload]
    state.isLoading = false
} 

export const updateEntry =  (/* state */) => {
    
} 

export const addEntry =  (/* state */) => {
    
} 