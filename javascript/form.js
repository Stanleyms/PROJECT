function valids() {
    let n = document.getElementById("ns").value;
    let p=/^[a-zA-Z]+$/;
    if(n=="") {
        document.getElementById('er').innerHTML= "please enter your name"
    }
    else if(!p.test(n)) {
        document.getElementById('er').innerHTML ="Enter A valid name"
    }
    else if(n.length<5) {
        document.getElementById('er').innerHTML = "The name  should be above 5 characters"
    }
    else{
        document.getElementById('er').innerHTML =""
    }
   let q=document.getElementById('em').value;

   let k = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(q=="") {
    document.getElementById('ed').innerHTML= "Email ID is required"
}
else if(!k.test(q)) {
    document.getElementById('ed').innerHTML ="Enter A valid email ID"
}
else{
    document.getElementById('ed').innerHTML =""
}

let pass=document.getElementById('po').value;
let d=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
if(pass=="") {
document.getElementById('pd').innerHTML ="please Enter your password"
}
else if(!d.test(pass)) {
    document.getElementById('pd').innerHTML="Enter A valid password"
}
else{
    document.getElementById('pd').innerHTML='<i class="fa-solid fa-shield-check"></i>'
}
let m=document.getElementById('numcheck').value;
b=/^\+?[1-9][0-9]{7,14}$/;

if(m=="") {
    document.getElementById('pn').innerHTML="Please enter your phone number"
}
else if(!b.test(m)) {
    document.getElementById('pn').innerHTML="Enter A valid phone number"
}
else{
    document.getElementById('pn').innerHTML='<i class="fa-solid fa-shield-check"></i>'
}
let sc=document.getElementById('country').value;
let cs=/^[-]{2} Select [-]{2}$/;

if(sc=="") {
    document.getElementById('ctry').innerHTML="Select your country";
}
else{
    document.getElementById('ctry').innerHTML=""
}
let sl=document.getElementById('language').value;
let ls=/^[-]{2} Select [-]{2}$/;

if(sl=="") {
    document.getElementById('lang').innerHTML="Select your language";
}
else{
    document.getElementById('lang').innerHTML=""
}
let ge=document.getElementById('gender');
if (ge.checked) {
document.getElementById('gr').innerHTML =""
}
else{
    document.getElementById('gr').innerHTML ="Please select any option"
}
let bcc=document.getElementById('checkbox');
if (bcc.checked) {
document.getElementById('cbx').innerHTML =""

}
else{
    document.getElementById('cbx').innerHTML ="you must agree to the terms and conditions"
}
let fgg=document.getElementById('submitform');
if(fgg.checked){
 alert("your Form is submitted");
}


}
