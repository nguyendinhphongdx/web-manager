import { Form, Button, Row, Input, Modal, Col, Select, Steps, Space, Tabs } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { REGEX_AUTHORIZATION } from '../../../anothers/constants';
const OptionHeader = ({headers}) => {
    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Form.Item
                    label="Header"
                    name="header"
                    style={{ width:'100%'}}
                >
                    <Form.List name="header">
                        {(fields, { add, remove }) => {
                            headers.forEach((item, index) => {
                                fields[index] = { name: index, key: index, fieldKey: index }
                            })
                            const handleRemove=(name)=>{
                                headers.splice(name.name,1)
                                console.log(name,headers);
                                remove(name.name);
                            };
                            return (
                                <>
                                    {fields.map((field, index) => (
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
                                                        rules={[{ required: true, message: 'Missing key', pattern: new RegExp(REGEX_AUTHORIZATION),  }]}
                                                        initialValue={headers[index] ? headers[index].key : ""}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                )}
                                            </Form.Item>
                                            <Form.Item
                                                {...field}
                                                label="Value"
                                                name={[field.name, 'value']}
                                                fieldKey={[field.fieldKey, 'value']}
                                                rules={[{ required: true, message: 'Missing value' }]}
                                                initialValue={headers[index] ? headers[index].value : ""}
                                            >
                                                <Input />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => {
                                             
                                                handleRemove(field);
                                            }} />
                                        </Space>
                                    ))}

                                    <Form.Item>
                                        <Button type="dashed" onClick={() => {
                                            add()
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
export default OptionHeader;