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
            console.log(state.value)

            state.value.push(action.payload)
            console.log(state.value)
        },
        updateUser: () => {},
        removeUser: (state, action) => {
            state.value = state.value.filter((user) => {
                return user.id !== action.payload.id
            })
        },
    },
})

export const { addUser, updateUser, removeUser } = userSlice.actions
export default userSlice.reducer
