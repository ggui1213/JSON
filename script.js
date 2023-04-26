AOS.init();

let output = document.getElementById("content");

let Data = [{
    "description":"My fragment 1",
    "image":"1.png",
    "color":"red",
},{
    "description":"My fragment 2",
    "image":"2.png",
    "color":"green",
},{
    "description":"My fragment 3",
    "image":"3.png",
    "color":"blue",
},{
    "description":"My fragment 4",
    "image":"4.png",
    "color":"yellow",
},{
    "description":"My fragment 5",
    "image":"5.png",
    "color":"black",
},{
    "description":"My fragment 6",
    "image":"6.png",
    "color":"violet",
},{
    "description":"My fragment 7",
    "image":"7.png",
    "color":"purple",
},{
    "description":"My fragment 8",
    "image":"8.png",
    "color":"darkbeige",
},{
    "description":"My fragment 9",
    "image":"9.png",
    "color":"darkgreen",
},{
    "description":"I am one",
    "image":"1-1.png",
    "color":"grey",
},{
    "description":"I am many",
    "image":"1-2.png",
    "color":"khaki",
},{
    "description":"Return to Reality",
    "image":"1-3.png",
    "color":"gold",
}];

for (let i = 0; i<Data.length; i++) {
    createPage(Data[i]);
}

function createPage(incomingJSON){
    let newContent = document.createElement("div");
    newContent.setAttribute("data-aos", "fade-up");

    let newImage = document.createElement("img");
    newImage.src = incomingJSON["image"];
    newContent.appendChild(newImage);

    let description = document.createElement("p");
    description.innerText = incomingJSON["description"];
    let color = incomingJSON["color"];
    description.style.color = color;
    newContent.appendChild(description);

    output.appendChild(newContent);
    
}