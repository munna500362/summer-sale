function myfunction(target){
    const productName = document.getElementById("div1");
   const itemName = target.parentNode.childNodes[1].childNodes[7].innerText;
   const li = document.createElement('li');
    li.innerText = itemName;
    productName.appendChild(li)
    
}