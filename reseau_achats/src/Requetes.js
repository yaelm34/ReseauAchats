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
var neo4j = require('neo4j-driver')


export default class Queries extends React.Component {

    constructor(props){
        super(props);

        this.driver = neo4j.driver(
            'bolt://localhost:7687',
            neo4j.auth.basic('neo4j', 'BDD')
          );


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
            timeReq3NOSQL:false,

            resultReq1NOSQL:null,
        
        };

            this.req1ID = "";
            this.req2ID = "";
            this.req2ProductId = "";
            this.req3ID="";
    }

 

    async Req1SQL(i){
        
        this.setState({...this.state,loadingReq1SQL:true});
        var t1 = new Date();
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

    async Req1NOSQL(){

        if(this.req1ID==""){
            alert("Veuillez saisir un id influenceur pour lancer la requête");
            return;
        }
        this.setState({...this.state,loadingReq1NOSQL:true});
        var session = this.driver.session()
        var t1 = new Date();
        await session
        .run('match (i:Utilisateur {id:$nameParam})<-[:suit]-(:Utilisateur)-[r:achete]->(p:Produit) return p.id as product_id, p.nom as nom_produit, p.description as description_produit,  count(r) as nb_achats ORDER BY nb_achats DESC LIMIT 100', {
          nameParam:  parseInt(this.req1ID)
        })
        .then(result => {
            var res =[];
            
            result.records.forEach(record => {
                console.log(record)
                var obj;
                obj={id:record._fields[0],nom:record._fields[1], description:record._fields[2], nbAchats:record._fields[3]};
                res.push(obj);
               // res+= "ID:" +  record._fields[0] + " Nom: " + record._fields[1] + "\n\n" ; 
            })

          this.setState({...this.state,resultReq1NOSQL:result.records, resultReq1NOSQL:res})
      
        })
        .catch(error => {
          console.log(error)
        })
        .then(() => session.close())    
      
        
        
       // var res = await Neo4jInstance.getInfluenceurProducts(parseInt(986));
        var t2 = new Date();
        var dif = t1.getTime() - t2.getTime();
        var Seconds_from_T1_to_T2 = dif / 1000;
        var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

        var res = "";

        

        
        this.setState({...this.state,loadingReq1NOSQL:false,timeReq1NOSQL:Seconds_Between_Dates});
    }
    async Req2NOSQL(){
        
        
        if(this.req2ID==""){
            alert("Veuillez saisir un id influenceur pour lancer la requête");
            return;
        }

        if(this.req2ProductId==""){
            alert("Veuillez saisir un id de produit pour pour lancer la requête");
            return;
        }
        this.setState({...this.state,loadingReq2NOSQL:true});
        var session = this.driver.session()
        var t1 = new Date();
        await session
        .run('match (i:Utilisateur {id:$nameParam})<-[:suit]-(:Utilisateur)-[r:achete]->(p:Produit {id:$idProduit}) return p.id as product_id, p.nom as nom_produit, p.description as description_produit,  count(r) as nb_achats ORDER BY nb_achats DESC LIMIT 100', {
          nameParam:  parseInt(this.req2ID),
          idProduit: parseInt(this.req2ProductId)
        })
        .then(result => {
            var res =[];
            
            result.records.forEach(record => {
                console.log(record)
                var obj;
                obj={id:record._fields[0],nom:record._fields[1], description:record._fields[2], nbAchats:record._fields[3]};
                res.push(obj);
               // res+= "ID:" +  record._fields[0] + " Nom: " + record._fields[1] + "\n\n" ; 
            })

          this.setState({...this.state,resultReq2NOSQL:result.records, resultReq2NOSQL:res})
      
        })
        .catch(error => {
          console.log(error)
        })
        .then(() => session.close())    
      
        
        
       // var res = await Neo4jInstance.getInfluenceurProducts(parseInt(986));
        var t2 = new Date();
        var dif = t1.getTime() - t2.getTime();
        var Seconds_from_T1_to_T2 = dif / 1000;
        var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

        var res = "";
        
        this.setState({...this.state,loadingReq2NOSQL:false,timeReq2NOSQL:Seconds_Between_Dates});
    }



    async Req3NOSQL(){
        
        if(this.req3ID==""){
            alert("Veuillez saisir un id influenceur pour lancer la requête");
            return;
        }

        if(this.req3ProductId==""){
            alert("Veuillez saisir un id de produit pour pour lancer la requête");
            return;
        }
        this.setState({...this.state,loadingReq3NOSQL:true});
        var session = this.driver.session()
        var t1 = new Date();
        await session
        .run('match (:Produit {id:$nameParam})<--(:Utilisateur)-[:suit]->(p:Utilisateur) return p.id as user_id, count(p) as nb_product', {
          nameParam:  parseInt(this.req3ID),
        })
        .then(result => {
            var res =[];
            
            result.records.forEach(record => {
                console.log(record)
                var obj;
                obj={id:record._fields[0],nom:record._fields[1], description:record._fields[2], nbAchats:record._fields[3]};
                res.push(obj);
               // res+= "ID:" +  record._fields[0] + " Nom: " + record._fields[1] + "\n\n" ; 
            })

          this.setState({...this.state,resultReq3NOSQL:result.records, resultReq3NOSQL:res})
      
        })
        .catch(error => {
          console.log(error)
        })
        .then(() => session.close())    
      
        
        
       // var res = await Neo4jInstance.getInfluenceurProducts(parseInt(986));
        var t2 = new Date();
        var dif = t1.getTime() - t2.getTime();
        var Seconds_from_T1_to_T2 = dif / 1000;
        var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

        var res = "";
        
        this.setState({...this.state,loadingReq3NOSQL:false,timeReq3NOSQL:Seconds_Between_Dates});
    }
    

    updateReq1id(val){
        this.req1ID =val;
    }

    updateReq2id(val){
        this.req2ID =val;   
    }

    updateReq3id(val){
        this.req3ID =val;
    }

    updateReq2Productid(val){
        this.req2ProductId=val;
    }


    render() {
      return (
      <div>
        <h1> SQL</h1>
        
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
        
        
     
        <br></br>
        <br></br>
        <h1> NoSQL</h1>

        <div style={{display:"flex",flexDirection:"column",margin:"60px"}}>
            <a>Requête 1: liste des produits les plus commandés par les followers d'un individu (NIVEAU 1)</a>
            <input  onChange={v=>this.updateReq1id(v.target.value)} placeholder="id de l'individu (ex:986)"></input>
            <Button onClick={()=>this.Req1NOSQL()}>Lancer la requête 1</Button>
            <a>{this.state.loadingReq1NOSQL && "Chargement"}</a>
            <a>{this.state.timeReq1NOSQL && <h2>{"Temps de la requête " + this.state.timeReq1NOSQL + " s"}</h2>}</a> 

           {(this.state.resultReq1NOSQL && !this.state.loadingReq1NOSQL) && "Voici les articles achetés par les folllowers de cet individu:"}
           {this.state.resultReq1NOSQL && 
             
               this.state.resultReq1NOSQL.map((article, i) => (
                <a key={i}>{"ID:"+ article.id + " " + article.nom +  " Nb de commandes:" + article.nbAchats}</a>
              ))
              
            }
           
        </div>

        <div style={{display:"flex",flexDirection:"column",margin:"60px"}}>
            <a>Requête 2: commandes pour un individu et un produit donnés (NIVEAU )</a>
            <input  onChange={v=>this.updateReq2id(v.target.value)} placeholder="id de l'individu (ex:986)"></input>
            <input  onChange={v=>this.updateReq2Productid(v.target.value)} placeholder="id du produit (ex:56)"></input>
            <Button onClick={()=>this.Req2NOSQL()}>Lancer la requête 2</Button>
            <a>{this.state.loadingReq2NOSQL && "Chargement"}</a>
            <h2>{this.state.timeReq2NOSQL && "Temps de la requête " + this.state.timeReq2NOSQL + " s"}</h2>   

            {(this.state.resultReq2NOSQL && !this.state.loadingReq2NOSQL) && "Voici les commandes faites par les folllowers de cet individu pour ce produit:"}
            {this.state.resultReq2NOSQL && 
             
               this.state.resultReq2NOSQL.map((article, i) => (
                <a key={i}>{"ID:"+ article.id + " " + article.nom +  " Nb de commandes:" + article.nbAchats}</a>
              ))
              
            }
           
        </div>

        <div style={{display:"flex",flexDirection:"column"}}>
            <a>Requête 3: recherche de produit viral</a>
            <input  onChange={v=>this.updateReq3id(v.target.value)} placeholder="id du produit(ex:56)"></input>

            <Button onClick={()=>this.Req3NOSQL()}>Requête 3</Button>
            <a>{this.state.loadingReq3NOSQL && "Chargement"}</a>
            <h2>{this.state.timeReq3NOSQL && "Temps de la requête " + this.state.timeReq3NOSQL + " s"}</h2> 
            {(this.state.resultReq3NOSQL && !this.state.loadingReq3NOSQL) && "Voici les commandes faites par les folllowers de cet individu pour ce produit:"}
            {this.state.resultReq3NOSQL && 
             
               this.state.resultReq3NOSQL.map((article, i) => (
                <a key={i}>{"ID:"+ article.id + " " + article.nom +  " Nb de commandes:" + article.nbAchats}</a>
              ))
              
            }


        </div>


      </div>
    

    );
  }

}