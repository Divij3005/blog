import React,{Component} from 'react';
import Header from './Header';
import './styles/Compose.css'
import './styles/font-awesome/css/font-awesome.css'


class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {topic:"Topic"};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        var t = e.target.value;
        this.setState({topic:t});
    }
    render(){
        var topic = this.state.topic;
        if(topic === ""){
            topic = "Topic";
        }
        return(
            <div className="container">
                <form>
                    <label> 
                        <h3>{topic}</h3>
                        <input type="text" placeholder="Topic For Blog .." onChange={this.handleChange}/>
                    </label>
                    <br />
                    <textarea className="blog-content" placeholder="Write Content of Blog here .." rows="20"  cols="60"></textarea>
                    <br />
                    <button id="button">Submit</button>
                </form>
            </div>

            
        );
    }
}

class Compose extends Component{
    render(){
        return(
            <>
                <Header header_ref={["Home","Profile","Stats","Logout"]} clicked={-1} />
                <div className="Box"></div>
                <PostForm />
            </>
        );
    }
}


export default Compose;