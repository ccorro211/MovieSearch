import { configureStore, createSlice } from "@reduxjs/toolkit"




let state1 = createSlice({
    name: "state1",
    initialState: {
        searchText : '', page:1, movies:[] , totalresult:0 , viewpage:0
    },
    reducers: {
        changeText(state,action) {
            state.searchText = action.payload
        },
        setMovie(state) {
            state.page = 1
        },
        changePage(state){
            state.page = state.page + 1
        },
        changeViewPage(state) {
            state.viewpage = state.viewpage-10;
        },
        changeMovies(state, action){
            console.log(action.payload)
            state.movies = [...action.payload]
        },
        changeTotal(state,action){
            state.totalresult = action.payload
            state.viewpage=action.payload
        },
        addMovie(state,action){
            let copy=action.payload
            state.movies = [...state.movies, ...copy]
        }

    }
})


export default configureStore({
  reducer: {
    state1 : state1.reducer
   }
}) 

export let { changeText , changePage, changeMovies, changeTotal,changeViewPage, addMovie , setMovie} = state1.actions
