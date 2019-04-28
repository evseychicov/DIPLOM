// регистрация
$("#btn-feedback").on("click", function(e) {
    e.preventDefault();
    var name = $("#name_feed").val();
    var phone = $("#phone_feed").val();
    var adr_pattern=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    var prov = adr_pattern.test(phone);
    if(prov == true){
        if (name != '' && phone != '') {
            $.ajax({
                type: "POST",
                url: "php/feedback.php",
                data: {
                name: name,
                phone: phone
                },
                success: function(msg) {
                switch (msg) {
                    case "1":
                    alert("Вы успешно отправили заявку!");
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
        else {
        alert("Заполните все поля");
        }
    }
    else{
        alert("Некорректно введен номер телефона");
      }
  });