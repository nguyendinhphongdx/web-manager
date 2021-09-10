import { Form, Button, Row, Input, Card, Col, Select, Steps, Space, Tabs } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { REGEX_NOT_SPACE } from '../../../anothers/constants';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const Authorization = ({ auth }) => {
  
    const [type, setType] = useState(auth.type || null);
    const RenderBear = () => {
        return (
            <Form.Item
                name={['Authorization', 'token']}
                rules={[{ pattern: new RegExp(REGEX_NOT_SPACE) }]}
                label='Token'
            >
                <Input />
            </Form.Item>
        )
    }
    const RenderBasic = () => {
        return (
            <>
                <Form.Item
                    name={['Authorization', 'username']}
                    label='Username'
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Password'
                    name={['Authorization', 'password']}
                >
                    <Input />
                </Form.Item>
            </>
        )
    }
    const renderContent = () => {
        switch (type) {
            case 'Bear': return <RenderBear />
            case 'Basic': return <RenderBasic />
            default: return <h1>chose type</h1>
        }
    }
    const handleOnChange = (item) => {
        setType(item);
    }
    return (
        <Card>
            <Row>
                <Col span={8}>
                    <Form.Item
                        label='Type'
                        name={['Authorization', 'type']}
                    >
                        <Select
                            style={{ width: 120 }}
                            onChange={handleOnChange}
                        >
                            <Select.Option key='none' >None</Select.Option>
                            <Select.Option key='Basic' >Basic</Select.Option>
                            <Select.Option key='Bear' >Bear</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={14}>
                    {renderContent()}
                </Col>
            </Row>
        </Card>
    )

}
export default Authorization;