import React from 'react';

const TopProducts = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-start mb-2">
                    <h5 className="card-title mb-0 flex-grow-1">Top Products</h5>

                    <div className="fs-7 text-danger align-items-center me-3 d-none d-sm-flex">
                        <i className="ph ph-arrow-circle-up fs-4 me-1"></i>
                        8.07%
                    </div>

                    <div className="mt-n2 me-n1">
                        <a href="" className="icon ph ph-info"></a>
                        <a href="" className="icon ph ph-app-window"></a>
                    </div>
                </div>

                <div id="top-products" className="mb-n3"></div>
            </div>
        </div>

    );
};

export default TopProducts;