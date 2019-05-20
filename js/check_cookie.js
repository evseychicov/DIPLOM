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
        
    } 

    $("#out").on("click", function(){
        var exit = deleteCookie("Email");
        location.reload();
      })

})


function deleteCookie(email) {
    setCookie(email, "", {
      expires: -1
    })
  }


  function setCookie(email, result, options) {
    options = options || {};
  
    var expires = options.expires;
  
    if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }
  
    result = encodeURIComponent(result);
  
    var updatedCookie = email + "=" + result;
  
    for (var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }
  
    document.cookie = updatedCookie;
  }