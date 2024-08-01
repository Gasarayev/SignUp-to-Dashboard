import { useEffect } from "react";
import { login } from "../../api/auth";
import GuestLayout from "../../components/Guest";

import { Form, useActionData, useNavigate } from "react-router-dom";
import { TOKEN } from "../../api/contstants";


export async function loginAction({request}:any) {
    console.log('data:', request)
    const formdata = await request.formData()
    try {
        const resp = await login({
            email:formdata.get("email"),
            password:formdata.get("password"),
        })

        console.log("token:", resp)
        localStorage.setItem(TOKEN, resp.token)
        return resp
        
    } catch (error: any) {
        return {
            error: error
        }
    }
    
    
}


export default function Login() {
    const actionData = useActionData()
    const navigate = useNavigate()

    useEffect(() => {
        console.log("actionData:", actionData)
        if (actionData?.token) {
            navigate("/")
        }
    }, [actionData])

    useEffect(() => {
        if (localStorage.getItem(TOKEN)) {
            navigate("/")
        }
    })
    

    return (
        <GuestLayout>
            <div className="d-flex justify-content-center">
                <div className="row mt-5">
                    <div className="col-12">
                        <h1>Sign In</h1>
                        {actionData?.error && (
                            <div className="alert alert-danger">
                                {actionData.error}
                            </div>
                        )}
                        <Form method="post">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" id="password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </Form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}