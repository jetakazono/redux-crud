import { createSlice } from "@reduxjs/toolkit"
import { UsersData } from "../FakeData"

export interface User {
    id: number
    name: string
    username: string
}

const initialState = { value: UsersData }

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        updateUser: (state, action) => {
            state.value.map((user) => {
                if (user.id === action.payload.id) {
                    user.username = action.payload.username
                }
            })
        },
        removeUser: (state, action) => {
            state.value = state.value.filter((user) => {
                return user.id !== action.payload.id
            })
        },
    },
})

export const { addUser, updateUser, removeUser } = userSlice.actions
export default userSlice.reducer
