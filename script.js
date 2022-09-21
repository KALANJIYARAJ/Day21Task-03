
async function foo(){
    try{
   
    let url=`https://dog.ceo/api/breeds/image/random`;
    let dog = await fetch(url);
    let dog1=await dog.json();
    console.log(dog1);

    var container=document.createElement("div");
    container.setAttribute("class","container");

    var row=document.createElement("div");
    row.setAttribute("class","row");

    row.innerHTML=`<div class="col-12">
      <img src="${dog1.message}" class="rounded" alt="...">
    </div>`;

   container.append(row);  
   document.body.append(container);
}
catch(error){
    console.log(error);
}

}

foo();