(function() {
    var names = ["rohan", "vivek", "saurabh", "pramod", "akash", "rushi", "rohit", "mamoon", "hussain", "aaquib"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();




