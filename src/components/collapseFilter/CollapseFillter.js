import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import { useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './collapseFillter.scss';
export default function CollapseFilter(props){
    let Collapse;
    switch (props.type){
        case 'students': Collapse = <CollapseStudent/>; break;
        case 'schemal' : Collapse = <CollapseSchemal/>; break;
        case 'subject' : Collapse = <CollapseSubject/>; break;
        case 'professor' : Collapse = <CollapseProfessor/>; break;
        case 'class' : Collapse = <CollapseClass/>; break;
        case 'file' : Collapse = <CollapseClass/>; break;
        default: Collapse = 'students'; break;
    }
   return(
       <div className="collapseFilter">
            {Collapse}
       </div>
   )
}
function CollapseStudent(props){
    return(
        <Form>
            <Row>
                <Col span={7} className="columns-element">
                    <Form.Item label="Name" name="name">
                        <Input placeholder="please enter name"/>
                    </Form.Item>
                </Col>
                <Col span={7} className="columns-element">
                    <Form.Item label="Description" name="description">
                        <Input placeholder="please enter description"/>
                    </Form.Item>
                </Col>  
                <Col span={10} className="columns-element">
                    <Row className="row-btn">
                        <Button type="" className="btnFilter">Reset</Button>
                        <Button type="primary" className="btnFilter">Query</Button>
                    </Row>
                </Col>   
            </Row>
            </Form>
    );
}
function CollapseSchemal(props){
    return(
        <Form>
            <Row>
                <Col span={6} className="columns-element">
                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item>
                </Col>
                <Col span={6} className="columns-element">
                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item>
                </Col>  
                <Col span={5} className="columns-element">
                <Form.Item label="Subject">
                    <Select>
                        <Select.Option>Môn Học 1</Select.Option>
                        <Select.Option>Môn Học 2</Select.Option>
                        <Select.Option>Môn Học 3</Select.Option>
                    </Select>
                </Form.Item>
                </Col>
                <Col span={7} className="columns-element">
                    <Row className="row-btn">
                        <Button type="" className="btnFilter">Reset</Button>
                        <Button type="primary" className="btnFilter">Query</Button>
                    </Row>
                </Col>   
            </Row>
            </Form>
    );
}
function CollapseSubject(props){
    return(
        <Form>
            <Row>
                <Col span={6} className="columns-element">
                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item>
                </Col>
                <Col span={6} className="columns-element">
                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item>
                </Col>  
                <Col span={5} className="columns-element">
                <Form.Item label="Subject">
                    <Select>
                        <Select.Option>Môn Học 1</Select.Option>
                        <Select.Option>Môn Học 2</Select.Option>
                        <Select.Option>Môn Học 3</Select.Option>
                    </Select>
                </Form.Item>
                </Col>
                <Col span={7} className="columns-element">
                    <Row className="row-btn">
                        <Button type="" className="btnFilter">Reset</Button>
                        <Button type="primary" className="btnFilter">Query</Button>
                    </Row>
                </Col>   
            </Row>
            </Form>
    );
}
function CollapseProfessor(props){
    const [expand, setExpand] = useState(false);
    const [form] = Form.useForm();
  
    const getFields = () => {
      const count = expand ? 3 : 0;
      const children = [];
  
      for (let i = 0; i < count; i++) {
        children.push(
          <Col span={8} key={i}>
            <Form.Item
              name={`field-${i}`}
              label={`Field ${i}`}
              rules={[
                {
                  required: true,
                  message: 'Input something!',
                },
              ]}
            >
              <Input placeholder="placeholder" />
            </Form.Item>
          </Col>,
        );
      }
      return children;
    };
  
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
  
    return (
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        <Row gutter={24}>
            <Col span={8} className="columns-element">
            <Form.Item label="DatePicker">
                <DatePicker />
            </Form.Item>
            </Col>
            <Col span={8} className="columns-element">
            <Form.Item label="DatePicker">
                <DatePicker />
            </Form.Item>
            </Col>  
            <Col span={8} className="columns-element">
            <Form.Item label="Subject">
                <Select>
                    <Select.Option>Môn Học 1</Select.Option>
                    <Select.Option>Môn Học 2</Select.Option>
                    <Select.Option>Môn Học 3</Select.Option>
                </Select>
            </Form.Item>
            </Col>
        </Row>
        <Row gutter={24}>{getFields()}</Row>
        <Row>
          <Col
            span={24}
            style={{
              textAlign: 'right',
            }}
          >
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button
              style={{
                margin: '0 8px',
              }}
              onClick={() => {
                form.resetFields();
              }}
            >
              Clear
            </Button>
            <a href
              style={{
                fontSize: 12,
              }}
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? <UpOutlined /> : <DownOutlined />} Collapse
            </a>
          </Col>
        </Row>
      </Form>
    );
}
function CollapseClass(props){
    return(
        <div className="collapseClass">
            <Form>
            <Row>
                <Col span={6} className="columns-element">
                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item>
                </Col>
                <Col span={6} className="columns-element">
                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item>
                </Col>  
                <Col span={5} className="columns-element">
                <Form.Item label="Subject">
                    <Select>
                        <Select.Option>Môn Học 1</Select.Option>
                        <Select.Option>Môn Học 2</Select.Option>
                        <Select.Option>Môn Học 3</Select.Option>
                    </Select>
                </Form.Item>
                </Col>
                <Col span={7} className="columns-element">
                    <Row className="row-btn">
                        <Button type="" className="btnFilter">Reset</Button>
                        <Button type="primary" className="btnFilter">Query</Button>
                    </Row>
                </Col>   
            </Row>
            </Form>
        </div>
        
    );
}
function CollapseFile(props){
  return(
      <div className="collapseFile">
          <Form>
          <Row>
              <Col span={6} className="columns-element">
              <Form.Item label="DatePicker">
                  <DatePicker />
              </Form.Item>
              </Col>
              <Col span={6} className="columns-element">
              <Form.Item label="DatePicker">
                  <DatePicker />
              </Form.Item>
              </Col>  
              <Col span={5} className="columns-element">
              <Form.Item label="Subject">
                  <Select>
                      <Select.Option>Môn Học 1</Select.Option>
                      <Select.Option>Môn Học 2</Select.Option>
                      <Select.Option>Môn Học 3</Select.Option>
                  </Select>
              </Form.Item>
              </Col>
              <Col span={7} className="columns-element">
                  <Row className="row-btn">
                      <Button type="" className="btnFilter">Reset</Button>
                      <Button type="primary" className="btnFilter">Query</Button>
                  </Row>
              </Col>   
          </Row>
          </Form>
      </div>
      
  );
}