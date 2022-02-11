import React from "react";
import { BetData } from "../models/Spreads";
import "./SpreadList.css"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'



export interface Props{
    spreads: BetData[]
    
}


export const SpreadList = ({spreads}: Props) =>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        
        <div className="Container">
            <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={7000}
            removeArrowOnDeviceType={["mobile"]}>

            
            {spreads.map((spreads,i)=>
            <Card>
                <Card.Header>
                    NBA Spreads
                </Card.Header>
                    
                <Card.Body>
                    <Card.Title>
                        {spreads.teams[1]} VS  {spreads.teams[0]}
                    </Card.Title>
                <Card.Text>@ {spreads.home_team}</Card.Text>
                <Card.Text className="text-muted">{spreads.sites[i].site_nice}</Card.Text>
                <Card.Text>{spreads.sites[i].odds.spreads.odds[0]} Odds {spreads.sites[i].odds.spreads.odds[1]}</Card.Text>
                <Card.Text>{spreads.sites[i].odds.spreads.points[0]} Points {spreads.sites[i].odds.spreads.points[1]}</Card.Text>
                
                </Card.Body>
                <Card.Footer className="text-muted">{spreads.commence_time}</Card.Footer>

                
            </Card>

            )}

            </Carousel>
            </div>
            




        // <div className="SpreadList">
        //     <h1> Betting Spreads </h1>
        //         <div className="container">
        //             {spreads.map((spreads,i)=>
        //             <div className="card">
                        
        //                 <div className="row1">
        //                     <p>{spreads.home_team}</p>
        //                     <p>-</p>
        //                     <p>{spreads.teams[0]}</p>    
        //                 </div>

        //                 <div className="row2">
        //                     <p>{spreads.sites[i].site_nice}</p>
        //                 </div>
        //                 <div className="row3">
        //                     <p>{spreads.sites[i].odds.spreads.odds[1]}</p>
        //                     <p>Odds</p>
        //                     <p>{spreads.sites[i].odds.spreads.odds[0]}</p>
        //                 </div>
        //                 <div className="row4">
        //                     <p>{spreads.sites[i].odds.spreads.points[1]}</p>
        //                     <p>Points</p>
        //                     <p>{spreads.sites[i].odds.spreads.points[0]}</p>
        //                 </div>
                        
                        
        //             </div>
        //             )}
        //         </div>




    //         {/* <Table hover variant ="dark">

    //             <thead>
    //                 <h1>Bettings Odds & Spreads </h1>
    //                 <tr>
    //                     <th>Time</th>
    //                     <th>Home Team</th>
    //                     <th>Away Team</th>
    //                     <th> Site </th>
    //                     <th> Odds </th>
    //                     <th> Points </th>
    //                 </tr>
    //             </thead>


    //             <tbody>
    //                 {spreads.map((spreads,i)=>

    //                     <tr>
    //                         <td>{spreads.commence_time}</td>
    //                         <td>{spreads.home_team}</td>
    //                         <td>{spreads.teams[0]}</td>
    //                         <td>{spreads.sites[i].site_nice}</td>
    //                         <td>{spreads.sites[i].odds.spreads.odds[1]} {spreads.sites[i].odds.spreads.odds[0]}</td>
    //                         <td>{spreads.sites[i].odds.spreads.points[1]} {spreads.sites[i].odds.spreads.points[0]}</td>
    //                     </tr>
                    
    //                 )}
    //             </tbody>

    //         </Table> */}
    //     </div>
     )
}