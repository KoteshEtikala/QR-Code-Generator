let body=document.querySelector("body")
let image=document.createElement("img");
let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let input=document.querySelector("#url").value
    console.log(input)
    // let image=document.querySelector("#image")
    // console.dir(image)
    if(input==""){
        alert("Please Enter The URL")
    }else{
        let qr=`https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${input}`
        image.setAttribute("src",qr);
        body.append(image);

    }
    
    
})