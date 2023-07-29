var count = 0;


function add() {
count ++;
document.getElementById("demo"). innerHTML=count; 
    
}
 function reset() {
     count = 0;
     document.getElementById("demo"). innerHTML=count;
 }
 function increse() {
    count -=1;
     document.getElementById("demo").innerHTML=count;
 }

 function table4() {
    document.getElementById("demo"). innerHTML= ''
    for (let i = 1; i<11; i++)
    document.getElementById("demo"). innerHTML +=
    "4 x" +i+ "=" +4*i+ "<br>"
    
 }


 function save() {
     count = '';
    document.getElementById("demo").innerHTML= count;
}
function clear() {
document.getElementById("demo"). innerHTML= 'For Waching'

}
function table() {
    document.getElementById("demo").innerHTML= ''
    for (let i = 0; i< 11; i++)
    document.getElementById("demo").innerHTML +=
     "2 x" +i+ "=" +2*i+ "<br>"
}
function oddevan() {
    if(count%2==0)
    {document.getElementById("heading2").innerHTML= 'Evan';}
    else
    {document.getElementById("heading2").innerHTML= 'odd';}
}

