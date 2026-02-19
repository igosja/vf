"use client";

import React, {FormEvent} from 'react';
import Link from "next/link";
import axios from "axios";

const RegisterPage = () => {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await axios.post('http://localhost:10010/register', formData);

        // Handle response if necessary
        const data = await response.data;
        console.log(data);
        // ...
    }

    return (
        <div className="card mw-400 w-100 m-auto p-8">
            <h2 className="fs-4">Create an account</h2>
            <div className="text-body-secondary mb-6">Please fill all the input and submite the form</div>

            <form className="mb-5" onSubmit={onSubmit}>
                <div className="form-icon mb-3">
                    <i className="ph ph-user-circle"></i>
                    <input name="name" type="text" className="form-control rounded-pill" placeholder="Username"/>
                </div>
                <div className="form-icon mb-3">
                    <i className="ph ph-envelope-simple"></i>
                    <input name="email" type="email" className="form-control rounded-pill" placeholder="Email Address"/>
                </div>
                <div className="form-icon mb-3">
                    <i className="ph ph-keyhole"></i>
                    <input name="password" type="password" className="form-control rounded-pill" placeholder="Password"/>
                </div>
                <div className="form-icon mb-8">
                    <i className="ph ph-keyhole"></i>
                    <input name="password_confirmation" type="password" className="form-control rounded-pill" placeholder="Confirm Password"/>
                </div>

                <button type="submit" className="btn btn-primary text-uppercase w-100">Create Account</button>
            </form>

            <div className="text-center fs-7">
                <Link href="login" className="link-secondary d-block">Already have an account?</Link>
            </div>
        </div>
    );
};

export default RegisterPage;