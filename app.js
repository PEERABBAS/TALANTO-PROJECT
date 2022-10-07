

let ser=document.getElementById("blk");
//  let yyy=a.querySelectorAll("h4");

function keyfun(){

let a=document.querySelectorAll("#f1");

for(i=0;i<a.length;i++){
  // let yyy=a.getElementsByTagName("h4");
let b=ser.value.toUpperCase();

if(a[i].getElementsByTagName("h4")[0].innerHTML.toUpperCase().indexOf(b)!=-1){

a[i].style.display="block";


}
else{
  a[i].style.display="none";
}
}

}

ser.addEventListener("keyup",keyfun);














