import React from "react";
import styled from "styled-components";
import Neo4j from './Neo4j';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: calc(10px + 2vmin);
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  margin: 20px;
`;


var Neo4jInstance = new Neo4j();

export default class Queries extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loadingReq1SQL:false,
            loadingReq2SQL:false,
            loadingReq3SQL:false,
            loadingReq1NOSQL:false,
            loadingReq2NOSQL:false,
            loadingReq3NOSQL:false,
            timeReq1SQL:false,
            timeReq2SQL:false,
            timeReq3SQL:false,
            timeReq1NOSQL:false,
            timeReq2OSQL:false,
            timeReq3NOSQL:false,};
    }

    async Req1SQL(i){
        
        this.setState({...this.state,loadingReq1SQL:true});
        var t1 = new Date();
        //await Neo4jInstance.getInfluenceurProducts(i);
        var t2 = new Date();
        var dif = t1.getTime() - t2.getTime();
        var Seconds_from_T1_to_T2 = dif / 1000;
        var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

        this.setState({...this.state,loadingReq1SQL:false,timeReq1SQL:Seconds_Between_Dates});
    }

    async Req2SQL(i){
        
        return
    }

    async Req3SQL(i){
        
        return
    }

    async Req1NOSQL(i){
        
        this.setState({...this.state,loadingReq1NOSQL:true});
        var t1 = new Date();
        await Neo4jInstance.getInfluenceurProducts(i);
        var t2 = new Date();
        var dif = t1.getTime() - t2.getTime();
        var Seconds_from_T1_to_T2 = dif / 1000;
        var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

        this.setState({...this.state,loadingReq1NOSQL:false,timeReq1NOSQL:Seconds_Between_Dates});
    }
    async Req2NOSQL(i){
        
        return
    }

    async Req3NOSQL(i){
        
        return
    }


    render() {
      return (
      <div>
        <p> SQL<br></br>
        
        <div style={{display:"flex",flexDirection:"column"}}>
            <Button onClick={()=>this.Req1SQL(986)}>Requête 1</Button>
            <a>{this.state.loadingReq1SQL && "Chargement"}</a>
            <a>{this.state.timeReq1SQL && "Temps de la requête " + this.state.timeReq1SQL + " s"}</a>   
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
            <Button onClick={()=>this.Req2SQL(986)}>Requête 2</Button>
            <a>{this.state.loadingReq2SQL && "Chargement"}</a>
            <a>{this.state.timeReq2SQL && "Temps de la requête " + this.state.timeReq2SQL + " s"}</a>   
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
            <Button onClick={()=>this.Req3SQL(986)}>Requête 3</Button>
            <a>{this.state.loadingReq3SQL && "Chargement"}</a>
            <a>{this.state.timeReq3SQL && "Temps de la requête " + this.state.timeReq3SQL + " s"}</a>   
        </div>
        
        
        </p>
        <br></br>
        <br></br>
        <p> NoSQL<br></br> 

        <div style={{display:"flex",flexDirection:"column"}}>
            <Button onClick={()=>this.Req1NOSQL(986)}>Requête 1</Button>
            <a>{this.state.loadingReq1NOSQL && "Chargement"}</a>
            <a>{this.state.timeReq1NOSQL && "Temps de la requête " + this.state.timeReq1NOSQL + " s"}</a>   
        </div>

        <div style={{display:"flex",flexDirection:"column"}}>
            <Button onClick={()=>this.Req2NOSQL(986)}>Requête 2</Button>
            <a>{this.state.loadingReq2NOSQL && "Chargement"}</a>
            <a>{this.state.timeReq2NOSQL && "Temps de la requête " + this.state.timeReq2NOSQL + " s"}</a>   
        </div>

        <div style={{display:"flex",flexDirection:"column"}}>
            <Button onClick={()=>this.Req3NOSQL(986)}>Requête 3</Button>
            <a>{this.state.loadingReq2NOSQL && "Chargement"}</a>
            <a>{this.state.timeReq2NOSQL && "Temps de la requête " + this.state.timeReq2NOSQL + " s"}</a>   
        </div>

 
        </p>
      </div>
    

    );
  }

}