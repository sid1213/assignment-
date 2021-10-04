  let i=1,j=1;
function search(){
     i++;
     if(i%2==0)
     {
         document.getElementById("SEARCH").style.display="block";
     }
     else{
        document.getElementById("SEARCH").style.display="none";
     }
}
function hide_show(){
  j++;
  if(j%2==0)
  {
      document.getElementById("main-menu").style.display="block";
      document.getElementById("icon-change").className="fa fa-times";
      document.getElementById("close").innerHTML="CLOSE";
  }
  else{
     document.getElementById("main-menu").style.display="none";
     document.getElementById("icon-change").className="fa fa-bars";
     document.getElementById("close").innerHTML="MENU";
  }
}
function show(x){
 
  let a = document.getElementById("dropdown-"+x);
  let b = window.getComputedStyle(a).display;
  let arr=[1,2,3,4,5,6,7];
  var current_ele=arr.indexOf(x);
  arr.splice(current_ele,1);
   if(b=="none"){  
     a.style.display="block";
     document.getElementById("angles-"+x).className="fa fa-angle-up float-right";
    for (let index =0; index < arr.length; index++) {
    document.getElementById("dropdown-"+arr[index]).style.display="none";
    document.getElementById("angles-"+arr[index]).className="fa fa-angle-down  float-right";
   }
   } 
  else
   {
      a.style.display="none";
      document.getElementById("angles-"+x).className="fa fa-angle-down  float-right";
   }

   }
 document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href="/checkout/html/checkout.html";  
  });