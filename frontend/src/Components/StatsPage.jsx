import React,{Component} from "react";
import Header from './Header';
import {getStats} from '../service/api.js';
import { Chart } from "react-google-charts";

import './styles/StatsPage.css'
import './styles/font-awesome/css/font-awesome.css'


class Cc2 extends Component{
    render(){
        return(
            <>
                <Chart
                    width={'600px'}
                    height={'400px'}
                    chartType="Histogram"
                    loader={<div>Loading Chart</div>}
                    data={this.props.data}
                    options={{
                        title: 'Age Distribution in '+this.props.val+'Sentiment',
                        titleTextStyle: {
                            color: 'rgb(185, 99, 114)',
                            fontSize: 25,
                            italic : true,
                        },
                        legend: { position: 'none' },
                        colors: ['rgb(1, 66, 104)'],
                        bar: { gap: 0 },
                    }}
                    rootProps={{ 'data-testid': '4' }}
                />
            </>
        );
    }
}

class Cc1 extends Component{

    render(){
        return(
            <>
            <Chart
                width={'800px'}
                height={'500px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                 ['Sex Ratio', 'Number of Blogs'],
                 ['Male',this.props.data.male],
                 ['Female', this.props.data.female],]
                }
                // data = {dataInter(this.props.data)}
                options={{
                    title: "Sex Ratio for "+this.props.val + " Sentiment",
                    titleTextStyle: {
                        color: 'rgb(185, 99, 114)',
                        fontSize: 25,
                        italic : true,
                    },
                    is3D: true,
                    colors: ['rgb(1, 66, 104)','rgb(185, 99, 114)'],
                }}
                rootProps={{ 'data-testid': '2' }}
            />
            </>
        );
    }
}

class Cc extends Component{

    render(){
        return(
            <>
            <Chart
                width={'800px'}
                height={'500px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                 ['Sentiments', 'Number of Blogs'],
                 ['Negative',this.props.data.negative],
                 ['Positive', this.props.data.positive],]
                }
                // data = {dataInter(this.props.data)}
                options={{
                    title: "General Public's Sentiment",
                    titleTextStyle: {
                        color: 'rgb(185, 99, 114)',
                        fontSize: 25,
                        italic : true,
                    },
                    is3D: true,
                    colors: ['rgb(1, 66, 104)','rgb(185, 99, 114)'],
                }}
                rootProps={{ 'data-testid': '2' }}
            />

            </>

        );
    }
}


class Strt extends Component{
    constructor(props){
        super(props);
        this.state = {
            topic:"",
            searched:false,
            data:[],
        };
        this.handleChange = this.handleChange.bind(this);
        this.savePost = this.savePost.bind(this);
        this.getBack = this.getBack.bind(this);
    }

    handleChange(e){
        var val = e.target.value;
        this.setState({
            topic:val
        });
    }

    getBack(){
        this.setState({
            topic:"",
            searched:false,
            data:[],
        });
    }

    async savePost()  {
        const topic = this.state.topic;
        let data = await getStats(topic);
        this.setState({searched:true,data:data});
        console.log("data done ...");
        
    }

    render(){
        let disp;
        if(!this.state.searched){
            disp =  <div className="strt">
                        <div id="tt">
                            <h2 id="t1"> Search the desired topic </h2>
                            <h2> to find the general public's opinion </h2>
                        </div>
                        <div className="input-group">
                            <input type="text" placeholder="Topic .." className="form-control" id="topic-bar"  onChange={this.handleChange}/>
                        </div>
                        <button id="gr" onClick={this.savePost}> Get Result </button>
                    </div>;
        }
        else{
            let d = this.state.data[0]
            let t = d.positive + d.negative;
            let p =  d.total > 0 ? "Positive" : "Negative" ;
            let p_arr = d.age_positive;
            let d1 = [['Sex Ratio', 'Number of Blogs'],];
            p_arr.forEach( (x) =>{
                d1.push(['Positive',x]);
            });
            console.log(d1);
            let n_arr = d.age_negative;
            let d2 = [['Sex Ratio', 'Number of Blogs'],];
            n_arr.forEach( (x) =>{
                d2.push(['Negative',x]);
            });

            disp =  <div>
                        <div className="ch">
                            <div className="b1">
                                <button onClick={this.getBack}> <i class="fa fa-arrow-left" aria-hidden="true"></i> </button>
                                <h2> Topic : {this.state.topic} </h2>
                            </div>
                        </div>
                        <div id="b2">
                                <div id="b3"><h4> Total Blogs </h4><h1>{t}</h1></div>
                                <div id="b4"><h4> Overall Sentiment Polarity </h4> <h1>{p}</h1></div>
                        </div>
                        <div id="b5">
                            <Cc  data={{'negative':d.negative,'positive':d.positive}} />
                        </div>
                        <div className="b6">
                            <div id="b7">
                                <Cc1  data ={{'male':d.male_positive,'female':d.positive - d.male_positive}} val={"Positive"} />
                            </div>
                                <Cc1  data={{'male':d.male_negative,'female':d.negative - d.male_negative}} val={"Negative"} />
                            </div>
                            <div className="b6">
                                <div id="b8">
                                    <Cc2  data={d1} val={"Positive"} />
                                </div>
                                <Cc2  data={d2} val={"Negative"} />
                            </div>                       
                        
                    </div>
        }
        return(
            <>
                {disp}
            </>
        );
    }
}



   

const StatsPage = () =>{


    // const fetchData = async () =>{
    //     return await getStats();
    // }
    // let data = fetchData();
    // console.log(data);

    
    return(
        <>
            <Header  header_ref={["Home","Stats","Logout"]} clicked={2}  />
            <div className="Box"></div>
            <Strt />
        </>
    );

}

export default StatsPage;