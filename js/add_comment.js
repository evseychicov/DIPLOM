// регистрация
$("#btn-comment").on("click", function(e) {
    e.preventDefault();
    var email = $("#user_name").val();
    var comment = $("#comment_text").val();
        if (email != '' && comment != '') {
            $.ajax({
                type: "POST",
                url: "php/add_comment.php",
                data: {
                email: email,
                comment: comment
                },
                success: function(msg) {
                switch (msg) {
                    case "1":
                    alert("Вы успешно оставили комментарий!");
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
        alert("Вы не написали комментарий или не вошли в систему");
        }

  });