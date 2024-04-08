// condition coding
if(sessionStorage.getItem("user")==null){
    window.location.replace("index.html");
}

// add new contact box
var add_icone = document.getElementById("plus");
add_icone.onclick =function(){
    var add_num = document.getElementById("add_num");
    add_num.style.display ="block";
    
}

//profil pic coding
var img  = document.getElementById("img");
var email_u = sessionStorage.getItem("user");
var src_file = localStorage.getItem(email_u+"image");

img.style.backgroundImage = `url("`+src_file+`")`;
img.style.backgroundPosition = "center";
img.style.backgroundSize ="cover";

// close coding add numm
var close = document.getElementById("close");
close.onclick=()=>{
    var add_num = document.getElementById("add_num");
    add_num.style.display ="none";

}

// add number coding
var add = document.getElementById("add");
add.onclick =()=>{


var add_name = document.getElementById("name");
var add_number = document.getElementById("number");
if(add_name.value==""&& add_number.value ==""){
    alert("plz fill the form");
}
else{

    var user_email=sessionStorage.getItem("user");
    var obj = {name:add_name.value,number:add_number.value};
    var user_txt = JSON.stringify(obj);
    localStorage.setItem(user_email+"contact"+add_name.value,user_txt);

}



}
function all_contact(){
    var add_name = document.getElementById("name");
    var user_email=sessionStorage.getItem("user");
for(var i =0; i<localStorage.length; i++){
    var all_key = localStorage.key(i);
    if(all_key.match(user_email+"contact"+add_name.value)){
        var json_text= localStorage.getItem(all_key);
        var obj =JSON.parse(json_text);
        // alert(obj.name);



    var contact_box = document.createElement("DIV");
    contact_box.setAttribute("id","contact");
     contact_box.setAttribute("class","cant")
    var name_p = document.createElement("P");
    name_p.setAttribute("class","contact_name");
    var name_i = document.createElement("I");
    name_i.setAttribute("class","fa fa-user");
    var tool   = document.createElement("DIV");
    tool.setAttribute("id","tool");
    var edit_i = document.createElement("I");
    edit_i.setAttribute("class","fa fa-edit edit edit");
    var del_i = document.createElement("I");
     del_i.setAttribute("class","fa fa-trash del");
    var line = document.createElement("HR");
    line.setAttribute("color","purple");
    line.setAttribute("width","75%");
    line.setAttribute("size","1");
    var num_p = document.createElement("P");
    var num_i = document.createElement("I");
    num_i.setAttribute("class","fa fa-mobile");
    name_p.appendChild(name_i);
    name_p.innerHTML +=" "+ obj.name;
    tool.appendChild(edit_i);
    tool.appendChild(del_i);
    num_p.appendChild(num_i);
    num_p.innerHTML +=" "+ obj.number;
    contact_box.appendChild(name_p);
    contact_box.appendChild(tool);
    contact_box.appendChild(line);
    contact_box.appendChild(num_p);
    var all_contact_box = document.getElementById("all_contact_box");
    all_contact_box.appendChild(contact_box);
     
    }
}

}
all_contact();

// search coding

var search = document.getElementById("search");
search.oninput=()=>{
    var all_contact_name = document.getElementsByClassName("contact_name");
    for(var i=0;i<all_contact_name.length;i++){
    if(all_contact_name[i].innerHTML.toUpperCase().match(search.value.toUpperCase())){
        all_contact_name[i].parentElement.style.display="block";
     }
    else{
        all_contact_name[i].parentElement.style.display="none";

    }
    }

}

// delete contact coding
function del_num(){
var del = document.getElementsByClassName("del");
var i;

for( i=0;i<del.length;i++){
    del[i].onclick = function(){
  var parent= this.parentElement.parentElement;
var re = parent.getElementsByClassName("contact_name")[0];
var username=re.innerHTML.replace(`<i class="fa fa-user"></i>`,``).trim();
localStorage.removeItem(email_u+"contact"+username);
  parent.remove();
    }
}
}
del_num();

// edit contact coading
var ed = document.getElementsByClassName("edit");
for(var i =0; i<ed.length;i++){
  ed[i].onclick=function(){
    var open_ed = document.getElementById("add_num");
    var btn_add = document.getElementById("add");
    open_ed.style.display ="block";
   var update= btn_add.innerHTML="Update";
   var parent= this.parentElement.parentElement;
   var re = parent.getElementsByClassName("contact_name")[0];
   var username=re.innerHTML.replace(`<i class="fa fa-user"></i>`,``).trim();
   localStorage.removeItem(email_u+"contact"+username);
   parent.remove();
   var close = document.getElementById("close");
   close.style.backgroundColor ="#ccc";
   close.disabled=true;

    
   update.onclick=function(){
 
 

    var update_name = document.getElementById("name").value;
    var update_number = document.getElementById("number").value;
    var user_email=sessionStorage.getItem("user");
    var obj = {name:update_name,number:update_number};
    var user_txt = JSON.stringify(obj);
    localStorage.setItem(user_email+"contact"+update_name,user_txt);


   }


  }

}

var menu_bar_i =document.getElementById("menu_bar_i");
var menu_cont = document.getElementById("menu_cont");
menu_bar_i.onclick=function(){
if(menu_bar_i.className=="fa fa-bars"){
    menu_cont.style.display="block";
    menu_bar_i.className ="fa fa-times-circle";
}
else if(menu_bar_i.className == "fa fa-times-circle"){
    menu_cont.style.display="none";
    menu_bar_i.className="fa fa-bars";
}

}

var profile = document.getElementById("profile");
profile.onclick=function(){
    window.location ="profile.html";
}
var lgout = document.getElementById("lgout");
lgout.onclick =function(){
    sessionStorage.clear();
    
    lgout.innerHTML ="Plz wait...";
    setTimeout(function(){window.location="index.html"},2000);
  }
 
