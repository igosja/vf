import React from 'react';

const RecentOrders = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-start mb-5">
                    <h5 className="card-title mb-0 flex-grow-1">Recent Orders</h5>

                    <div className="fs-7 text-success align-items-center me-3 d-none d-sm-flex">
                        <i className="ph ph-arrow-circle-up fs-4 me-1"></i>
                        24.99%
                    </div>

                    <div className="mt-n2 me-n1">
                        <a href="" className="icon ph ph-info"></a>
                        <a href="" className="icon ph ph-app-window"></a>
                    </div>
                </div>

                <div
                    className="d-flex justify-content-between align-items-center text-body-secondary fs-7 h-10 border-bottom">
                    <div className="w-20 flex-shrink-0">Order No.</div>
                    <div className="w-20 flex-shrink-0 d-none d-sm-block">Date</div>
                    <div className="w-16 flex-shrink-0">Status</div>
                    <div className="w-16 flex-shrink-0 d-none d-xxl-block">Delivery</div>
                    <div className="w-20 flex-shrink-0">Amount</div>
                </div>

                <div id="recent-orders" className="mb-n4"></div>
            </div>
        </div>

    );
};

export default RecentOrders;