import React from "react";

class Login extends React.Component {
    state = {
        email: '',
        password: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = () => {
        if (this.state.email.length > 2 && this.state.password.length > 2) {
            this.props.showBtn(true)    
        }
    }
    render() {
        const {email, password} = this.state;
        return (
            <React.Fragment>
                <h1>Sign In</h1>
                <span className="alert"></span>
                <label>Email:</label>
                <input 
                id="email"
                value={email} 
                onChange={(e) => this.handleChange(e)}
                className="input" />
                <label>Password:</label>
                <input 
                id="password"
                value={password} 
                onChange={(e) => this.handleChange(e)}
                className="input" />
                <div className="btnContain">
                    <button 
                    onClick={this.handleSubmit}
                    className="btn login"
                    >
                        <div className="lds-defaultTwo">
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        </div>
                        <span className="loginTxt">LOGIN</span>
                    </button>
                    <button className="btn signup">
                        <span className="signTxt"> SIGNUP </span>
                    </button>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;