import React, {Component} from "react";
import Header from './Header';
import {Link} from 'react-router-dom';
import Posts from './Post'
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
            else{
                this.setState({y:90});
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
            cb = <button className="compose-button" style={styles}><h4> Compose <i class="fa fa-pencil" aria-hidden="true"></i> </h4></button>;
        }
        else {
            cb = <button className="compose-button-compressed" style={styles}><h4> <i class="fa fa-pencil" aria-hidden="true"></i></h4></button>;
        }
        return(
            <>
                <Link to={"/create"}>{cb}</Link>
            </>
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