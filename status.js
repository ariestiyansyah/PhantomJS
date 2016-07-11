var page = require('webpage').create();
page.open('https://indonesiax.co.id', function (status) {
        if (status != 'success') {
            console.log('IndonesiaX is down');
        }
        else {
            console.log('IndonesiaX is up');
        }
        page.render('homepage.png');
        phantom.exit();
});
