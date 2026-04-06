import React from 'react';

const SalesHistory = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-start mb-4">
                    <h5 className="card-title mb-0 flex-grow-1">
                        Sales History
                    </h5>

                    <div className="fs-7 text-success d-flex align-items-center me-3">
                        <i className="ph ph-arrow-circle-up fs-4 me-1"></i>
                        33.47%
                    </div>

                    <div className="mt-n2 me-n1">
                        <a href="" className="icon ph ph-info"></a>
                        <a href="" className="icon ph ph-app-window"></a>
                    </div>
                </div>
                <div className="chart">
                    <canvas id="chart-sales-history"></canvas>
                </div>
            </div>
        </div>
    );
};

export default SalesHistory;