import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import './collapseFillter.scss';
export default function CollapseFilter(props){
    let Collapse;
    switch (props.type){
        case 'students': Collapse = <CollapseStudent/>; break;
        case 'schemal' : Collapse = <CollapseSchemal/>; break;
        case 'subject' : Collapse = <CollapseSubject/>; break;
        case 'frofessor' : Collapse = <CollapseProfessor/>; break;
        case 'class' : Collapse = <CollapseClass/>; break;
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
        // <QueryFilter defaultCollapsed>
        //     <ProFormText name="name" label="应用名称"/>
        //     <ProFormDatePicker name="createDate" label="创建时间"/>
        //     <ProFormText name="status" label="应用状态"/>
        //     <ProFormDatePicker name="replyDate" label="响应日期"/>
        //     <ProFormDatePicker name="enddate" label="创建时间"/>
        // </QueryFilter>
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