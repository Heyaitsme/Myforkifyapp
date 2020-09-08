start();
let i=0;
let s="";
let pp =0;
let cat="";
let strg="";
let rec="";
function start(){

      let p = "pizza";
      const api = `https://forkify-api.herokuapp.com/api/search?q=${p} `;
     
      fetch(api)
      .then(response =>{
          return response.json();
      })
          .then(data =>{
       console.log(data);  
        
        const api2 = `https://forkify-api.herokuapp.com/api/get?rId=47746`;
      
        fetch(api2)
      .then(response2 =>{
          return response2.json();
      })
          .then(data2 =>{
              //console.log(data2);
       
        
        console.log(data2);

       
         
       });


  


    })
}
function dis(){
    document.querySelector(".searchBox").style.opacity="0.3";
    
     var x = document.getElementById("mysrch");
    
    
    var currentVal = x.value;
    s=currentVal;
     const api2 = `https://forkify-api.herokuapp.com/api/search?q=${currentVal}`;
  
        fetch(api2)
      .then(response2 =>{
          return response2.json();
      })
          .then(data2 =>{
              //console.log(data2);
         for(pp=0;pp<8;pp++)
             {
                 document.querySelector("#img"+(pp+1)).textContent=data2.recipes[pp].title;
                 var str=data2.recipes[pp].image_url;
                 console.log(str);
                 document.querySelector("#img"+(pp+1)).style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("+str+")";
                // console.log(data2.recipes[pp].image_url);
             }
    
        
        console.log(data2);

       
         
       });
    

   
}
function loadrec(r){
    
    const api4 = `https://forkify-api.herokuapp.com/api/search?q=${s} `;
     
      fetch(api4)
      .then(response =>{
          return response.json();
      })
          .then(data3 =>{
          strg=data3.recipes[r-1].recipe_id;
          displayrec(strg);
          
          
      // console.log(strg);  
    
    
})
                }
function displayrec(rr){
    const api5 = `https://forkify-api.herokuapp.com/api/get?rId=${rr}`;
    var xx="";
     var str2="";
      fetch(api5)
      .then(response =>{
          return response.json();
      })
          .then(data4 =>{
           
         str2= data4.recipe.image_url;
          
           document.querySelector("#recpic").style.backgroundImage = "url("+str2+")";
          var showp="";
          for(i2=0;i2<data4.recipe.ingredients.length;i2++)
              {
                 var nsg=document.createElement("div");
                var br = document.createElement("br");

                  nsg.innerHTML=(i2+1)+" : "+data4.recipe.ingredients[i2];
                  nsg.append(br);
                  document.querySelector("#show").append(nsg);
                 // showp=showp+data4.recipe.ingredients[i2]+"\r\n";
              }
         // document.querySelector("#show").textContent=showp;
          console.log(showp);
          document.querySelector(".rank4").textContent="DISH RANK : " +data4.recipe.social_rank;
          document.querySelector(".rank2").textContent="KNOW MORE : "+data4.recipe.publisher_url;
          document.querySelector(".rank3").textContent=" TITLE - "+data4.recipe.title;
           
        
    
})
    
}
function op(st)
{
     
     const api2 = `https://forkify-api.herokuapp.com/api/search?q=${cat}`;
      
        fetch(api2)
      .then(response2 =>{
          return response2.json();
      })
          .then(data2 =>{
              //console.log(data2);
        
           console.log(st);
            
        
        //console.log(data2);

       
         
       });
  
}