var neo4j = require('neo4j-driver')


  var session;



export default class Neo4j{

    constructor(){
        this.driver = neo4j.driver(
            'bolt://localhost:7687',
            neo4j.auth.basic('neo4j', 'BDD')
          );
          this.res = null;
    }
   

    async getInfluenceurProducts(influenceurId){
      session = this.driver.session()
      var res ="";
      await session
      .run('match (i:Utilisateur {id:$nameParam})<-[:suit]-(:Utilisateur)-[r:achete]->(p:Produit) return p.id as product_id, p.nom as nom_produit, p.description as description_produit,  count(r) as nb_achats ORDER BY nb_achats DESC LIMIT 10', {
        nameParam: influenceurId
      })
      .then(result => {
        result.records.forEach(record => {
          console.log(record)
        })
    
      })
      .catch(error => {
        console.log(error)
      })
      .then(() => session.close())            

      console.log("LE RES " )
      console.log(res)
      return res;

    }

}