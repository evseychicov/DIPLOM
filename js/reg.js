// регистрация
$("#btn-reg").on("click", function(e) {
    e.preventDefault();
    var email = $("#email").val();
    var pass = $("#password").val();
    var pass2 = $("#password2").val();
    var login = $("#login").val();
    var adr_pattern=/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
    var prov = adr_pattern.test(email);
    if(prov == true){
        if (email != '' && pass != '' && pass2 != '') {
            if(pass == pass2){
            $.ajax({
                type: "POST",
                url: "php/registration.php",
                data: {
                email: email,
                pass: pass,
                login: login
                },
                success: function(msg) {
                switch (msg) {
                    case "1":
                    alert("Вы успешно зарегистрировались! Теперь вы можете войти в систему.");
                    location.reload();
                    break;
                    case "2":
                    alert("Что-то пошло не так(");
                    break;
                    default:
                    alert("404");
                }
                }
            });
            }
            else{
                alert("Пароли не совпадают");
            }
        }
        else {
        alert("Заполните все поля");
        }
    }
    else{
        alert("Некорректно введен email");
      }
  });