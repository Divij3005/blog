import React, {Component} from "react";
import Header from './Header';
import {Link} from 'react-router-dom';
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
                {cb}
            </>
        );
    }
}

class Posts extends Component{
    render(){
        return(
            <div className="post">
                <h1> Author </h1>
                <div className="upper-div">
                    <p className="date"> date </p>
                    <p className="topic"> topic </p>
                </div>
                <div className="content">
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Libero justo laoreet sit amet cursus sit amet dictum. Tellus mauris a diam maecenas sed enim ut sem. Fusce id velit ut tortor pretium viverra suspendisse. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Bibendum at varius vel pharetra. Fermentum leo vel orci porta non pulvinar. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Blandit massa enim nec dui. Ante in nibh mauris cursus mattis. Amet venenatis urna cursus eget nunc scelerisque viverra. Sagittis vitae et leo duis ut diam quam nulla porttitor. Ac tortor dignissim convallis aenean et tortor at risus. Habitant morbi tristique senectus et netus et malesuada fames. Ultrices vitae auctor eu augue ut lectus. Commodo elit at imperdiet dui accumsan sit amet nulla. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</p>
                </div>
                <Link to={"/detail"}>
                    <button><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                </Link>
            </div>
        );
    }
}

class Home extends Component{
    render(){
        return(
            <>
                <Header  header_ref={["Home","Profile","Stats","Search","Logout"]} clicked={0} />
                <div className="Box"></div>
                <ComposeButton />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
            </>
        );
    }
}

export default Home;