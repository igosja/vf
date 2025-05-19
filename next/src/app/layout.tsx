import '../styles/global.css';

import React from "react";
import {Breadcrumb, Layout} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import type {MenuProps} from 'antd';
import {Menu} from "antd";
import {AppstoreOutlined, BellOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'sub1',
        label: 'Navigation One',
        icon: <MailOutlined/>,
        children: [
            {
                key: 'g1',
                label: 'Item 1',
                type: 'group',
                children: [
                    {key: '1', label: 'Option 1'},
                    {key: '2', label: 'Option 2'},
                ],
            },
            {
                key: 'g2',
                label: 'Item 2',
                type: 'group',
                children: [
                    {key: '3', label: 'Option 3'},
                    {key: '4', label: 'Option 4'},
                ],
            },
        ],
    },
    {
        key: 'sub2',
        label: 'Navigation Two',
        icon: <AppstoreOutlined/>,
        children: [
            {key: '5', label: 'Option 5'},
            {key: '6', label: 'Option 6'},
            {
                key: 'sub3',
                label: 'Submenu',
                children: [
                    {key: '7', label: 'Option 7'},
                    {key: '8', label: 'Option 8'},
                ],
            },
        ],
    },
    {
        type: 'divider',
    },
    {
        key: 'sub4',
        label: 'Navigation Three',
        icon: <SettingOutlined/>,
        children: [
            {key: '9', label: 'Option 9'},
            {key: '10', label: 'Option 10'},
            {key: '11', label: 'Option 11'},
            {key: '12', label: 'Option 12'},
        ],
    },
    {
        key: 'grp',
        label: 'Group',
        type: 'group',
        children: [
            {key: '13', label: 'Option 13'},
            {key: '14', label: 'Option 14'},
        ],
    },
];

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <head>
            <title>VF demo</title>
        </head>
        <body>
        <Layout>
            <Header
                style={{
                    backgroundColor: "white",
                    display: 'flex',
                }}
            >
                Logo
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={[{
                        key: 'bell',
                        type: 'item',
                        label: <BellOutlined />,
                    }]}
                    style={{ flex: 1, minWidth: 0, justifyContent: 'flex-end' }}
                />
            </Header>
            <Layout hasSider={true}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    style={{
                        backgroundColor: "white"
                    }}
                >
                    <Menu
                        mode="inline"
                        items={items}
                    />
                </Sider>
                <Layout style={{padding: 20}}>
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
