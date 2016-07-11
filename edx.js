var BASE_URL = "http://indonesiax.co.id";

var viewportSizes = [
    [1500,900],
    [1280,800],
    [1024,768],
    [600,1024],
    [320,568]
]

function screenshots(page){
    casper.each(viewportSizes, function(self, viewportSize, i) {

	    // set two vars for the viewport height and width as we loop through each item in the viewport array
	    var width = viewportSize[0],
	        height = viewportSize[1];

	    //give some time for the page to resize
	    casper.wait(1, function() {

	        //set the viewport to the desired height and width
	        this.viewport(width, height);

			casper.viewport(width, height).then(function() {

	              this.capture('screenshots/'+page+'-'+width+'.png')

	        });
	    });

	});
	casper.viewport(1500,900);
}

function to_homepage(){
	// Go to homepage
	casper.thenClick('.logo', function() {
	    this.test.info('Status ' + this.getCurrentUrl());
        this.test.assertHttpStatus(200);
		// screenshots("homepage")
	});
}

function register_page(){
    casper.thenOpen(BASE_URL+'/register', function() {
        this.test.info('Status ' + this.getCurrentUrl());
        this.test.assertHttpStatus(200);
        // screenshots("register-page")
    });
}

function login_page(){
    casper.thenOpen(BASE_URL+'/login', function() {
        this.test.info('Status ' + this.getCurrentUrl());
        this.test.assertHttpStatus(200);
		// screenshots("login-page")
	});
}

function karir_page(){
    // Go to Career page
    casper.thenOpen(BASE_URL+'/jobs', function() {
        this.test.info('Status ' + this.getCurrentUrl());
        this.test.assertHttpStatus(200);
        // screenshots("karir-page")
    });
}

function kabar_page(){
    //
    casper.thenOpen(BASE_URL+'/news', function() {
        this.test.info('Status ' + this.getCurrentUrl());
        this.test.assertHttpStatus(200);
        // screenshots("kabar-terbaru-page")
    });
}

casper.start().viewport(800,900).thenOpen(BASE_URL, function() {
	console.log('==================================')
    this.echo('========== Darth edXius ==========');
    console.log('==================================')
    this.test.pass('Arrived at IndonesiaX Motherbase');

    to_homepage();
    register_page();
    login_page();
    karir_page();
    kabar_page();

});

casper.run(function() {
    this.test.done();
});
