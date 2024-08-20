let total = 0;
function myfunction(target){
    const productName = document.getElementById("div1");
   const itemName = target.parentNode.childNodes[1].childNodes[7].innerText;
   const li = document.createElement('li');
    li.innerText = itemName;
    productName.appendChild(li);

    // const price = target.parentNode.childNodes[1].childNodes[9].innerText.split(' ')[0];
    const price = target.parentNode.childNodes[1].childNodes[9].innerText.split(' ')[0];

    // console.log(price)
    total = parseFloat(total)+parseFloat(price);
    // console.log(total)
    //  totalPrice = parseFloat(price) + parseFloat(total);
   const TotalPrice =document.getElementById("totalvalue").innerText=total; 
//    if(TotalPrice>=200){

//    }
 
   
}
function myButton(){
    const basicBtn = document.getElementById("basic-btn");
    if(TotalPrice>=200){
        basicBtn.disabled = false;
    }
    else{
        basicBtn.disabled = true;
    }
    console.log("hellow")
}

