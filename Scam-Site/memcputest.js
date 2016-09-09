    var timestamp = new Date();
      function contact () {
        alert('Contacting Microsoft Support. Please do not dismiss this window. Doing so may cause harm to the VoIP protocol machine and may cause another error code 303.');
      }
      function error() {
        alert('Window closed abruptly. Running system diagnostics...');
        document.getElementById("d").innerHTML= "Running System Diagnostics...";
        document.getElementById("e").innerHTML= "Running Memory Check...   (0%)";
        document.getElementById("f").innerHTML= "Running Memory Check...   (36%)";
        document.getElementById("g").innerHTML= "Running Memory Check...   (73%)";
        document.getElementById("o").innerHTML= "Running System Diagnostics...";
        document.getElementById("p").innerHTML= "Running CPU Core Test...  (0%)";
        document.getElementById("q").innerHTML= "Running CPU Core Test...  (36%";
        document.getElementById("r").innerHTML= "Running CPU Core Test...  (73%)";
        setTimeout(error2, 3000);
      }
      function error2() {
        document.getElementById("h").innerHTML= "Memory Test Results";
        document.getElementById("i").innerHTML= "___________________";
        document.getElementById("j").innerHTML= "Available: 4048MB  ";
        document.getElementById("k").innerHTML= "Used:      4000MB  ";
        document.getElementById("l").innerHTML= "Infected:  3800MB  ";
        document.getElementById("m").innerHTML= "-------------------";
        document.getElementById("n").innerHTML= "Your computer has many wiruses on it.";
        document.getElementById("z").innerHTML= "Please contact Microsoft Technical Support at 420-666-1738";
        document.getElementById("aa").innerHTML= "This test was conducted at time " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds();
