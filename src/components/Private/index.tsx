import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { TOKEN } from "../../api/contstants";




export default function Private() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem(TOKEN)
        console.log("token:", token)
        if (!token) {
            navigate("/sign-in", {replace: true})
        }
    }, [])


    return (
        <div>
            <Outlet />
        </div>
    )
}