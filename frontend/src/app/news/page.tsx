import React from "react";
import Link from "next/link";

const HomePage: React.FunctionComponent = () => {
    return (
        <div className="d-lg-flex align-items-start gap-4">
            <div className="flex-grow-1">
                <div className="card p-6 mb-4">
                    {Array.from({length: 10}).map((_, index: number) => (
                        <div key={index} className="row">
                            <div className="col-12">
                                <h3>News #{index}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet arcu
                                    eget nulla egestas consectetur. Integer at mauris at mi sollicitudin tempor. Sed
                                    eleifend, enim bibendum tincidunt accumsan, erat ex tristique sem, nec lacinia
                                    lorem risus sit amet ligula. Vivamus imperdiet molestie orci ac aliquet. In hac
                                    habitasse platea dictumst. Aenean non risus sit amet nulla consectetur aliquam.
                                    Integer ultricies congue ipsum, vel dictum neque aliquam vel.</p>
                                <p>01 sep 2025, 09:54</p>
                                <p><Link href={`news/${index}`}>10 comments</Link></p>
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
