import React,{Component} from 'react';
import Header from './Header';
import './styles/BlogDetail.css'
import './styles/font-awesome/css/font-awesome.css'

const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Libero justo laoreet sit amet cursus sit amet dictum. Tellus mauris a diam maecenas sed enim ut sem. Fusce id velit ut tortor pretium viverra suspendisse. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Bibendum at varius vel pharetra. Fermentum leo vel orci porta non pulvinar. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Blandit massa enim nec dui. Ante in nibh mauris cursus mattis. Amet venenatis urna cursus eget nunc scelerisque viverra. Sagittis vitae et leo duis ut diam quam nulla porttitor. Ac tortor dignissim convallis aenean et tortor at risus. Habitant morbi tristique senectus et netus et malesuada fames. Ultrices vitae auctor eu augue ut lectus. Commodo elit at imperdiet dui accumsan sit amet nulla. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.";
const likes = 309;
const dislikes = 28;


class BlogDetail extends Component{
    render(){
        return(
            <>
                <Header  header_ref={["Home","Profile","Stats","Logout"]} clicked={-1} />
                <div className="Box"></div>
                <div className="container">
                    <h1 id="auth"> Author </h1>
                    <div id="dt">
                        <p id="date">date</p>
                        <p id="topic">topic</p>
                    </div>
                    <div id="content">
                        <p>
                            {content}
                        </p>
                    </div>
                    <div className="Interactivity">
                        <button id="like"><h4>{likes} <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> </h4></button>
                        <button id="dislike"><h4>{dislikes} <i class="fa fa-thumbs-o-down" aria-hidden="true"></i> </h4></button>
                    </div>
                </div>
            </>
        );
    }
}

export default BlogDetail;