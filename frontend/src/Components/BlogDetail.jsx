import React,{Component} from 'react';
import Header from './Header';
import {getPost} from '../service/api';
import './styles/BlogDetail.css'
import './styles/font-awesome/css/font-awesome.css'




class BlogDetail extends Component{

    constructor(props){
        super(props);
        this.state = {data:{},id:props.match.params.id};
        this.fetchData = this.fetchData.bind(this);
    }

    async fetchData(){
        let data = await getPost(this.state.id);
        this.setState({data:data});
    }

    render(){
        this.fetchData();
        return(
            <>
                <Header  header_ref={["Home","Profile","Stats","Logout"]} clicked={-1} />
                <div className="Box"></div>
                <div className="container">
                    <h1 id="auth"> {this.state.data.author} </h1>
                    <div id="dt">
                        <p id="date">date: {this.state.data.date}</p>
                        <p id="topic">topic: {this.state.data.topic}</p>
                    </div>
                    <div id="content">
                        <p>
                            {this.state.data.content}
                        </p>
                    </div>
                    <div className="Interactivity">
                        <button id="like"><h4>{this.state.data.like} <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> </h4></button>
                        <button id="dislike"><h4>{this.state.data.dislike} <i class="fa fa-thumbs-o-down" aria-hidden="true"></i> </h4></button>
                    </div>
                </div>
            </>
        );
    }
}

export default BlogDetail;