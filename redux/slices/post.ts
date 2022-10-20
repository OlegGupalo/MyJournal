import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { PostResponse, UserResponse } from '../../utils/dto/types'
import { AppState } from '../store'

export interface PostState {
    data: PostResponse | null
}

const initialState = {
    data: null
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<any>) {
            state.data = action.payload          
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.data = action.payload.post.data
        }
    }
})

export const selectUserData = (state: AppState) => state.post.data

export const { setUserData } = postSlice.actions

export const postReducer = postSlice.reducer