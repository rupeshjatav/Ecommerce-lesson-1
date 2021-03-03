import React from "react";
import "../sign-in/sign-in.styles.scss"

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };
    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor="">EMAIL</label>
                <input name='email' type="email" placeholder='email' value={this.state.email} required onChange={this.handleChange} />
                <label htmlFor="">PASSWORD</label>
                <input name='password' type="password" placeholder='password' value={this.state.password} required onChange={this.handleChange} />
                <input type="submit" value='submit form' />
            </form>
        )
    }
}

export default SignIn