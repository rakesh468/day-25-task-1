document.body.innerHTML=`
<section>
<div class="title">
<p class="name">FinalSpace</p>
<div class="row">
</div>
</section>`
async function finalspace(){
    const data=await fetch("https://finalspaceapi.com/api/v0/character/",{metod:"GET"});
    const users=await data.json();
    const container=document.querySelector(".row");
    users.forEach((user)=>{
        container.innerHTML+=`
        <div class="col-xs-12 col-sm-6 col-md-4 col-xl-3">
        <div class="pic">
        <img src="${user.img_url}" class="edit"/>
      
        <div class="details">
        <h4><b>Name:</b> ${user.name}</h4>
        <p><b>Species:</b> ${user.species}</p>
        <p><b>Gender:</b> ${user.gender}</p>
        <p><b>Hair:</b> ${user.hair}</p>
        <p><b>Origin:</b> ${user.origin}</p>
        <p><b>Alias:</b> ${user.alias}</p>
        </div>       
       </div>
       </div>
        `
    
    })
console.log(users);
}
finalspace();