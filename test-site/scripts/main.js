let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/OIP.jpg") {
    myImage.setAttribute("src", "images/OIP-C.jpg");
  } else {
    myImage.setAttribute("src", "images/OIP.jpg");
  }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let missName;

function setmissName() {
  let missName = prompt("你想起了？");          
  localStorage.setItem("name", missName);
  if(missName!==null)
    myHeading.textContent = "落霞诶" + missName;
}

  myButton.onclick = function () {
    setmissName();
  }

 
  
  
  
  
  
