import { Button, Col, Form, Input, Row, Select, TreeSelect } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { Option } from 'antd/lib/mentions';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ValidateFormUpdateConfig } from '../../../helpers/validateForm';
import { Service_Get_List_Key, Update_Service } from '../../../redux/services/ServiceServices';
import { openSuccessNotif } from '../../notifications/notif/notifStore';
const { SHOW_PARENT } = TreeSelect;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const ConfigForm = (props) => {
    const { value, form } = props;
    const [treeValue, setTreeValue] = useState(["0-0-0"]);
    const [treeData, setTreeData] = useState([]);
    const [clickable, setClickable] = useState(false);
    const serviceRedux = useSelector((state) => state.Services.services);
    const dispatch = useDispatch();
    useEffect(() => {
        var controller = new AbortController();
        const option = value.config.option;
        console.log('option',option);
        form.setFieldsValue({...value,access_data:value.config.access_data,option,keyoption:option.key,endpointoption:option.endpoint,methodoption:option.method});
        // GetKeysList();
        return function cleanup(){
            controller.abort()
        }
    }, [form, value])

    const handleSubmit = (data) => {
        const option = {
            key: data.keyoption,
            endpoint:data.endpointoption,
            method:data.methodoption
        }
        const converted = ValidateFormUpdateConfig(value, {access_data:data.access_data,option:option});
        console.log('dataa', data);
        console.log('dataa convert', converted);
        // Update_Service(dispatch, converted)
        //     .then((result) => {
        //         console.log(result)
        //         if (result) {
        //             openSuccessNotif('Thông báo', 'Sửa thành công!', 2000, 'success');
        //         }
        //     })
    }
    const GetKeysList = () => {
        setClickable(!clickable);
        Service_Get_List_Key(dispatch, { endpoint: value.Endpoint, method: value.Method })
            .then(keys => {
                setTreeData(keys);
            })
            .finally(() => {
                console.log('finally');
                setClickable(false);
            })
    }


    const tProps = {
        treeData,
        value: treeValue,
        defaultValue:value.config.access_data || [],
        onChange: (value) => setTreeValue(value),
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: "Please select",
        style: {
            width: "100%"
        },
        onClick: () => console.log('click select')
    };
    const SelectOtherApi = serviceRedux.map((item,index)=>{
        return  <Select.Option value={item.Endpoint}>{item.Endpoint}</Select.Option>
    })
    return (
        <> <Form {...layout}
            form={form}
            name="nest-messages"
            onFinish={handleSubmit}  
        >
            <Row>
                <Col span={12}>
                    <FormItem
                        name="Endpoint"
                        label="Endpoint"
                        rules={[{ required: true, message: 'please wait！' }]}
                    >
                        <Input disabled={true} />
                    </FormItem>
                </Col>
                <Col span={12}>
                    <FormItem
                        name="Method"
                        label="Method"
                        rules={[{ required: true, message: 'please wait！' }]}
                    >
                        <Select style={{ width: '100%' }} disabled={true}>
                            <Option value="GET">GET</Option>
                            <Option value="POST">POST</Option>
                            <Option value="DELETE">DELETE</Option>
                            <Option value="PUT">PUT</Option>
                        </Select>
                    </FormItem>
                </Col>
            </Row>

            <Row>
                <Col span={20}>
                    <FormItem
                        name="access_data"
                        label="Access Data"
                    >
                        <TreeSelect {...tProps} />
                    </FormItem>
                </Col>
                <Col>
                    <Button disabled={clickable} onClick={() => GetKeysList()}>Get list</Button>
                </Col>

            </Row>
            <Row><div>Use result of Another into Body</div></Row>
            <Row>
                   <Col span={8}>
                    <Form.Item
                            name={'keyoption'}
                            label="Key"
                        >
                            <Input />
                        </Form.Item>
                   </Col>
                   <Col span={8}>
                   <FormItem
                        name={'endpointoption'}
                        label="Endpoint"
                    >
                        <Select>
                            {SelectOtherApi}
                        </Select>
                    </FormItem>
                   </Col>
                   <Col span={8}>
                   <FormItem
                        name={'methodoption'}
                        label="Method"
                    >
                        <Select style={{ width: '100%' }}>
                            <Option value="GET">GET</Option>
                            <Option value="POST">POST</Option>
                            <Option value="DELETE">DELETE</Option>
                            <Option value="PUT">PUT</Option>
                        </Select>
                    </FormItem>
                   </Col>
            </Row>
        </Form>
        </>
    );
};
export default ConfigForm;
