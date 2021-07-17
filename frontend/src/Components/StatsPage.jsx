import React from "react";
import Header from './Header';
import {getStats} from '../service/api.js';



const StatsPage = () =>{

    const fetchData = async () =>{
        return await getStats();
    }
    let data = fetchData();
    console.log(data);

    return(
        <>
            <Header  header_ref={["Home","Profile","Stats","Search","Logout"]} clicked={2}  />
        </>
    );

}

export default StatsPage;