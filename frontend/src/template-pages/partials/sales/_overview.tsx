import React from 'react';

const SalesOverview = () => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 mb-4">
            <div className="col">
                <div className="card p-5 text-body-emphasis lh-1 fw-medium">
                    <div className="d-flex align-items-start">
                        <div className="flex-grow-1 fs-4 me-2 text-primary fw-medium">43283</div>
                        <div
                            className="badge bg-success rounded-pill float-end fs-8 text-success-emphasis d-inline-flex align-items-center"
                        >
                            <i className="ph ph-arrow-circle-up fs-6 me-1"></i>
                            2.23%
                        </div>
                    </div>
                    Orders Completed
                </div>
            </div>

            <div className="col">
                <div className="card p-5 text-body-emphasis lh-1 fw-medium">
                    <div className="d-flex align-items-start">
                        <div className="flex-grow-1 fs-4 me-2 text-success fw-medium">$324,091</div>
                        <div
                            className="badge bg-success rounded-pill float-end fs-8 text-success-emphasis d-inline-flex align-items-center"
                        >
                            <i className="ph ph-arrow-circle-up fs-6 me-1"></i>
                            3.47%
                        </div>
                    </div>
                    Total in Revenue
                </div>
            </div>

            <div className="col">
                <div className="card p-5 text-body-emphasis lh-1 fw-medium">
                    <div className="d-flex align-items-start">
                        <div className="flex-grow-1 fs-4 me-2 text-warning fw-medium">4532</div>
                        <div
                            className="badge bg-success rounded-pill float-end fs-8 text-success-emphasis d-inline-flex align-items-center"
                        >
                            <i className="ph ph-arrow-circle-up fs-6 me-1"></i>
                            5.32%
                        </div>
                    </div>
                    Completed Purchases
                </div>
            </div>

            <div className="col">
                <div className="card p-5 text-body-emphasis lh-1 fw-medium">
                    <div className="d-flex align-items-start">
                        <div className="flex-grow-1 fs-4 me-2 text-danger fw-medium">2091</div>
                        <div
                            className="badge bg-danger rounded-pill float-end fs-8 text-danger-emphasis d-inline-flex align-items-center"
                        >
                            <i className="ph ph-arrow-circle-down fs-6 me-1"></i>
                            0.98%
                        </div>
                    </div>
                    Return Requests
                </div>
            </div>
        </div>

    );
};

export default SalesOverview;
