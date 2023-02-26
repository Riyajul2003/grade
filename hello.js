function calculate(){
 var a=parseInt(document.getElementById('bo1').value);
 var b=parseInt (document.getElementById('bo2').value);
 var c=parseInt(document.getElementById('bo3').value);
 var d=parseInt(document.getElementById('bo4').value);
if (a>100 || b>100 || c>100 || d>100){
    alert("Enter tha value of under 100");
}
else{
    var sum=a+b+c+d;
    document.getElementById("sum").innerHTML=sum;
    var per=sum/400*100;
    document.getElementById("per").innerHTML=per;
    if(a>35 && b>35 && c>35 && d>35){
    document.getElementById("pass").innerHTML="<span style='color:green'><b>pass</b></span>";
    }else{
        document.getElementById("pass").innerHTML=" <span style='color:red'><b>fail</b></span>";
    }
    if(per>=90){
        document.getElementById("gra").innerText="A+"
    }
     else if(per>=80){
        document.getElementById("gra").innerText="A"
    }
    else if(per>=65){
        document.getElementById("gra").innerText="B+"
    }
    else if(per>=55){
        document.getElementById("gra").innerText="B"
    }
    else if(per>=45){
        document.getElementById("gra").innerText="C+"
    }
    else if(per>=40){
        document.getElementById("gra").innerText="C"
    }
    else{
        document.getElementById("gra").innerText="F"
    }
}


 }