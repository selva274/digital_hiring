const Rfname=document.getElementById('Rfname');

const Rlname=document.getElementById('Rlname');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const Rname = urlParams.get('Rfname').toLowerCase();
let users=[];
users.push(Rname);
export default users;