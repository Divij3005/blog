// import React , {Component} from 'react';
// import {Link} from 'react-router-dom';
// import {Form,Button,Container} from "react-bootstrap";
// import './styles/LoginPage.css';


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