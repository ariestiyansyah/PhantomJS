casper.test.begin('Sign In Santa', 1, function(test){
    casper.start('https://indonesiax.co.id/login');

    casper.wait(500, function(){
        this.fill('form#login', {
            'login-email' : 'rizky@indonesiax.co.id',
            'login-password' : 'password'

        }, false);
    });

    casper.then(function(){
        this.click(".login-button");
    });

    casper.wait(500, function(){
        test.assertUrlMatch(this.getCurrentUrl(), 'https://indonesiax.co.id/dashboard');
    });

    casper.run(function(){
        test.done();
    });
});
