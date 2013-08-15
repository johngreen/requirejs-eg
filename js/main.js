require.config({
    baseUrl: 'js',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery',
        brokeUp: 'moreFiles/anotherFile'
    }
});


require(["jquery","bootMeUp","useRobots","brokeUp"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
       
    });
});

/*
require(["jquery","person","android","doctor","robot","useRobots"], function($,person,android,doctor,robot) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        
        person = new Person();        
        person.speak();
        
        Android.prototype = new Person();
        android = new Android();
        android.speak();
        android.currentState();
        android.repair();
        android.currentState();


        Doctor.prototype = new Person();
        doctor = new Doctor();
        doctor.speak();
        android.speak();

        Robot.prototype = new Android();
        robot = new Robot();
        robot.speak();
       
    });
});


*/
