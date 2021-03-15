import { combineReducers } from 'redux';
import admin from '../reducers/adminReducer';
import _class from '../reducers/classReducer';
import document from '../reducers/documentReducer';
import history from '../reducers/historyReducer';
import professor from '../reducers/professorReducer';
import student from '../reducers/studentReducer';
import subject from '../reducers/SubjectReducer';

const myReducers = combineReducers({
    Class: _class,
    Admin: admin,
    Professor: professor,
    Subject: subject,
    Student: student,
    History: history,
    Document: document,
});
export default myReducers;
