import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginUI from '../components/LoginUI';

interface componentState {
    emailId: string,
    password: string,
    validUser: boolean,
}

export default class Login extends React.Component<{}, componentState> {

    constructor(props: any) {
        super(props);
        this.state = {
            emailId: '',
            password: '',
            validUser: false,
        }
    }

    handleEmailId = (e: any) => {
        e.preventDefault();
        this.setState({
            emailId: e.target.value,
        })
    }

    handlePassword = (e: any) => {
        e.preventDefault();
        this.setState({
            password: e.target.value,
        })
    }

    handleLogin = (e: any) => {
        e.preventDefault();
        if (this.state.emailId === "blizz@gmail.com" && this.state.password === "blizz") {
            this.setState({
                validUser: true,
            })
        }
    }

    render() {
        if (this.state.validUser) {
            return <Redirect to="/homePage" />
        }
        return (
            <LoginUI
                formSubmit={this.handleLogin}
                emailVal={this.state.emailId}
                handleEmail={this.handleEmailId}
                passVal={this.state.password}
                handlePass={this.handlePassword}
            />
        )
    }
}
