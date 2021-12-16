import React,{Component} from 'react';
// import {useHistory} from 'react-router-dom';
import Header from './Header';
import './styles/Compose.css'
import './styles/font-awesome/css/font-awesome.css'

import {createPost} from '../service/api';


class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            author:'',
            topic: "",
            date: new Date(),
            content: "",
            like: '0',
            dislike: '0',
            isLoggedIn : false,
            sex : '',
            age : 19,
        };
        this.handleChange = this.handleChange.bind(this);
        this.savePost = this.savePost.bind(this);
    }

    componentDidMount() {
        if (sessionStorage.getItem("isLoggedIn") === "true") {
            this.setState({
                author: sessionStorage.getItem("username"),
                sex : sessionStorage.getItem("sex"),
                age: sessionStorage.getItem("age"),
                isLoggedIn: true,
            });
        }
    }

    handleChange(e){
        var value = e.target.value;
        var name = e.target.name;
        this.setState({
            [name]: value
          });
        
    }

    async savePost()  {
        this.setState({date:new Date()});
        const post = this.state;
        await createPost(post);
        // this.props.history.push('/');
        window.location = '/';
    }

    render(){
        var topic = this.state.topic;
        if(topic === ""){
            topic = "Topic";
        }
        return(
            <div className="container-auto">
                <form id="f">
                    <label> 
                        <h3>{topic}</h3>
                        <input id="inp" type="text" placeholder="Topic For Blog .." name="topic" onChange={this.handleChange}/>
                    </label>
                    <br />
                    <textarea className="blog-content" placeholder="Write Content of Blog here .." name="content" onChange={this.handleChange} rows="20"  cols="60"></textarea>
                    <br />
                    <button id="button" onClick={this.savePost}>Submit</button>
                </form>
            </div>

            
        );
    }
}



function Compose(){
    return(
        <>
            <Header header_ref={["Home","Stats","Logout"]} clicked={-1} />
            <div className="Box"></div>
            <PostForm  />
        </>
    );
}


export default Compose;