import { configureStore, createSlice } from "@reduxjs/toolkit"
import { act } from 'react';




let state1 = createSlice({
    name: "state1",
    initialState: {
        searchText : '', page:1, movies:[] , 
        totalresult:0 , viewpage:0 ,
        loading:'hide' , searchErr:"Found" , inputwait:"입력하세요"
    },
    reducers: {
        changeText(state,action) {
            state.searchText = action.payload
        },
        changeErr(state,action) {
            state.searchErr=action.payload
        },
        setMovie(state) {
            state.page = 1
        },
        changeinputwait(state,action) {
            state.inputwait = action.payload
        },
        changePage(state,action){
            state.page = state.page +1
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
        changeLoading(state,action){
          state.loading=action.payload
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

export let { changeErr, changeinputwait, changeText , changePage, changeMovies, changeTotal,changeViewPage,changeLoading, addMovie , setMovie}= state1.actions
