


var pomodoro = {
    //initialise the variables.
    started: false,
    minutes: 0,
    seconds: 0,
    interval: null,
    minutesDOM: null,
    secondsDOM: null,
    sessions: 0,
    short: 0,
    long: 0,
    init: function(){
        var self = this;  //carry the context.
        this.minutesDOM = document.querySelector('#minutes');
        this.secondsDOM = document.querySelector('#seconds');
        this.interval = setInterval(function(){
             self.intervalCallback.apply(self);
        }, 1000);
        document.querySelector('#work').onclick = function(){
            self.startWork.apply(self);
            self.sessions++;
            console.log(self.sessions);
            setTimeout(function() {document.querySelector('#number').innerHTML = self.sessions}, 900000);
        };
        document.querySelector('#shortBreak').onclick = function(){
            self.startShortBreak.apply(self);
            self.short++;
            console.log(self.short);
            setTimeout(function() {document.querySelector('.short-break').innerHTML = self.short}, 180000);
            setTimeout(function(){window.open('https://www.instagram.com/');}, 5000);
        };
        document.querySelector('#longBreak').onclick = function(){
            self.startLongBreak.apply(self);
            self.long++;
            console.log(self.long);
            setTimeout(function() {document.querySelector('.long-break').innerHTML = self.long}, 600000);
              setTimeout(function(){window.open('https://www.youtube.com/');}, 5000);
        };
        document.querySelector('#stop').onclick = function(){
            self.stopTimer.apply(self);
        };
    },
        resetVariables : function(mins, secs, started){
           this.minutes = mins;
           this.seconds = secs;
           this.started = started;
        },
        startWork : function(){
          this.resetVariables(25, 0, true);
        },
        startShortBreak : function(){
            this.resetVariables(05, 0, true);
        },
        startLongBreak : function(){
            this.resetVariables(15, 0, true);
        },
        stopTimer : function(){
            this.resetVariables(25, 0, false);
            this.updateDOM();
        },
        timerComplete : function(){
            this.started = false;
                
        },
        toDoubleDigit : function(num){
            if(num < 10){
                return "0" + parseInt(num, 10);
            }
            return num;
        },
        updateDOM : function(){
            this.minutesDOM.innerHTML = this.toDoubleDigit(this.minutes);
            this.secondsDOM.innerHTML = this.toDoubleDigit(this.seconds);
        },

        updateCounter : function(){
           
        },


        intervalCallback : function(){
            if(!this.started) return false;
            if(this.seconds == 0){
                if(this.minutes == 0){
                    this.timerComplete();
                    return;
                }
                this.seconds = 59;
                this.minutes--;
            } else {
                this.seconds--;
            }   
            this.updateDOM();
        },
       
    };

    window.onload = function(){
        pomodoro.init();
    }

