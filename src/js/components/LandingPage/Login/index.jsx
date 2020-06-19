import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import './styles.css'

class LoginForm extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        email: '',
        password: '',
        invalidLogin: this.props.invalidLoginStatus,
    }

    onInputChangeHandler = (event) => {
        const TARGET = event.target
        this.setState({
            [TARGET.name]: TARGET.value,
        })
    }

    render() {
        return (
            <div id="LoginFrom">
                <input
                    className={`text-input ${
                        this.props.invalidLoginStatus ? 'invalidInput' : ''
                    }`}
                    type="email"
                    value={this.state.email}
                    onChange={this.onInputChangeHandler}
                    placeholder="email"
                    name="email"
                />
                <input
                    className={`text-input ${
                        this.props.invalidLoginStatus ? 'invalidInput' : ''
                    }`}
                    type="password"
                    value={this.state.password}
                    onChange={this.onInputChangeHandler}
                    name="password"
                    placeholder="password"
                />
                <button
                    className="primary-btn"
                    onClick={() => {
                        this.props.loginHandler(
                            this.state.email,
                            this.state.password
                        )
                    }}
                >
                    {' '}
                    login{' '}
                </button>
            </div>
        )
    }
}

export default LoginForm
