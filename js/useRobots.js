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