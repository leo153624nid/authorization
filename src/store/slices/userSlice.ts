import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitState {
    email: string | null
    token: string | null
    id: string | null
}

const initialState: InitState = {
    email: null,
    token: null,
    id: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<InitState>) {
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
        },
        removeUser(state) {
            state.email = null
            state.token = null
            state.id = null
        },
    },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
