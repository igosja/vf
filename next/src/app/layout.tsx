import '../styles/global.css';

import React from "react";
import {Breadcrumb, Layout} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <head>
            <title>VF demo</title>
        </head>
        <body>
        <Layout>
            <Header>
                header
            </Header>
            <Layout hasSider={true}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                >
                </Sider>
                <Layout>
                    <Breadcrumb
                        items={[{title: 'Home'}, {title: 'List'}, {title: 'App'}]}
                    />
                    <Content>
                        {children}
                    </Content>
                </Layout>
            </Layout>
            <Footer style={{
                position: "sticky",
                bottom: 0,
            }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
        </body>
        </html>
    );
}
