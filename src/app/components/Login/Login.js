import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import UploadAvatar from 'material-ui/svg-icons/action/account-circle';


import PageBottleBackground from '../PageBottleBackground/PageBottleBackground';

const styles = {
    labelText: {
        color: '#ffffff',
        paddingLeft: 15
    },
    textField: {
        marginBottom: 20,
    },
    input: {
        color: '#ffffff',
        border: '1px solid #fff',
        borderRadius: 3,
        padding: '0 10px',
    },
    radio: {
        display: 'inline-block',
        width: 60
    },
    labelRadio: {
        color: '#ffffff'
    },
    iconRadio: {
        marginRight: 8,
    },
    checkbox: {
        display: 'table-cell',
        heigh: '29px',
        verticalAlign: 'middle',
        width: 'auto',
        lineHeight: '29px'
    },
    uploadInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
    primaryButton: {
        textAlign: 'center',
        width: '70%'
    },
    link: {
        fontWeight: 'bold',
        verticalAlign: 'middle',
    }
}

export default class Login extends React.Component{

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            acceptRules: false
        }
    }

    handleChange(event, acceptRules){
        this.setState({
            acceptRules: acceptRules
        });
    }
    render(){

        return (
            <PageBottleBackground>
                <div className="wrap-verif">
                    <div style={styles.textField}>
                        <TextField
                            hintText="Логин"
                            fullWidth={true}
                            underlineShow={false}
                            style={styles.textField}
                            hintStyle={styles.labelText}
                            inputStyle={styles.input} />
                        <TextField
                            type="password"
                            hintText="Пароль"
                            fullWidth={true}
                            underlineShow={false}
                            style={styles.textField}
                            hintStyle={styles.labelText}
                            inputStyle={styles.input} />

                    </div>
                    <div className="clearfix">
                        <div className="col-50">
                            <Link to="/registration/enter-phone" style={{lineHeight: '28px'}}>Регистрация</Link>
                        </div>
                        <div className="col-50 text-right">
                            <RaisedButton
                                href="/#/chats"
                                label="Далее"
                                primary={true}
                                style={styles.primaryButton} />
                        </div>
                    </div>
                </div>
            </PageBottleBackground>
        )
    }
}