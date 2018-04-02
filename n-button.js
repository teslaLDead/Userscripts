// ==UserScript==
// @name         Youtube Next Shortkut
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Logs the 'n' keypress on the youtube page and changes the video to next
// @author       Paritosh
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// @require http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';
$(document).ready(function(){
console.log('yo this scri');
     $(document).bind('keydown',function(e){
       if(e.keyCode == 78) {
console.log('this works');
         var c=$('a.ytp-next-button ').attr('href');
           window.open(c,'_self');

       }
    });
});
    // Your code here...
})();
