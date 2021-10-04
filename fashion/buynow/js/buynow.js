var cvalue=document.getElementById("color");
var img_item=document.getElementById("img-container");
function color(x){
    let arr=[0,1,2];
    arr.splice(x,1);
    console.log(arr);
    document.getElementById(`c${x}`).style.boxShadow="5px 5px 2px gray";
    arr.forEach(function(value){
        document.getElementById(`c${value}`).style.boxShadow="none"
    });
    if(x===0)
    {
        cvalue.innerText="red"
        img_item.style.transform="translateX(0%)"
    }
    if(x===1)
    {
        cvalue.innerText="pink"
        img_item.style.transform="translateX(-33.3%)"
    }
    if(x===2)
    {
        cvalue.innerText="black"
        img_item.style.transform="translateX(-66.6%)"
    }
}
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href="/cart/html/cart.html";  
  });