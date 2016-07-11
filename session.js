var page = require('webpage').create();

/* Using viewportSize */
/* page.viewportSize = {width: 1366, height: 768} */
page.open('http://indonesiax.co.id/login', function () {
    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function () {
        /* Input value on each form field */
        page.evaluate(function () {
                $("body").css("background", 'pink');
                $("#login-email").val('darthedxius@indonesiax.co.id');
                $("#login-password").val('dracula');
        });
        page.render('Login.png');
        phantom.exit();
    });
});
