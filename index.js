
const fname=document.getElementById('fname');

const lname=document.getElementById('lname');

const user_name=document.getElementById('name');



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('fname').toLowerCase()
if(name==="john"){
        user_name.innerHTML=`hey,${name}`;
    }    
    else{
        window.location.href='./login.html';
    }


