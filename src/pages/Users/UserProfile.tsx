import { useParams, useLoaderData } from "react-router-dom";


export default function UserProfile() {
    const { userID } = useParams<any>()
    const userProfile = useLoaderData()

    return (
        <div>
            <h1>Profile of user</h1>
            <p>User index is: {userID}</p>
            <p>{userProfile?.name}</p>
            <hr />
        </div>
    )
}