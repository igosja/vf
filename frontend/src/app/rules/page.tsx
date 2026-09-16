import React from "react";
import Link from "next/link";

const RulesPage: React.FunctionComponent = () => {
    return (
        <div className="d-lg-flex align-items-start gap-4">
            <div className="flex-grow-1">
                <div className="card p-6 mb-4">
                    {Array.from({length: 10}).map((_, index: number) => (
                        <div key={index} className="row">
                            <div className="col-12">
                                <Link href={`rules/${index}`}>Rule {index + 1}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RulesPage;
