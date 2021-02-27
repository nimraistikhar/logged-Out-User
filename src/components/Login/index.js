import React, { Component } from 'react'
import Nav from '../Navbar/Navbar'
import { RiGoogleLine } from 'react-icons/ri'
import styled from 'styled-components';
import Footer from '../Footer'
import { Link } from 'react-router-dom';

const LoginPage = styled.div`
    height: 95vh;
    position: relative;
`

const Container = styled.div`
    border: 1px solid #cccccc9a;
    border-radius: 10px;
    width: 30%;
    padding: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 1069px) {
        width: 40%;
    }
    @media (max-width: 950px) {
        width: 50%;
    }
    @media (max-width: 768px) {
        top: 55%;
    }
    @media (max-width: 650px) {
        width: 60%;
    }
    @media (max-width: 535px) {
        border: none;
        width: 85%;
    }
    @media (max-width: 456px) {
        width: 80%;
    }
    @media (max-width: 410px) {
        width: 90%;
    }
    @media (max-width: 356px) {
        width: 95%;
    }


    h3 {
        font-size: 1.6rem;
        text-align: center;
        margin-bottom: 1.5rem;
        @media (max-width: 535px) {
            text-align: start;
        }
        @media (max-width: 336px) {
            font-size: 1.2rem;
        }
    }

    form {
        margin: 0 auto;
    }

    label {
        font-size: 1rem;
        font-weight: 500;
        color: gray;
    }

    input[type=text], input[type=password] {
        width: 100%;
        padding: 12px 20px 12px 12px;
        margin: 10px 0;
        display: inline-block;
        border: 1px solid #cccccc9a;
        border-radius: 5px;
        box-sizing: border-box;
        color: #5e5d5d;
        font-weight: 400;
        background-color: transparent;
    }

    input[type=text] {
        margin-bottom: 15px;
    }

    input:focus {
        border: 1px solid #13181870;
    }

    button {
        font-size: 1rem;
        padding: 10px 20px;
        margin: 8px 0;
        border-radius: 5px;
        width: 100%;
        font-weight: 700;
        cursor: pointer;
    }

    .detail {
        display: flex;
        justify-content: space-between;
    }

    .detail a {
        text-decoration: underline;
        font-size: .91rem;
        font-weight: 600;
        margin: 0 .5rem;
        transition: color 0.2s ease-in;

        @media(max-width: 1172px) {
            font-size: .8rem;
        }
        @media (max-width: 332px) {
            font-size: .7rem;
        }
    }
    
    span.psw {
        padding-top: 16px;
    }

    .fab {
        font-size: 1.5rem;
        margin-bottom: -.7rem;
        font-weight: 200;
    }

    .fas {
        float: right;
        margin-right: 5px;
        font-size: 1.1rem;
    }

`

export class Login extends Component {

    state = {
        isPasswordShown : false
    }

    togglePasswordVisibility = () => {
        const {isPasswordShown} = this.state;
        this.setState({ isPasswordShown : !isPasswordShown}); 
    };

    render() {
        const { isPasswordShown } = this.state;

        return (
            <div>
                <LoginPage>
                 <Nav />
                     <Container>
                         <h3>Login to your Account</h3>
                         <form action="action_page.php" method="post">

                             <label>Email</label>
                             <input type="text" placeholder="Email" name="email" required />

                             <label>Password</label>

                            <div className="fas">
                                <i className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`}
                                 onClick={this.togglePasswordVisibility}
                                 />
                            </div>
                       
                             <input type={(isPasswordShown) ? "text" : "password"} placeholder="Password" name="psw" className="password" required />

                             <button className="sub-art" type="submit">Login</button>
                             <button className="google-sign" type="submit"><i className="fab"><RiGoogleLine /></i> &nbsp; Sign in with Google</button>

                             <div className="detail">
                                 <span className="psw"><Link to="#">Forgot password?</Link></span>
                                 <span className="psw"><Link to="#">I don't have an Account</Link></span>
                             </div>
                         </form>
                     </Container>
             </LoginPage>
             <Footer />
            </div>
        )
    }
}

export default Login
