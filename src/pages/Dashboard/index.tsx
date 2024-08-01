
import { useEffect, useContext } from "react";

import Layout from "../../components/Layout";


import { AIMContext } from "../../contexts/iam";
import { ThemeContext } from "../../contexts/theme";



const Loading = () => {


    // track mount & unmount phase
    useEffect(() => {
        console.log("loading mounted")

        return () => {
            console.log('loading unmounted')
        }
    }, [])


    return (<div>loading....</div>)
}

function Dashboard() {

    const { iam } = useContext<any>(AIMContext)
    const { color, setColor } = useContext<any>(ThemeContext)


    return (
        <Layout>
            <h1>Welcome to the Dashboard</h1>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-header">
                    User Information
                </div>
                <div className="card-body">
                    You are using "{color}" theme.
                    {!iam ? <Loading /> : (
                        <p>Welcome to the dashboard: {iam?.name}</p>
                    )}
                </div>
                <div className="card-footer">
                    <button onClick={() => setColor(color === "light" ? "dark" : "light")} className="btn btn-primary">Change Theme</button>
                </div>
            </div>
        </Layout>
    )
}
export default Dashboard