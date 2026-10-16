"use client";

import React from 'react';
import Link from "next/link";
import {useLogin} from "@/features/login/hooks/useLogin";

const LoginPage:React.FunctionComponent = () => {
    const [onSubmit] = useLogin();

    return (
        <div className="card mw-400 w-100 m-auto p-8">
            <h2 className="fs-4">
                Welcome to Materia!
            </h2>
            <div className="text-body-secondary mb-6">
                Please sign in to continue to the system
            </div>

            <form className="mb-5" onSubmit={onSubmit}>
                <div className="form-icon mb-3">
                    <i className="ph ph-user-circle"></i>
                    <input name="name" type="text" className="form-control rounded-pill" placeholder="Username"/>
                </div>
                <div className="form-icon mb-8">
                    <i className="ph ph-keyhole"></i>
                    <input name="password" type="password" className="form-control rounded-pill" placeholder="Password"/>
                </div>

                <button type="submit" className="btn btn-primary w-100 text-uppercase">Sign In</button>
            </form>

            <div className="text-center fs-7">
                <Link href="/register" className="link-secondary mb-1 d-block">
                    Register for a new account
                </Link>
                <Link href="forgot-password" className="link-secondary d-block">
                    Forgot password?
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;