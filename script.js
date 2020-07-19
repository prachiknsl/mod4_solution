
(function (){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
               for (var i=0;i<names.length;i++) {
                  // console.log(names[i]);

    if (names[i][0]=='j'||names[i][0]=='J') {
        // console.log(names[i]+" : hii");
        byeSpeaker(names[i]);
    } else {
        helloSpeaker(names[i]);
        // console.log(names[i]+" : hello");
    }
}})();
