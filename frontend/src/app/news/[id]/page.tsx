import React from "react";
import {IdPageProps} from "@/app/idinterface";
import Link from "next/link";

const HomePage: React.FunctionComponent<IdPageProps> = async ({params}) => {
    const {id} = await params;

    return (
        <div className="d-lg-flex align-items-start gap-4">
            <div className="flex-grow-1">
                <div className="card p-6 mb-4">
                    <div className="row">
                        <div className="col-12">
                            <h3>News #{id}</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet arcu eget
                                nulla egestas consectetur. Integer at mauris at mi sollicitudin tempor. Sed
                                eleifend, enim bibendum tincidunt accumsan, erat ex tristique sem, nec lacinia lorem
                                risus sit amet ligula. Vivamus imperdiet molestie orci ac aliquet. In hac habitasse
                                platea dictumst. Aenean non risus sit amet nulla consectetur aliquam. Integer
                                ultricies congue ipsum, vel dictum neque aliquam vel.</p>
                            <p>01 sep 2025, 09:54</p>
                            <p>10 comments</p>
                            <p><Link href={`users/${id}`}>Author</Link></p>
                        </div>
                    </div>
                    {Array.from({length: 10}).map((_, index: number) => (
                        <div key={index} className="row">
                            <div className="col-12">
                                <h4>Comment #{index}</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet arcu
                                    eget nulla egestas consectetur. Integer at mauris at mi sollicitudin tempor. Sed
                                    eleifend, enim bibendum tincidunt accumsan, erat ex tristique sem, nec lacinia
                                    lorem risus sit amet ligula. Vivamus imperdiet molestie orci ac aliquet. In hac
                                    habitasse platea dictumst. Aenean non risus sit amet nulla consectetur aliquam.
                                    Integer ultricies congue ipsum, vel dictum neque aliquam vel.</p>
                                <p>01 sep 2025, 09:54</p>
                                <p><Link href={`users/${index}`}>Author</Link></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
