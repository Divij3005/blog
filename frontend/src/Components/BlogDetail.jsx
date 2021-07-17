import React,{Component} from 'react';
import Header from './Header';
import {getPost,interactivityUpdate} from '../service/api';
import './styles/BlogDetail.css'
import './styles/font-awesome/css/font-awesome.css'


function displayDate(dateOfCreation){
    const currentDate = new Date();
    var secs = (currentDate - dateOfCreation)/1000;
    if (secs < 60){
        return  secs + " sec ago";
    }
    if(secs < 3600){
        return Math.floor(secs/60) + " min ago";
    }
    if(secs < 3600*24){
        return Math.floor(secs/3600) + " hour ago"
    }
    return dateOfCreation.toDateString()

}


class BlogDetail extends Component{

    constructor(props){
        super(props);
        this.state = {data:{},id:props.match.params.id,like:false,dislike:false};
        this.fetchData = this.fetchData.bind(this);
        this.likeClick = this.likeClick.bind(this);
        this.dislikeClick = this.dislikeClick.bind(this);
    }

    async fetchData(){
        let data = await getPost(this.state.id);
        this.setState({data:data});
    }

    async likeClick(){
        if(this.state.dislike){
            return;
        }
        var data = this.state.data;
        if(this.state.like){
            data.like--;
            this.setState({like:false});
            await interactivityUpdate(this.state.id,data);
            return;
        }

        data.like++;
        this.setState({like:true});

        await interactivityUpdate(this.state.id,data);
        
    }

    async dislikeClick(){
        if(this.state.like){
            return;
        }
        var data = this.state.data;
        if(this.state.dislike){
            data.dislike--;
            this.setState({dislike:false});
            await interactivityUpdate(this.state.id,data);
            return;
        }

        data.dislike++;
        this.setState({dislike:true});

        await interactivityUpdate(this.state.id,data);
        
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
                        <p id="date">{displayDate(new Date(this.state.data.date))}</p>
                        <p id="topic">{this.state.data.topic}</p>
                    </div>
                    <div id="content">
                        <p>
                            {this.state.data.content}
                        </p>
                    </div>
                    <div className="Interactivity">
                        <button id="like" onClick={this.likeClick}><h4>{this.state.data.like} <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> </h4></button>
                        <button id="dislike" onClick={this.dislikeClick}><h4>{this.state.data.dislike} <i class="fa fa-thumbs-o-down" aria-hidden="true"></i> </h4></button>
                    </div>
                </div>
            </>
        );
    }
}

export default BlogDetail;