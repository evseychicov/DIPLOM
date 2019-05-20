$(document).ready(function () {
    var news = $.ajax({
        url: "php/show_comment.php"
    });

     news.done(function( data ) {
        var json = JSON.parse(JSON.stringify({news: JSON.parse(data)}));
        var rawTamplate = document.getElementById("new-tamplate").innerHTML;
        var compiledTamplate = Handlebars.compile(rawTamplate);
        var genHTML = compiledTamplate(json);

        var news = document.getElementById("container");
        news.innerHTML = genHTML;
        console.log(data);
    });
});