import {
    CButton, CCard,
    CCardBody,
    CCardHeader, CCol,
    CRow
} from '@coreui/react';
import { Button, Form, Select, Space, Table, Popconfirm } from 'antd';
import React, { useRef, useState } from 'react';
import ReactJson from 'react-json-view';
import { useDispatch, useSelector } from 'react-redux';
import ServiceConvertor from '../../helpers/converter';
import { ValidateFormAddService } from '../../helpers/validateForm.js';
import { Add__Service, Delete_Method, Query_All_Service, Update_Service } from '../../redux/services/ServiceServices';
import { ActionExec } from '../action/actionExecAPI.js';
import { ActionDeleteResult } from '../action/actionNormal.js';
import { openSuccessNotif, openTypeNotif } from '../notifications/notif/notifStore.js';
import ConfigForm from './Components/ConfigForm.js';
import UpdateForm from './Components/UpdateForm';
const fields = [
    {
        key: 'Endpoint', _style: { width: '10%' }
    },
    {
        key: 'Method', _style: { width: '10%' }
    },
    {
        key: 'Redirect_Method', _style: { width: '15%' }
    },
    {
        key: 'URL', _style: { width: '25%' }
    },
    {
        key: 'Action', _style: { width: '30%' }
    }
]

const Services = () => {
    const dispatch = useDispatch();
    const serviceRedux = useSelector((state) => state.Services.services);
    const resultExec = useSelector((state) => state.Services.result);
    const [stepFormValues, setStepFormValues] = useState({});
    const [updateModalVisible, handleUpdateModalVisible] = useState(false);
    const [success, setSuccess] = useState(false);
    const [serviceEdit, setServiceEdit] = useState(null);
    const [deletable,setDeletable] = useState(false);
    const actionRef = useRef();
    const [formConfig] = Form.useForm();
    const handleSubmitAdd = (data) => {
        const converted = ValidateFormAddService(data);
        console.log('convert add', converted);
        Add__Service(dispatch, converted)
            .then((result) => {
                console.log(result)
                if (result) {
                    // openSuccessNotif('Thông báo', 'Thêm thành công!', 2000, 'success');
                    setSuccess(!success)
                }
            })
    }
    const handleUpdate = async (fields) => {
        const converted = ValidateFormAddService(fields);
        console.log('convert update', converted);
        Update_Service(dispatch, converted)
            .then((result) => {
                console.log(result)
                if (result) {
                    // openSuccessNotif('Thông báo', 'Sửa thành công!', 2000, 'success');
                    handleUpdateModalVisible(false);
                    setStepFormValues({});
                }
            })
    };
    const handleDeleteAPI = async (endpoint, method)=>{
        setDeletable(true);
        if(!endpoint|| !method || endpoint=='' || method == ''){
            openTypeNotif('Thông báo', 'Có lỗi khi nhân validate!', 2000, 'warning');
        }else{
            const body = {endpoint, method};
            Delete_Method(dispatch,body)
            .then(result =>{
                console.log(result);
                if (result) {
                    // openSuccessNotif('Thông báo', 'Xóa thành công!', 2000, 'success');
                }
            })
            .finally(()=>{
                setDeletable(false);
            })
            
        }
    }
    const handleOnRowClick = (record) => {
        var node = document.getElementById('cardconfig');
        node.scrollIntoView({ behavior: 'smooth' })
        setServiceEdit(record)
    }
    const expandedRowRender = (record) => {
        return <div>
            <Button type='primary' onClick={() => handleOnRowClick(record)}>Config</Button>
            <Popconfirm
            title='Are you exactly to delete this API ?'
            onConfirm={() => handleDeleteAPI(record.Endpoint,record.Method)}
            >
                <Button type='ghost' disabled={deletable}>Delete</Button>
            </Popconfirm>
        </div>;

    };
    React.useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        Query_All_Service(dispatch).then((item) => {
            console.log(item);
        })
        return function cleanup() {
            abortController.abort()
        }
    }, [])

    const columns = [
        {
            title: 'Endpoint',
            dataIndex: 'Endpoint',
            width: '15%',
            sorter: (a, b) => a.Endpoint.length - b.Endpoint.length,
            fixed: 'left',
        },
        {
            title: 'Method',
            dataIndex: 'Method',
            width: '10%'
        },
        {
            title: 'Redirect_Method',
            dataIndex: 'Redirect_Method',
            width: '10%'
        },
        {
            title: 'URL',
            dataIndex: 'URL',
            width: '40%'
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            width: '25%',
            render: (item) => (
                <Space size="middle">
                    <ActionExec service={item} />
                    <Button className="ant-dropdown-link"
                        onClick={() => {
                            handleUpdateModalVisible(true);
                            setStepFormValues(item);
                        }}>
                        Update
                    </Button>
                </Space>
            ),
        },
    ]
    return (
        <>
            <CRow>
                <CCol xs="8">
                    <CRow>
                        <CCard style={{ width: '100%' }}>
                            <CCardHeader>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>Service Management</div>
                                    <CButton color="success" onClick={() => setSuccess(!success)}>
                                        Add Service
                                    </CButton>
                                </div>
                            </CCardHeader>
                            <CCardBody>
                                <Table
                                    expandable={{ expandedRowRender }}
                                    tableLayout={'fixed'}
                                    dataSource={serviceRedux}
                                    columns={columns}
                                    pagination={{ pageSize: 5 }}
                                    scroll={{ x: 950 }}
                                    onRow={(record, index) => {
                                        return {
                                            onDoubleClick: event => {
                                                handleOnRowClick(record);
                                            }
                                        }
                                    }}
                                />
                            </CCardBody>
                        </CCard>
                    </CRow>
                    <CRow>
                        <CCard style={{ width: '100%' }}>
                            <CCardHeader id="cardconfig" >
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>Service Config</div>
                                    <Button onClick={() => formConfig.submit()} disabled={!serviceEdit}>
                                        Save
                                    </Button>
                                </div>
                            </CCardHeader>
                            <CCardBody>
                                {serviceEdit && <ConfigForm value={serviceEdit} form={formConfig} />}
                            </CCardBody>
                        </CCard>
                    </CRow>
                </CCol>
                <CCol xs="4">
                    <CCard style={{ width: '100%' }}>
                        <CCardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div> Result API</div>
                            <ActionDeleteResult />
                        </CCardHeader>
                        <CCardBody style={{ overflowY: 'scroll', height: '90vh', width: '100%' }} id="resultCode">
                            {/* <ReactJson src={resultExec} style={{ fontSize: '18px' }} /> */}
                            <div>
                                    <pre>
                                        {JSON.stringify(resultExec,null,2)}
                                    </pre>

                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
            {success ? (
                <UpdateForm
                    onSubmit={handleSubmitAdd}
                    onCancel={() => setSuccess(!success)}
                    updateModalVisible={true}
                    title='Add Service'
                />
            ) : null}
            {stepFormValues && Object.keys(stepFormValues).length ? (
                <UpdateForm
                    title='Update Service'
                    onSubmit={
                        async (value) => {
                            const success = await handleUpdate(value);
                            if (success) {
                                handleUpdateModalVisible(false);
                                setStepFormValues({});
                                if (actionRef.current) {
                                    actionRef.current.reload();
                                }
                            }
                        }
                    }
                    onCancel={() => {
                        handleUpdateModalVisible(false);
                        setStepFormValues({});
                    }}
                    updateModalVisible={updateModalVisible}
                    values={ServiceConvertor.ConvertWithoutOrigin(stepFormValues)}
                />
            ) : null}
        </>
    )
}
export default Services
