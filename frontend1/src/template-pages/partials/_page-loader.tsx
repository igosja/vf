import React from 'react';
import Logo from "@/app/partials/_logo";

const PageLoader = () => {
    return (
        <div id="page-loader" className="placeholder-glow">
            <div className="w-24 h-24 d-grid place-items-center">
                <Logo/>
                <div className="spinner-border w-20 h-20 position-absolute" role="status">
                    <span className="visually-hidden">
                        Loading...
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PageLoader;