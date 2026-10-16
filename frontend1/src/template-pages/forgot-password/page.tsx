import React from 'react';
import Link from "next/link";

const ForgotPasswordPage = () => {
    return (
        <div className="card mw-400 w-100 m-auto p-8">
            <h2 className="fs-4">Recover Password</h2>
            <div className="text-body-secondary mb-6">
                Enter your registered email address below, and we'll send you an email allowing you to reset
                the password.
            </div>

            <form className="mb-5">
                <div className="form-icon mb-8">
                    <i className="ph ph-at"></i>
                    <input type="email" className="form-control rounded-pill" placeholder="Email Address"/>
                </div>

                <button type="button" className="btn btn-primary text-uppercase w-100">Reset Password</button>
            </form>

            <div className="text-center fs-7">
                <Link href="login" className="link-secondary d-block">Back to login page</Link>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
