import React, {Component} from "react";
import {getAllPosts} from '../service/api.js';
import {Link} from 'react-router-dom';
import './styles/Post.css'
import './styles/font-awesome/css/font-awesome.css'

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
            row.unshift( <Post postDetails = {x} /> );
        });
        return(
            <>
                {row}
            </>
        );
    }
}

function shorter(str){
    return str.length > 300 ? str.substring(0,300) + '...' : str;
}

function displayDate(dateOfCreation){
    const currentDate = new Date();
    var secs = (currentDate - dateOfCreation)/1000;
    if (secs < 60){
        return  Math.floor(secs/1) + " sec ago";
    }
    if(secs < 3600){
        return Math.floor(secs/60) + " min ago";
    }
    if(secs < 3600*24){
        return Math.floor(secs/3600) + " hour ago"
    }
    return dateOfCreation.toDateString()

}

class Post extends Component{
    render(){
        let post = this.props.postDetails;
        return(
            <div className="post">
                <h1> {post.author} </h1>
                <div className="upper-div">
                    <p className="date">  {displayDate(new Date(post.date))} </p>
                    <p className="topic">  {post.topic} </p>
                </div>
                <div className="content">
                    <p> {shorter(post.content)} </p>
                </div>
                <Link to={"/detail/"+post._id}>
                    <button><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                </Link>
            </div>
        );
    }
}


export default Posts;