const BASE_URL = "https://rickandmortyapi.com/api"

const buttonContent = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.15" fill-rule="evenodd" clip-rule="evenodd" d="M8 10V20H17.3604C18.3138 20 19.1346 19.3271 19.3216 18.3922L20.5216 12.3922C20.7691 11.1547 19.8225 10 18.5604 10H14L16.4258 6.36138C17.1929 5.2106 16.5885 3.64714 15.2467 3.31169L15.1992 3.2998C14.4642 3.11607 13.6886 3.36333 13.1956 3.9385L8 10Z" fill="#000000"/>
<path d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>like`

const prevButton = document.querySelector("#prev")
const nextButton = document.querySelector("#next")
let nextPageUrl
let prevPageUrl

const fetchData = () => {
    fetch(`${BASE_URL}/character`)
    .then(res => (res.json()))
    .then(data => {
        nextPageUrl = data.info.next
        prevPageUrl = data.info.prev
        renderData(data.results)})
}
const newFetchData = (url) => {
    fetch(url)
    .then(res => {return res.json()})
    .then(data => {
        nextPageUrl = data.info.next
        prevPageUrl = data.info.prev
        renderData(data.results)
    })
}
prevButton.addEventListener("click",()=> 
    {newFetchData(prevPageUrl)})
nextButton.addEventListener("click",()=> 
    {newFetchData(nextPageUrl)})

const renderData = arr => {
    document.querySelector(".container").innerHTML = ""
    arr.forEach((charObj) => {
        const div = document.createElement("div")
        div.classList.add("card")
        const img = document.createElement("img")
        img.setAttribute("src", charObj.image)
        img.addEventListener("click",() => {
            localStorage.setItem("charDetails",JSON.stringify(charObj))

            window.open("charInfo.html")
        })
        div.append(img)
        const h2 = document.createElement("h2")
        h2.innerText = charObj.name
        div.append(h2)
        const button = document.createElement("button")
        clickedIDs = JSON.parse(localStorage.getItem("clickedIDs")) || []
        if(clickedIDs.includes(charObj.id)){
            button.classList.add("green-background")
        }
        button.innerHTML = buttonContent
        button.addEventListener("click",event => {
            event.stopPropagation()
            event.preventDefault()
            toggleColor(event.target);
            clickedIDs = JSON.parse(localStorage.getItem("clickedIDs")) || []
            // da li id NIJE u nizu clickedIDs
            if(clickedIDs.indexOf(charObj.id) === -1){
                clickedIDs.push(charObj.id)
            }else{
                // clickedIDs = clickedIDs.filter((value)=> { return value !== charObj.id})
                const findIndex = clickedIDs.indexOf(charObj.id)
                clickedIDs.splice(findIndex, 1)
            }
            
            // const set = new Set(...clickedIDs)
            // const arr = new Array(...set)
            localStorage.setItem("clickedIDs", JSON.stringify(clickedIDs))
        })

        // button.classList.add("green-background")
        div.append(button)
        document.querySelector(".container").append(div)
    })
}

fetchData()

document.addEventListener("keydown",event=> {
    console.log(event);
    
})

const toggleColor = htmlElement => {
    htmlElement.classList.toggle("green-background")
}

// const niz = [1,2,3,4,5,6]

// console.log(niz.filter((num)=>{return num % 2 !== 0}))