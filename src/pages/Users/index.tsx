
import { useEffect, useState, useRef, useCallback, memo } from "react";
import Layout from "../../components/Layout";



import { users_get } from "../../api/users";
import { Link, Outlet } from "react-router-dom";
import SearchInput from "../../components/SearchInput";


function Users() {

    const [users, setUsers] = useState<any>([])
    const [filteredUsers, setFilteredUsers] = useState<any>([])
    const searchInput = useRef(null)

    useEffect(() => {
        users_get()
            .then(resp => {
                console.log(resp)
                setUsers(resp.data)
                setFilteredUsers(resp.data)
            })

        if (searchInput?.current) {
            searchInput?.current.focus()
        }
    }, [])

    useEffect(() => {
        console.log("filtered users changed")
        console.log("searchInput:", searchInput)
    }, [filteredUsers])

    const onSearch = useCallback((value: string) => {

        console.log(value)
        const filtered = users.filter(
            user => user.name.toLowerCase().includes(value.toLowerCase()) || user.email.toLowerCase().includes(value.toLowerCase())
        )
        setFilteredUsers(filtered)
    }, [users])

    console.log(onSearch)


    const onClear = () => {
        setFilteredUsers(users)
    }

    return (
        <Layout>

            <div className="row">
                <div className="col">
                    <SearchInput searchInputRef={searchInput} onClear={onClear} onSearch={onSearch} />
                    <h1>List of users</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user, idx) => (
                                <tr key={idx}>
                                    <th scope="row"># {idx + 1}</th>
                                    <td><Link to={`/users/${idx}`}>{user.name}</Link></td>
                                    <td>{user.email}</td>
                                    <td><Link className="btn btn-warning" to={`/users/${idx}/edit`}>Edit</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col"><Outlet /></div>
            </div>

        </Layout>
    )
}


export default  memo(Users)