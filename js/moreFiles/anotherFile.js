function breakMeInTwo() {
    this.part = "some crap";
}


breakMeInTwo.prototype = {

broken:function() {
    this.broke = this.part.split(" ");
},
    showBroken:function() {
        for (i = 0; i < this.broke.length; i++) {
            console.log(this.broke[i]);
            console.log("<br />");
        }
}

};


foo=new breakMeInTwo();
console.log(foo.part);

foo.broken();
console.log(foo.broke);
foo.showBroken();




