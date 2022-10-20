import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { UserResponse } from '../../utils/dto/types'
import { AppState } from '../store'

export interface UserState {
    data: UserResponse | null
}

const initialState: UserState = {
    data: null
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<any>) {
            state.data = action.payload          
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.data = action.payload.user.data
        }
    }
})

export const selectUserData = (state: AppState) => state.user.data

export const { setUserData } = userSlice.actions

export const userReducer = userSlice.reducer