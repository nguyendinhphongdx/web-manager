import { Form, Button, Row, Input, Modal, Col, Select, Steps, Space, Tabs, Card } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { REGEX_AUTHORIZATION } from '../../../anothers/constants';
import { useState } from 'react';
import TextArea from 'antd/lib/input/TextArea';
const OptionBody = ({bodies,typebody}) => {
    
    const [type, setType] = useState(typebody || 'json')
    
    const RenderFormBody = ()=>{
        return  <Row gutter={[16, 16]}>
        <Col span={24}>
            <Form.Item
                label="Body"
            >
                <Form.List name="body">
                    {(fields, { add, remove }) => {
                        bodies.forEach((item, index) => {
                            fields[index] = { name: index, key: index, fieldKey: index }
                        })
                        const handleRemove=(field)=>{
                            bodies.splice(field.name,1)
                            console.log(field.name,bodies);
                            remove(field.name);
                        }
                       
                        return (
                            <>
                                {fields.map((field, index) =>{
                                    var _bodies;
                                    if(bodies[index]){
                                        _bodies= typeof bodies[index].value==='object'?JSON.stringify(bodies[index].value):bodies[index].value
                                    }else{
                                        _bodies =  bodies[index]
                                    }
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
                                                        initialValue={bodies[index] ? bodies[index].key : ""}
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
                                                initialValue={bodies[index] ? _bodies : ""}
                                            >
                                                <Input />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => {
                                                handleRemove(field)
                                            }} />
                                        </Space>
                                    )
                                } )}

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
    }
    const RenderJsonBody = ()=>{
        return (
            <Form.Item
            label="Body"
            name='body'
            >
                    <TextArea rows={10}  />
            </Form.Item>
        )
    }
    const RenderBody = ()=>{
        switch(type){
            case'json': return <RenderJsonBody/>
            case'form': return <RenderFormBody/>
            default: return <RenderJsonBody/>
        }
    }
    const handleOnChange = (item) => {

        setType(item);
    }
    return (
        <Card bodyStyle={{padding:'5px'}}>
            <Row>
                <Col span={8}>
                    <Form.Item
                        label='Type'
                        name='typebody'
                        initialValue={typebody}
                    >
                        <Select
                            style={{ width: 120 }}
                            onChange={handleOnChange}
                            name='typebody'
                            disabled={true}
                        >
                            <Select.Option key='json' >JSON</Select.Option>
                            <Select.Option key='form' >FORM</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={16}>
                    {RenderBody()}
                </Col>
            </Row>
        </Card>
    )
}
export default OptionBody;