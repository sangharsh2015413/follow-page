var istatus=document.querySelector("h5");
var btn=document.querySelector("button");
var check=0;
btn.addEventListener("click",function(){
    if(check==0){
        istatus.innerHTML="Friend";
        istatus.style.color="green";
        btn.innerHTML="Following";
        btn.style.backgroundColor="green";
        check=1;
    }
    else{
        istatus.innerHTML="Stranger";
        istatus.style.color="red";
        btn.innerHTML="Follow";
        btn.style.backgroundColor="rgb(90, 75, 218)";
        check=0;
    }
})