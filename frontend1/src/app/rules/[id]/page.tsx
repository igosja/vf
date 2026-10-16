import React from "react";
import {IdPageProps} from "@/app/idinterface";
import Link from "next/link";

const RulesIdPage: React.FunctionComponent<IdPageProps> = async ({params}) => {
    const {id} = await params;

    return (
        <div className="d-lg-flex align-items-start gap-4">
            <div className="flex-grow-1">
                <div className="card p-6 mb-4">
                    <div className="row">
                        <div className="col-12">
                            <h3>Rule #{id + 1}</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet arcu eget
                                nulla egestas consectetur. Integer at mauris at mi sollicitudin tempor. Sed
                                eleifend, enim bibendum tincidunt accumsan, erat ex tristique sem, nec lacinia lorem
                                risus sit amet ligula. Vivamus imperdiet molestie orci ac aliquet. In hac habitasse
                                platea dictumst. Aenean non risus sit amet nulla consectetur aliquam. Integer
                                ultricies congue ipsum, vel dictum neque aliquam vel.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RulesIdPage;
