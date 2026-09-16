import React from "react";

const ChatPage: React.FunctionComponent = () => {
    return (
        <div className="d-lg-flex align-items-start gap-4">
            <div className="flex-grow-1">
                <div className="card p-6 mb-4">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Чат</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {Array.from({length: 10}).map((_, index: number) => (
                                <p key={index}>
                                    Сообщение
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatPage;
