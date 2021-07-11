
var btn=document.getElementById('btn');


btn.addEventListener('click',(e)=>{
e.preventDefault();    
    var var1=document.getElementById("num1").value;
var var2=document.getElementById("num2").value;
 
                     
document.getElementById("result").value=var1 + var2;
   
                     
});