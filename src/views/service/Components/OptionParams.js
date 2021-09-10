import { Form, Button, Row, Input, Modal, Col, Select, Steps, Space, Tabs } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
const OptionParams = ({ params, url }) => {
    const [query, setQuery] = useState(params);
    const [value, setValue] = useState('');
    const [string, setString] = useState(url)
    const handleOnChange = (event) => {
        const index = Number(event.target.id);
        const key = event.target.value;
        const newQuery = query.map((item, i) => {
            if (i === index) {
                return {
                    key: key,
                    value: item.value,
                }
            } else {
                return item;
            }
        })
        setQuery(newQuery);
    }
    const handleOnChangeValue = (event) => {
        const index = Number(event.target.id);
        const value = event.target.value;
        const newQuery = query.map((item, i) => {
            if (i === index) {
                return {
                    key: item.key || '',
                    value: value,
                }
            } else {
                return item;
            }
        })
        setQuery(newQuery);
    }

    var queryString = query.map((item) => {
        return `${item.key || ''}=${item.value || ''}`
    })

    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Form.Item
                    label="URL"
                >
                    <Input placeholder={url + `?${queryString.join('&')}`} disabled={true} />
                </Form.Item>
                <Form.Item
                    label="Params"
                    name="header"
                >
                    <Form.List name="params">
                        {(fields, { add, remove }) => {
                            query.forEach((item, index) => {
                                fields[index] = { name: index, key: index, fieldKey: index }
                            })
                            const handleAdd = () => {
                                add();
                                const newQuery = [...query];
                                newQuery.push({ key: '', value: '' });
                                setQuery(newQuery)
                            }
                            const handleRemove = (field) => {
                                query.splice(field.name, 1)
                                remove(field.name);
                                setQuery([...query]);
                            }
                            return (
                                <>
                                    {fields.map((field, index) => {
                                        return (
                                            <Space key={field.key} align="baseline" className="base_center">
                                                <Form.Item
                                                    noStyle
                                                    shouldUpdate={(prevValues, curValues) =>
                                                        prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                                                    }
                                                >
                                                    {() => (
                                                        <Form.Item
                                                            {...field}
                                                            label="key"
                                                            name={[field.name, 'key']}
                                                            fieldKey={[field.fieldKey, 'key']}
                                                            rules={[{ required: true, message: 'Missing key' }]}
                                                            initialValue={params[index] ? params[index].key : ""}
                                                        >
                                                            <Input id={index + ''} value={value} onChange={handleOnChange} />
                                                        </Form.Item>
                                                    )}
                                                </Form.Item>
                                                <Form.Item
                                                    {...field}
                                                    label="Value"
                                                    name={[field.name, 'value']}
                                                    fieldKey={[field.fieldKey, 'value']}
                                                    rules={[{ required: true, message: 'Missing value' }]}
                                                    initialValue={params[index] ? params[index].value : ""}
                                                >
                                                    <Input id={index + ''} value={value} onChange={handleOnChangeValue} />
                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => {
                                                    handleRemove(field);
                                                }} />
                                            </Space>
                                        )
                                    })}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => {
                                            handleAdd()
                                        }} block icon={<PlusOutlined />}>
                                            Add sights
                                        </Button>
                                    </Form.Item>
                                </>
                            )
                        }}
                    </Form.List>
                </Form.Item>
            </Col>
        </Row>
    )
}
export default OptionParams;