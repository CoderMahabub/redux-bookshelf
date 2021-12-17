import { createSlice } from '@reduxjs/toolkit'
import books from '../../fakeData/books.json'

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        discover: books,
        readingList: [],
        finishedList: []
    },
    reducers: {
        addToReadingList: (state, action) => {
            state.readingList.push(action.payload)
        },
        removeFromReadingList: (state, { payload }) => {
            state.readingList = state.readingList.filter(book => book !== payload.id)
        },
    },
})

export const { addToReadingList, removeFromReadingList } = bookSlice.actions;
export default bookSlice.reducer;