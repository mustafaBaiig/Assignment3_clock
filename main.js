$(document).ready(function(){
    function showTime(){
        // to get current time/date
        var date = new Date();
        
        // make variables to get hours, minutes, and second
        var hours = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

         // Am,pm
         var session = "AM"
         //condition for time behaviour
         if(hours==0){
            hours = 12;
         }
         if(hours>=12)
         {
            session="PM";
         }
         if(hours>12){
            hours= hours - 12;
         }
         hours = hours < 10 ? "0" + hours : hours; 
         min = min < 10 ? "0" + min : min; 
         sec = sec < 10 ? "0" + sec : sec; 
          
         // set the var to span
         $("#hours").text(hours);
         $("#min").text(min);
         $("#sec").text(sec);
         $("#period").text(session);
         
        // to change time every second

        setTimeout(showTime,1000);
    }
    showTime();
});