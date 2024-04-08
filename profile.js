
  if(sessionStorage.getItem("user")==null){
    window.location.replace("index.html");
  }
  else{
   // logout coding
  var logout = document.getElementById("logout");
  logout.onclick = function(){
    sessionStorage.clear();
    var logout_text = document.getElementById("logout_text");
    logout_text.innerHTML ="plz wait...";
    setTimeout(function(){window.location="index.html"},2000);
  }
  
   // logout end





    var u_email = sessionStorage.getItem("user");
     

    if(localStorage.getItem(u_email+"image")!=null){
      var container = document.getElementById("container");
      container.style.display="none";
      var main = document.getElementById("main");
      main.style.display ="block";

    }
// profile name coding
   
    var user_email = sessionStorage.getItem("user");
    var json_email = localStorage.getItem(user_email);
    var email_obj = JSON.parse(json_email);
    var p_name = document.getElementById("p_name");
    p_name.innerHTML=atob(email_obj.user);
    var f_name = document.getElementById("user_name").innerHTML = atob(email_obj.user);
    
// profile pic uploading coding 
     var pp = document.getElementById("profile_upload")
   
   
     pp.onchange=function(){
        var scr = new FileReader();
     scr.readAsDataURL(pp.files[0]);
    
    
     scr.onload=function(){
     
        var user = document.getElementById("user");
        var filesrc = scr.result;
        var profile=document.getElementById("profile");
        profile.style.backgroundImage=`url("`+filesrc+`")`;
        
        profile.style.backgroundSize="cover";
        profile.style.backgroundPosition="center";
        user.style.display="none";
        var btn = document.getElementById("btn");
        btn.style.display ="block";
       
       
        btn.onclick=function(){
          var main = document.getElementById("main");
          localStorage.setItem(user_email+"image", filesrc);
          var container = document.getElementById("container");
          container.style.display="none";
          main.style.display ="block";
          window.location =location.href;
        }
        

     }
    }


    var contact_s = document.getElementById("contact");
    contact_s.onclick = function(){
      var email = sessionStorage.getItem("user");
      sessionStorage.setItem("user",email);
      window.location.replace("contact.html");
    }
  }
  
  var email_pic = localStorage.getItem(u_email+"image");
  var profile_pic = document.getElementById("profile_amg");
  profile_pic.style.backgroundImage =`url("`+email_pic+`")`;
  profile_pic.style.backgroundPosition ="center";
  profile_pic.style.backgroundSize ="cover";





