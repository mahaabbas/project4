import React, { Component } from "react";
import LogInForm from '../../components/LogInForm/LogInForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm';

import './Authpage.css'

export default class AuthPage extends Component {

    state = {
        showLogin: true
    }


    render() {
        return (
            <div className="AuthPageBG">
               
                <div className="AuthPage">
                    <h1 className="text" onClick={() => this.setState(
                        { showLogin: !this.state.showLogin }
                    )}>
                        {this.state.showLogin
                            ?
                            <>Don't have an account? <button>Register</button></>
                            :
                            <>Have an account? <button>Sign In</button></>
                        }</h1>
                </div>


            {/* <div className="HiddenAuth">
            <h1 onClick={() => this.setState(
                { showLogin: !this.state.showLogin }
                )}>
            {this.state.showLogin 
            ? 
            <><h3>Don't have an account?</h3><button>Register</button></>
            :
            <><span>Have an account?</span> <button>Sign In</button></>
            }</h1>
            </div> */}
            

                <div className="AuthPage">
                    {this.state.showLogin
                        ?
                        <LogInForm className="Log-in" setUserInState={this.props.setUserInState} />
                        :
                        <SignUpForm className="Sign-up" setUserInState={this.props.setUserInState} />
                    }
                </div>
            </div>
        )
    }
}