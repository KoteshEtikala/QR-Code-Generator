let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let input=document.querySelector("#url").value
    console.log(input)
    let qr=`https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${input}`
    let image=document.querySelector("#image")
    // console.dir(image)
    image.src=qr
    
})