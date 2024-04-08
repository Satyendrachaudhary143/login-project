
/*  start signup coding */
var signup =document.getElementById("sign_form");
signup.onsubmit =function(){
   
    var user = btoa(document.getElementById("name").value);
    var email =btoa(document.getElementById("email").value);
    var phone = btoa(document.getElementById("phone").value);
    var password =btoa(document.getElementById("password").value);
    userobjectdata={user:user,email:email,phone:phone,password:password};
    var user_text = JSON.stringify(userobjectdata);
   
   
    if(user !="" && email != "" && phone != "" && password != ""){
        
   localStorage.setItem(email,user_text);
   var btn = document.getElementById("btn1");
    btn.style.background="#14b129";
    btn.value="Sign up successful";

    setTimeout(() => {
        btn.style.background="linear-gradient(90deg, rgb(5, 2, 76) 0%, rgba(161,13,233,0.9663515064228817) 80%)";
        btn.value="Sign Up";
        signup.reset();
    }, 3000);
   


return false;
    }

}


/*  end signup coding */


/*  start validation coding */

var email_in =document.getElementById("email");
email_in.onchange= function(){
    var email =btoa(document.getElementById("email").value);
    var war = document.getElementById("warning");
    var signup=document.getElementById("btn1");

    if(localStorage.getItem(email)!=null){
        war.style.display="block";
        email_in.style.borderBottomColor="red";
        war.style.color="red";
        signup.disabled=true;
        signup.style.background="#ccc";
        
        
        email_in.onclick=function(){
            email_in.value="";
            email_in.style.borderBottomColor="#ccc";
            signup.disabled=false;
            war.style.display="none";
            signup.style.background="linear-gradient(90deg, rgb(5, 2, 76) 0%, rgba(161,13,233,0.9663515064228817) 80%)";

        }


    }
}


/*  end validation coding */


/*  start login coding */

var login_btn = document.getElementById("login_form");
login_btn.onsubmit=function(){
    var email = btoa(document.getElementById("login_email").value);
    var pass =btoa(document.getElementById("login_pas").value);
  

    if(localStorage.getItem(email)==null){
        var em = document.getElementById("emai_not");
        em.style.display="block";
    }
    else{
        var text_data = localStorage.getItem(email);
        var obj =JSON.parse(text_data);
        var check_email= obj.email;
        var check_pass =obj.password;
        if(email==check_email ){
            if( pass == check_pass){
          sessionStorage.setItem("user",email);
          window.location.replace("profile.html");
        }
        else{
            var pm = document.getElementById("wrong_p");
            pm.style.display="block";
        }
    }
 
    
    }

    var email_r=document.getElementById("login_email");
    email_r.onclick= function(){
        var em = document.getElementById("emai_not");
        em.style.display="none";
        email_r.value="";
    }
   var pass_re=document.getElementById("login_pas");
   pass_re.onclick=function(){
    var em = document.getElementById("wrong_p");
    em.style.display="none";
    pass_re.value="";
   }

    return false;

}



/*  end login coding */