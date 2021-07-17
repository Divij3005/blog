import React, {Component} from "react";
import Header from './Header';
import {Link} from 'react-router-dom';
import {getAllPosts} from '../service/api.js';
import './styles/Home.css'
import './styles/font-awesome/css/font-awesome.css'


class ComposeButton extends Component{

    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {lastScrollTop:0,y:0};
    }

    handleScroll(e){
        var st = window.pageYOffset;
        if (st > this.state.lastScrollTop){
            // downscroll ..
            if(st<90){
                this.setState({y:st});
            }
        }
        else{
            //up scroll ..
            // alert("upscroll");
            if(st<90){
                this.setState({y:st});
            }
        }
        this.setState({lastScrollTop:st<=0?0:st});

    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll);
    }
    
    render(){
        let w = window.innerWidth;
        let cb;
        const styles={
            transform: 'translate(0px,-'+this.state.y+'px)'
        };
        if (w > 1180){
            cb = <button className="compose-button" style={styles}><h2> Compose <i class="fa fa-pencil" aria-hidden="true"></i> </h2></button>;
        }
        else {
            cb = <button className="compose-button-compressed" style={styles}><h2> <i class="fa fa-pencil" aria-hidden="true"></i></h2></button>;
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

const Home = () =>{
    return(
        <>
            <Header  header_ref={["Home","Profile","Stats","Search","Logout"]} clicked={0}  />
            <div className="Box"></div>
            <ComposeButton />
            <Posts />
        </>
        );
}


export default Home;