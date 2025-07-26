const data= [
{
    title:"purse",
    color:"grey",
    price:"learn more",
    brandname:"Gucci",
    category:"bag",
    img:"./min.jpg",
},
{
     title:"handbag",        
    color:"white",  
    price:"learn more",
    brandname:   "Prada",       
    category: "bag",
    img:"./purse.jpg",
},
{
     title:"wallet",      
    color:"brown",  
    price:"learn more",
    brandname:"louis viton",          
    category: "wallets",
    img:"./wallet1.jpg",
},
{
     title:"handbag",      
    color:"purple",          
    price:"learn more",
    brandname:" Dior",     
    category:"handbag",     
    img:"./pink.jpg",
},
{
    title:"bag",      
    color:"purple",          
    price:"learn more",
    brandname:"Prada",     
    category:"handbag",     
    img:'./min.jpg',
},
{
    title:"handbag",      
    color:"yellow",          
    price:"learn more",
    brandname:"Gucci",     
    category:"handbag",     
    img:'./bag1.jpg'
}]

let main=document.getElementById('main')
data.map(function(product){
main.innerHTML+=`<div class="card my-4" style="width: 18rem;">
  <img src=${product.img} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    ${product.color}
    <p class="card-text">${product.brandname}</p>
    <a href="#" class="btn btn-primary"> ${product.price}</a>
  </div>
</div>`})

let container=document.getElementById('container')
function handbag(){
    container.innerHTML=''
 let filterdata=data.filter(function(e){
return e.category=='handbag'
})
filterdata.map(function(product){
container.innerHTML+=`<div class="card my-4" style="width: 18rem;">
  <img src=${product.img} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    ${product.color}
    <p class="card-text">${product.brandname}</p>
    <a href="#" class="btn btn-primary"> ${product.price}</a>
  </div>
</div>`
      
})
} 

let bags=document.getElementById('container')
function wallets(){
    container.innerHTML=''
 let filterdata=data.filter(function(e){
return e.category=='wallets'
})
filterdata.map(function(product){
container.innerHTML+=`<div class="card my-4" style="width: 18rem;">
  <img src=${product.img} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    ${product.color}
    <p class="card-text">${product.brandname}</p>
    <a href="#" class="btn btn-primary"> ${product.price}</a>
  </div>
</div>`
      
})
} 

let purses=document.getElementById('container')
function purse(){
    container.innerHTML=''
 let filterdata=data.filter(function(e){
return e.category=='purse'
})
filterdata.map(function(product){
container.innerHTML+=`<div class="card my-4" style="width: 18rem;">
  <img src=${product.img} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    ${product.color}
    <p class="card-text">${product.brandname}</p>
    <a href="#" class="btn btn-primary"> ${product.price}</a>
  </div>
</div>`
      
})
} 





















