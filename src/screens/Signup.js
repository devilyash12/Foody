import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation }))
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter valid credentials")
        }
    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <section className="">
            {/* Jumbotron */}
            <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: 'hsl(0, 0%, 96%)' }}>
                <div className="container">
                    <div className="row gx-lg-5 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="my-5 display-3 fw-bold ls-tight">
                                Register  <br />
                                <span className="text-primary">as a new Foody🍔!</span>
                            </h1>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="card">
                                <div className="card-body py-5 px-md-5">
                                    <form onSubmit={handleSubmit}>
                                        {/* 2 column grid layout with text inputs for the first and last names */}
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label htmlFor="Username" className="form-label">Name</label>
                                                    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                                    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
                                        </div>

                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <label htmlFor="exampleInputPassword1" className="form-label">address</label>
                                            <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} id="exampleInputPassword1" />
                                        </div>
                                        {/* Submit button */}
                                        <button type="submit" className="btn btn-primary btn-block mb-4">
                                            Sign up
                                        </button>
                                        <div></div>
                                        <Link to="/login" className='btn btn-primary btn-block btn-success mb-4 ' >Already a user</Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        // <>
        //     <div className='container'>
        //         <form onSubmit={handleSubmit}>
        //             <div className="mb-3">
        //                 <label htmlFor="Username" className="form-label">Name</label>
        //                 <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
        //             </div>
        //             <div className="mb-3">
        //                 <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        //                 <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
        //                 <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        //             </div>
        //             <div className="mb-3">
        //                 <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        //                 <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
        //             </div>
        //             <div className="mb-3">
        //                 <label htmlFor="exampleInputPassword1" className="form-label">address</label>
        //                 <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} id="exampleInputPassword1" />
        //             </div>
        //             <button type="submit" className="m-3 btn btn-success">Submit</button>
        //             <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
        //         </form>
        //     </div>
        // </>
    )
}
