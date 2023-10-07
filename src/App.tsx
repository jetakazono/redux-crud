import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { addUser, removeUser } from "./features/Users"
import { User } from "./features/Users"
import { useState } from "react"

function App() {
    const dispatch = useDispatch()
    const usersList = useSelector((state) => state.userReducer.value)
    const [user, setUser] = useState({
        name: "",
        userName: "",
        newUserName: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleAddUser = () => {
        dispatch(
            addUser({
                id: usersList[usersList.length - 1].id + 1,
                name: user.name,
                username: user.userName,
            })
        )

        setUser({
            name: "",
            userName: "",
            newUserName: "",
        })
    }

    const handleDeleteUser = (id: number) => {
        dispatch(removeUser({ id }))
    }

    return (
        <main className="mx-auto w-full max-w-[87rem] px-4 sm:px-6 md:px-8 flex flex-col items-center">
            <div className="p-4 flex gap-4">
                <input
                    onChange={handleInputChange}
                    value={user.name}
                    name="name"
                    className="px-4 py-2 border border-indigo-700 rounded-md"
                    type="text"
                    placeholder="Name..."
                />
                <input
                    value={user.userName}
                    name="userName"
                    onChange={handleInputChange}
                    className="px-4 py-2 border border-indigo-700 rounded-md"
                    type="text"
                    placeholder="Username..."
                />
                <button
                    className="px-2 py-2 bg-indigo-500 text-white rounded-md uppercase text-sm hover:bg-indigo-400 hover:scale-110 transition-all ease-in-out"
                    onClick={handleAddUser}
                >
                    Add User
                </button>
            </div>
            <div className=" p-4 flex gap-6 w-full justify-center">
                <ul className="p-4 flex flex-col gap-6">
                    {usersList.map((user: User) => {
                        return (
                            <li
                                key={user.id}
                                className="bg-indigo-200 border border-indigo-700 p-4 rounded-md shadow-lg shadow-indigo-500/50"
                            >
                                <p>
                                    <span className="text-indigo-900 font-bold mr-1">
                                        Name:
                                    </span>
                                    {user.name}
                                </p>
                                <p>
                                    <span className="text-indigo-900 font-bold mr-1">
                                        Username:
                                    </span>
                                    {user.username}
                                </p>
                                <div className="flex gap-2">
                                    <input
                                        name="newUserName"
                                        onChange={handleInputChange}
                                        className="px-4 py-2 border border-indigo-700 rounded-md"
                                        type="text"
                                        placeholder="New Username..."
                                    />
                                    <button className="px-2 py-2 bg-indigo-500 text-white rounded-md uppercase text-sm hover:bg-indigo-400 hover:scale-110 transition-all ease-in-out">
                                        Update User
                                    </button>
                                    <button
                                        className="px-2 py-2 bg-indigo-500 text-white rounded-md uppercase text-sm hover:bg-indigo-400 hover:scale-110 transition-all ease-in-out"
                                        onClick={() =>
                                            handleDeleteUser(user.id)
                                        }
                                    >
                                        Delete User
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}

export default App
