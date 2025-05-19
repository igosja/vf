import {Row, Col, Table, Image} from "antd";

export default function Home() {
    return (
        <Row>
            <Col span={24}>
                <Row>
                    <Col span={12}>
                        <Image
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            preview={false}
                        />
                    </Col>
                    <Col span={12}>
                        <Table
                            showHeader={false}
                            pagination={false}
                            columns={[
                                {
                                    dataIndex: 'field',
                                    key: 'field',
                                },
                                {
                                    dataIndex: 'value',
                                    key: 'value',
                                },
                            ]}
                            dataSource={[
                                {
                                    key: '1',
                                    field: 'Name',
                                    value: 'Real Madrid',
                                },
                                {
                                    key: '2',
                                    field: 'Stadium',
                                    value: 50123,
                                },
                            ]}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Table
                            columns={[
                                {
                                    title: 'Name',
                                    dataIndex: 'name',
                                    key: 'name',
                                },
                                {
                                    title: 'Age',
                                    dataIndex: 'age',
                                    key: 'age',
                                },
                                {
                                    title: 'Address',
                                    dataIndex: 'address',
                                    key: 'address',
                                },
                            ]}
                            dataSource={[
                                {
                                    key: '1',
                                    name: 'Mike',
                                    age: 32,
                                    address: '10 Downing Street',
                                },
                                {
                                    key: '2',
                                    name: 'John',
                                    age: 42,
                                    address: '10 Downing Street',
                                },
                            ]}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
