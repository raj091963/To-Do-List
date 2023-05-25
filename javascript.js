const input = document.getElementById('input');
const ul = document.getElementById('task');

const time = new Date();
const today = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();

function additem() { 
    if (input.value==='') {
        alert("write something to do...");
    }
    else{
        let li = document.createElement('li');
        let a=document.createElement('input');
        a.setAttribute("type","text");
        a.setAttribute("class","display");
        a.setAttribute("value",input.value);
        li.appendChild(a);
        var span1 = document.createElement('span');
        var span2 = document.createElement('span');
        var txt1 = document.createTextNode("\u00D7");
        var txt2 = document.createTextNode(today);
        span1.className = "time";
        span2.className = "close";
        span1.appendChild(txt2);
        span2.appendChild(txt1);
        li.appendChild(span1);
        li.appendChild(span2);
        ul.appendChild(li);
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                if( confirm("Have you really completed you task?")==true){
                    var div = this.parentElement;
                    div.style.display = "none";
                }
                saveData();
            }
            
        }    
    }
    input.value='';
    saveData();
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    if( confirm("Have you realy completed you task?")==true){
        var div = this.parentElement;
        div.style.display = "none";
    }
    saveData();
  }
}

function saveData(){
    localStorage.setItem("data" , ul.innerHTML);
}

function showTask(){
    ul.innerHTML = localStorage.getItem("data");
}
showTask();
