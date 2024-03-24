let body=document.querySelector("body")
let image=document.createElement("img");
let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let input=document.querySelector("#url").value
    let section=document.querySelector("#qr-container")
    let h1=document.querySelector("h1")
    console.dir(section)
    console.log(input)
    if(input==""){
        alert("Please Enter The URL")
    }else{
        let qr=`https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${input}`
        image.setAttribute("src",qr);
        body.append(image);
        section.style.backgroundColor="pink"
        section.style.boxShadow="6px 6px 6px pink"
        h1.style.color="white"
       
        
        

    }
    
    
})