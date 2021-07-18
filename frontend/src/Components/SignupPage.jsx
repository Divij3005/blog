import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import {Form,Button,Container} from "react-bootstrap";
import './styles/SignupPage.css';


class SignupForm extends Component{
    constructor(props){
        super(props);
        this.state = {email:'',
                    name: '',
                    password : '',
                    confirm_password: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    handleChange(e){
        let name = e.target.name;
        this.setState({
            [name] : e.target.value
        });
    }

    validatePassword(){
        return this.state.password === this.state.confirm_password;
    }

    validateForm(){
        return this.state.email.length > 0 && this.state.name.length > 0 && this.state.password.length > 0;
    }

    async handleSubmit(e){
        e.preventDefault();

        if(this.validateForm()){
            if(this.validatePassword()){
                let user = this.state;
                await createUser(user);
            }   
            else{
                alert('Password and Confirm Password Does not match');
            }
        }
        else{
            alert('Fill all details !!');
        }

    }

    render(){
        return(
            <Form className="Form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address / Username </Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" name="email" onChange={this.handleChange} />
                    <br />
                    <Form.Text className="text-muted">
                        The Email Address for the account is also the Username
                    </Form.Text>
                    <br />
                    <Form.Label>Full Name </Form.Label>
                    <Form.Control type="text" placeholder="Name" name="name" onChange={this.handleChange} />

                </Form.Group>
                <br />

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" name="confirm_password" onChange={this.handleChange} />
                </Form.Group>
                <br />
                <Button variant="outline-dark" size="lg" type="submit" className="Submit" onClick={this.handleSubmit}>
                    Sign Up !
                </Button>

                <br />
                <Form.Text className="text-muted">
                    Go Back To Login ..
                </Form.Text>
                <br />
                <Link to={'/login'}>Login</Link>

            </Form>
        );
    }
}


const SignupPage = () =>{
    return(
        <div className="signup-control">
            <Container>
                <SignupForm />
            </Container>
        </div>
    );
}

export default SignupPage;