window.clientSideFunctions = {
 
    startTimer: function () {
        var self = this;
        this.timerElement = document.getElementById("timerElement");
        this.seconds = 0;
        this.timerHandler = setInterval(function () {
            self.seconds += 1;
            self.timerElement.innerText = self.seconds + " sec";
        }, 1000);
    },
    stopTimer: function () {
        clearInterval(this.timerHandler);
    }
}