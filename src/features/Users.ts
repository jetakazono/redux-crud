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
        addUser: (state, action) => {},
        updateUser: (state, action) => {},
        removeUser: (state, action) => {},
    },
})

export const { addUser, updateUser, removeUser } = userSlice.actions
export default userSlice.reducer