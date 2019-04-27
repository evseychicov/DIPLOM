function getCookie(email) {
    var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + email.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
    }
$(document).ready(function(){
    var result = getCookie("Email");
    console.log(result);
    if(typeof result != 'undefined'){
        $(".create_account").css("display", "none");
        $(".entry").css("display", "none");
        $(".user").css("display", "flex");
        $(".nicname").text(result);
    }
    else if(typeof result === 'undefined'){
        $("#gray_two").css("display", "block");
        $(".form_entry").css("display", "block");
    } 

})