//   вход
$("#btn-entry").on("click", function(e) {
    e.preventDefault();
    var email = $("#email_entry").val();
    var pass = $("#pass_entry").val();
        if (email != '' && pass != '') {
            $.ajax({
                type: "POST",
                url: "php/entry.php",
                data: {
                email: email,
                pass: pass
                },
                success: function(msg) {
                switch (msg) {
                    case "1":
                    // localStorage.setItem("Email",email);
                    // document.cookie = "Email=" + email + "";
                    $(".create_account").css("display", "none");
                    $(".entry").css("display", "none");
                    $("#gray_two").css("display", "none");
                    $(".form_entry").css("display", "none");
                    $(".user").css("display", "flex");
                    $(".nicname").text(email);
                    alert("Вы успешно вошли в систему!");
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
                alert("Заполните все поля");
            }
  });




 