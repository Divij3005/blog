// import React , {Component} from 'react';
// import {Link} from 'react-router-dom';
// import {Form,Button,Container} from "react-bootstrap";



// class LoginForm extends Component{
//     constructor(props){
//         super(props);
//         this.state = {email:'',
//                     password:''};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.validateForm = this.validateForm.bind(this);
//     }

//     handleChange(e){
//         let name = e.target.name;
//         this.setState({
//             [name] : e.target.value
//         });
//     }


//     validateForm(){
//         return this.state.email.length > 0 && this.state.password.length > 0;
//     }

//     handleSubmit(e){
//         e.preventDefault();
//         let data = this.state;
        
//     }

//     render(){
//         return(
//             <Form className="Form">
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
//                     <br />
//                     <Form.Text className="text-muted">
//                         The Email Address for the account is also the Username
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} />
//                 </Form.Group>
//                 <br />
//                 <Button variant="outline-dark" size="lg" type="submit" className="Submit" onClick={this.handleSubmit}>
//                     Submit
//                 </Button>
//                 <br />
//                 <Form.Text className="text-muted">
//                         Does'nt Have an Account yet ? then 
//                 </Form.Text>
//                 <br />
//                 <Link to={'/signup'}>Signup</Link>
//             </Form>
//         );
//     }
// }


// const LoginPage = () =>{
//     return(
//         <div id="back">
//             <Container fluid="sm" className="LoginContainer">
//                 <LoginForm />
//             </Container>
//         </div>
//     );
// }

// export default LoginPage;


import React , {Component} from 'react';
import axios from "axios";
import dotenv from "dotenv";

import GoogleLogin from "react-google-login";
// import TwitterLogin from "react-twitter-login";

import './styles/LoginPage.css';

dotenv.config();
const baseURL =  "http://localhost:8000";

class Login extends Component {
    //After logging in, redirect to previous page
    componentDidMount() {
        if (sessionStorage.getItem("isLoggedIn") === "true") {
            window.location = '/';
        }
    }

    // Google login success callback
    successGoogleLogin(response) {

        var googleId = response.googleId;
        var accessToken = response.accessToken;
        let m,y;
        let sex;
        axios
            .get(`https://people.googleapis.com/v1/people/${googleId}?personFields=birthdays,genders&access_token=${accessToken}`)
            .then((resp) => {
                // d = resp.data.birthdays[0].date.day;
                m = resp.data.birthdays[0].date.month;
                y = resp.data.birthdays[0].date.year;
                sex = resp.data.genders[0].value; 

                var age = new Date().getFullYear() - y - Math.floor((new Date().getMonth() + 1 - m)/12);

                const user = {
                    username: response.profileObj.name,
                    socialId: response.googleId,
                    sex: sex,
                    age: age, 
                };
                console.log("helo");
                // Make an API call to either findOrCreate the user
                axios.post(`${baseURL}/auth/login`, user).then((res) => {
                        // Reload the page once count is 1 to reload the navbar component and display "Logout" as an option instead of "Login"
                        let count = 0;
        
                        // If the response has a valid social Id
                        if (res.data.socialId === response.googleId) {
                            // Set the username and isLoggedIn in the session storage
                            sessionStorage.setItem("isLoggedIn", "true");
                            sessionStorage.setItem("username", res.data.username);
                            sessionStorage.setItem("sex",res.data.sex);
                            sessionStorage.setItem("age",res.data.age);
                            count++;
        
                            // Remove the user session cookie after 24 hours, to log the user out.
                            // This is for cases when the user doesn't end the session or doesn't logout
                            window.setTimeout(() => {
                                sessionStorage.removeItem("isLoggedIn");
                                sessionStorage.removeItem("username");
                                sessionStorage.removeItem("sex");
                                sessionStorage.removeItem("age");
                            }, 24 * 60 * 60 * 60);
        
                            // If user data is stored in the session Storage, then reload page to update Navbar component appropriately
                            if (count === 1) {
                                window.location.reload();
                            }
                        }
                        // If user data returned is invalid, then redirect to the login page once again
                        else {
                            window.location = "/login";
                        }
                    })
                    .catch((err) => console.error(err));
                
            }) //You will get data here
            .catch((error) => {console.warn(JSON.stringify(error, null, 4));});   
        
        // Create an instance of the user
        
    }

    

    // Google login failure callback
    failureGoogleLogin(response) {
        console.error(response);
        window.location = "/login";
    }

    render() {
        return (
            <>
            <div className="Box1"></div>
            <div className="container">
                <div className="login">
                    <h2 className="val">
                        Please Login With Your Google Account .. 
                        <span className="full-stop">.</span>
                    </h2>
                    <hr className="gold-hr" />
                    <div className="google">
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Log in With Google"
                            onSuccess={this.successGoogleLogin}
                            onFailure={this.failureGoogleLogin}
                            cookiePolicy={"single_host_origin"}
                            scope='https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/userinfo.profile'
                        />
                    </div>
                    <br />
                </div>
            </div>
            </>
        );
    }
}

export default Login;