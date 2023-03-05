let url="https://www.superheroapi.com/api.php/1531398664029152/"
let img=document.getElementById("subDiv");
let power=document.getElementById("imgDiv");
let name=document.getElementById("name");
let show=document.getElementById("onoff");
let buttonele=document.getElementById("run2");
let randNum=()=>{
  let Num=Math.floor(Math.random()*730)
  console.log(Num+1)
  return(Num+1)
  
}
htmlshow=(object)=>{
  console.log(object)
    img.innerHTML=`<img src=${(object.image).url} height=200 width=200 />`
  img.classList.add("margin");

  setTimeout(function(){
      show.style.display="block";
      name.innerText=object.name
  name.classList.add("margin2");
  power.innerHTML=`<h1>Combat : ${(object.powerstats).combat}</h1>
  <h1>power: ${(object.powerstats).power}</h1>
  <h1>speed : ${(object.powerstats).speed}</h1>
  <h1>strength : ${(object.powerstats).strength}</h1>
  <h1>intelligence : ${(object.powerstats).intelligence}</h1>
  `
  },500)

}
run=()=>{
fetch(url+randNum())
.then(Response=>Response.json())
.then(obb=>{
  console.log(obb)
  const object=obb;
  htmlshow(object)
})}
run2=()=>{
  console.log("hii")
fetch(`${url}search/${buttonele.value}`)
.then(Response=>Response.json())
.then(obb=>{
  const object=obb;
  console.log(object)
  htmlshow(object.results[0])
})}