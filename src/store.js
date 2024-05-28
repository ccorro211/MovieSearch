import { configureStore, createSlice } from "@reduxjs/toolkit"




let state1 = createSlice({
    name: "state1",
    initialState: {
        searchText : '', page:1, movies:[]
    },
    reducers: {
        changeText(state,action) {
            state.searchText = action.payload
        },
        changePage(state,action){

        },
        changeMovies(state, action){
            console.log(action.payload)
            let copy=[...state.movies, action.payload]
            console.log(copy)
            state.movies = copy
        }

    }
})


export default configureStore({
  reducer: {
    state1 : state1.reducer
   }
}) 

export let { changeText , changePage, changeMovies} = state1.actions
