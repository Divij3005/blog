import React, {Component} from "react";
import Header from './Header';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import {getAllPosts} from '../service/api.js';
import './styles/Home.css'
import './styles/font-awesome/css/font-awesome.css'


class ComposeButton extends Component{
    
    render(){
        let w = window.innerWidth;
        let cb;
        if (w > 1180){
            cb = <button className="compose-button"><h2> Compose <i class="fa fa-pencil" aria-hidden="true"></i> </h2></button>;
        }
        else {
            cb = <button className="compose-button-compressed"><h2> <i class="fa fa-pencil" aria-hidden="true"></i></h2></button>;
        }
        return(
            <>
                <Link to={"/create"}>{cb}</Link>
            </>
        );
    }
}

class Posts extends Component{
    constructor(props){
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = {data:[]}
    }

    async fetchData(){
        let data = await getAllPosts();
        this.setState({data:data});
    }

    render(){
        this.fetchData();
        let data = this.state.data;
        let row = [];
        data.forEach( (x) =>{
            row.push( <Post postDetails = {x} /> );
        });
        return(
            <>
                {row}
            </>
        );
    }
}

class Post extends Component{
    render(){
        let post = this.props.postDetails;
        return(
            <div className="post">
                <h1> {post.author} </h1>
                <div className="upper-div">
                    <p className="date"> date : {post.date} </p>
                    <p className="topic"> topic : {post.topic} </p>
                </div>
                <div className="content">
                    <p> {post.content} </p>
                </div>
                <Link to={"/detail/"+post._id}>
                    <button><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                </Link>
            </div>
        );
    }
}

const Home = () =>{
    const history = useHistory();
    const { oktaAuth, authState } = useOktaAuth();
    return(
        <>
            <Header  header_ref={["Home","Profile","Stats","Search","Logout"]} clicked={0} history={history} oktaAuth={oktaAuth} authState={authState} />
            <div className="Box"></div>
            <ComposeButton />
            <Posts />
        </>
        );
}


export default Home;