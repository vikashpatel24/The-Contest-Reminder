import React from "react";
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

export default function CodeForces(){

    const [api, setApi] = React.useState([]);
    const [api2, setApi2] = React.useState([]);
    const getUsers = async () => {
        const response = await fetch('https://kontests.net/api/v1/codeforces');
        setApi(await response.json());
        setApi2(await response.json());
        
    }
    function datee(date){
        const m = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec']
        const day = date.slice(8,10);
        const month = m[parseInt(date.slice(5,7))-1]
        return day+" "+month+" "+date.slice(0,4)+ "  " +date.slice(11,16)  + " UTC"
    }
    function secondsToDhms(seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600*24));
        var h = Math.floor(seconds % (3600*24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        
        var dDisplay = d > 0 ? d + (d == 1 ? " day " : " days ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second " : " seconds") : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
        }
    React.useEffect(()=>{
        getUsers();
    }, []);
    // console.log(api)
    return (
        <div className="main-box">
            <div className="present-contest">
                <div className="topp">Ongoing Contests</div>
            {
                api.map((currentElement)=>{
                    if(currentElement.status === 'CODING'){
                            return (
                                <div className="onebox">
                                    <div className="name1">{currentElement.name}</div>
                                    <div className="starttime1">Start Time :  {datee(currentElement.start_time)}</div>
                                    <div className="endtime1">End Time :  {datee(currentElement.end_time)}</div>
                                    <div className="duration">Duration :  {secondsToDhms(currentElement.duration)}</div>
                                    <div className="go1"><a className="go" target="_blank" href={currentElement.url}>Continue</a></div>
                                </div>
                            )
                        }
                    }) 
                }
            </div>
            <div className="future-contest">
                <div className="topp">Upcoming Contests</div>
            {
                    api.map((currentElement)=>{
                        if(currentElement.status === 'BEFORE'){
                            
                            return (
                                <div className="onebox">
                                    <div className="name1">{currentElement.name}</div>
                                    <div className="starttime1">Start Time :  {datee(currentElement.start_time)}</div>
                                    <div className="endtime1">End Time :  {datee(currentElement.end_time)}</div>
                                    <div className="duration">Duration :  {secondsToDhms(currentElement.duration)}</div>
                                    <div className="go1"><a className="go" target="_blank" href={currentElement.url}>Continue</a></div>
                                </div>
                            )
                        }
                    }) 
                }
            </div>
        </div>
    );
}