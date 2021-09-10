import { Button, Form, Input, Modal, Select, Steps, Tabs } from 'antd';
import React, { useState } from 'react';
import { REGEX_URL } from '../../../anothers/constants';
import ServiceConverter from '../../../helpers/converter';
import type { TableListItem } from '../data.d';
import Authorization from './Authorization';
import OptionHeader from './OptionHeader';
import OptionBody from './OptionBody';
import OptionParams from './OptionParams';
const { TabPane } = Tabs;
export interface FormValueType extends Partial<TableListItem> {
    target?: string;
    template?: string;
    type?: string;
    time?: string;
    frequency?: string;
}

export interface UpdateFormProps {
    onCancel: (flag?: boolean, formVals?: FormValueType) => void;
    onSubmit: (values: FormValueType) => void;
    updateModalVisible: boolean;
    values: Partial<TableListItem>;
    title: string;
}
const FormItem = Form.Item;
const { Step } = Steps;
const { Option } = Select;

export interface UpdateFormState {
    formVals: FormValueType;
    currentStep: number;
}

const formLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 24 },
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
    const [formVals, setFormVals] = useState<FormValueType>({
        key: props.values ? props.values.key : -1,
        endpoint: props.values ? props.values.endpoint : '',
        method: props.values ? props.values.method : '',
        id: props.values ? props.values.id : -1,
        method_direct: props.values ? props.values.method_direct : '',
        url: props.values ? props.values.url : '',
        body: props.values ? props.values.body : [],
        header: props.values ? props.values.header : [],
        params: props.values ? props.values.params : [],
        auth: props.values ? props.values.auth : {},
        typebody:props.values ? props.values.typebody : 'json',
        target: '0',
        template: '0',
        type: '1',
        time: '',
        frequency: 'month',
    });
    const headers = ServiceConverter.ConvertObjectToArray(formVals.header);
    const bodies = formVals.typebody==='json'?formVals.body:ServiceConverter.ConvertObjectToArray(formVals.body);
    const params = ServiceConverter.ConvertObjectToArray(formVals.params);
    const auth = formVals.auth || {};

    const [currentStep, setCurrentStep] = useState<number>(0);
    const [form] = Form.useForm();
    const {
        onSubmit: handleUpdate,
        onCancel: handleUpdateModalVisible,
        updateModalVisible,
        values,
    } = props;
    const forward = () => setCurrentStep(currentStep + 1);
    const backward = () => setCurrentStep(currentStep - 1);
    const handleNext = async () => {
        const fieldsValue = await form.validateFields();

        setFormVals({ ...formVals, ...fieldsValue });

        if (currentStep < 2) {
            forward();
        } else {
            console.log({ ...formVals, ...fieldsValue });
            handleUpdate({ ...formVals, ...fieldsValue });
        }
    };

    const renderContent = () => {
        if (currentStep === 1) {
            return (
                <>
                    <FormItem
                        name="method_direct"
                        label="Method Direct"
                        rules={[{ required: true, message: 'please wait！' }]}
                    >
                        <Select style={{ width: '100%' }}>
                            <Option value="GET">GET</Option>
                            <Option value="POST">POST</Option>
                            <Option value="DELETE">DELETE</Option>
                            <Option value="PUT">PUT</Option>
                        </Select>

                    </FormItem>
                    <FormItem
                        name="url"
                        label="URL"
                        rules={[{
                            // pattern: new RegExp(REGEX_URL),
                            required: true,
                            message: 'format is wrong！'
                        }]}
                    >
                        <Input placeholder="URL" />
                    </FormItem>

                </>
            );
        }
        if (currentStep === 2) {
            return (
                <Tabs defaultActiveKey="1" >
                     <TabPane forceRender={true} tab="Authorization" key="1">
                        <Authorization auth={auth} />
                    </TabPane>
                    <TabPane forceRender={true} tab="Header" key="2">
                        <OptionHeader headers={headers} />
                    </TabPane>
                    <TabPane forceRender={true} tab="Body" key="3">
                        <OptionBody bodies={bodies} typebody={formVals.typebody} />
                    </TabPane>
                    <TabPane forceRender={true} tab="Params" key="4">
                        <OptionParams params={params} url={formVals.url} />
                    </TabPane>
                   
                </Tabs>
            );
        }
        return (
            <>
                <FormItem
                    name="endpoint"
                    label="Endpoint"
                    rules={[{ required: true, message: 'please wait！' }]}
                >
                    <Input placeholder="Endpoint" disabled={props.values ? true : false} />
                </FormItem>
                <FormItem
                    name="method"
                    label="Method"
                    rules={[{ required: true, message: 'please wait！' }]}
                >
                    <Select style={{ width: '100%' }} disabled={props.values ? true : false}>
                        <Option value="GET">GET</Option>
                        <Option value="POST">POST</Option>
                        <Option value="DELETE">DELETE</Option>
                        <Option value="PUT">PUT</Option>
                    </Select>
                </FormItem>
            </>
        );
    };
    const renderFooter = () => {
        if (currentStep === 1) {
            return (
                <>
                    <Button style={{ float: 'left' }} onClick={backward}>
                        Back
          </Button>
                    <Button onClick={() => handleUpdateModalVisible(false, values)}>Cancel</Button>
                    <Button type="primary" onClick={() => handleNext()}>
                        Next
          </Button>
                </>
            );
        }
        if (currentStep === 2) {
            return (
                <>
                    <Button style={{ float: 'left' }} onClick={backward}>
                        Back
          </Button>
                    <Button onClick={() => handleUpdateModalVisible(false, values)}>Cancel</Button>
                    <Button type="primary" onClick={() => handleNext()}>
                        {props.values ? 'Update' : 'Add Service'}
                    </Button>
                </>
            );
        }
        return (
            <>
                <Button onClick={() => handleUpdateModalVisible(false, values)}>Cancel</Button>
                <Button type="primary" onClick={() => handleNext()}>
                    Next
        </Button>
            </>
        );
    };

    return (
        <Modal
            width={640}
            bodyStyle={{ padding: '32px 40px 48px' }}
            destroyOnClose
            title={props.title}
            visible={updateModalVisible}
            footer={renderFooter()}
            onCancel={() => handleUpdateModalVisible()}
        >
            <Steps style={{ marginBottom: 28 }} size="small" current={currentStep}>
                <Step title="Owner Service" />
                <Step title="Remote Serivce" />
                <Step title="Options" />
            </Steps>
            <Form
                layout="vertical"
                {...formLayout}
                form={form}
                id="formUpdate"
                initialValues={{
                    target: formVals.target,
                    template: formVals.template,
                    type: formVals.type,
                    frequency: formVals.frequency,
                    endpoint: formVals.endpoint,
                    method: formVals.method,
                    method_direct: formVals.method_direct,
                    url: formVals.url,
                    Authorization: formVals.auth,
                    typebody:formVals.typebody,
                    body:formVals.typebody==='json'?JSON.stringify(bodies,null,2):bodies
                }}
            >
                {renderContent()}
            </Form>
        </Modal>
    );
};

export default UpdateForm;
