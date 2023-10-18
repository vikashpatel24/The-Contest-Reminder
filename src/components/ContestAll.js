import React from "react";
import ReactDOM from 'react-dom/client';

export default function ContestAll(){

    const [api, setApi] = React.useState([]);
    const [api2, setApi2] = React.useState([]);
    const getUsers = async () => {
        const response = await fetch('https://kontests.net/api/v1/all');
        setApi(await response.json());
        setApi2(await response.json());
        
    }
    function datee(date){
        const m = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec']
        const day = date.slice(8,10);
        const month = m[parseInt(date.slice(5,7))-1]
        return day+" "+month+" "+date.slice(0,4)+ "  " +date.slice(11,19)  + " UTC"
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
        <div className="contest-box">

        <div className="lb">
        <div className="running"> Ongoing Contests</div>
        <div className="tab">
        <table>
                <tr className="color">
                    <th className="namee">Name</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Duration</th>
                    <th>Website</th>
                
                </tr>
                {
                    api.map((currentElement)=>{
                        if(currentElement.status === 'CODING'){
                            
                            return (
                                 
                                        
                                        <tr className="hover-tr">

                                        <td><a target="_blank" href={currentElement.url}><span className="chotu">{currentElement.site}</span>{currentElement.name}</a></td>
                                        <td>{datee(currentElement.start_time)}</td>
                                        <td>{datee(currentElement.end_time)}</td>
                                        <td>{secondsToDhms(currentElement.duration)}</td>
                                        <td>{currentElement.site}</td>
                                        </tr>
                                    
                            )
                        }
                    }) 
                }
            </table>
            </div>
        </div>
        <div className="rb">
        <div className="future">Upcoming Contests</div>
        <div className="tab">
        <tbody>
                <tr className="color">
                    <th className="namee">Name</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Duration</th>
                    <th>Website</th>
                    
                </tr>
                {
                    api.map((currentElement)=>{
                        if(currentElement.status === 'BEFORE'){
                            
                            return (
                                 
                                        
                                        <tr className="hover-tr">

                                        <td><a target="_blank" href={currentElement.url}><span className="chotu">{currentElement.site}</span>{currentElement.name}</a></td>
                                        <td>{datee(currentElement.start_time)}</td>
                                        <td>{datee(currentElement.end_time)}</td>
                                        <td>{secondsToDhms(currentElement.duration)}</td>
                                        <td>{currentElement.site}</td>
                                        </tr>
                                    
                            )
                        }
                    }) 
                }
            </tbody>
            </div>
        </div>
        </div>
    );
}