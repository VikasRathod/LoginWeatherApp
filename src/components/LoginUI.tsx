import React from 'react';
import './LoginUi.css';

export default function LoginUI(props: any) {
    return (
        <div className="loginCard">
            <h1>Login</h1>
            <form onSubmit={props.formSubmit}>
                <div>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email id"
                        value={props.emailVal}
                        onChange={props.handleEmail}
                    />
                </div>
                <div>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={props.passVal}
                        onChange={props.handlePass}
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}
