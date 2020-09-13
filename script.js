var duration = 10; // 
var clicks; 
var running = false; // boolean if game is running
var startTime; 
var elapsedTime = document.getElementById("time");
var click_Stat = document.getElementById("clickStat");
var click_Area = document.getElementById("clickArea");
var cps = document.getElementById("clicksPerSecond");

function startGame() {
    running = true;
    clicks = 0;
    startTime = new Date().getTime();
    // function() is an anonymous function since it's already called through setInterval() function (already javascript function)
    var timer = setInterval(function() {
        var totalTime = (new Date().getTime() - startTime) / 1000;
        if (totalTime < duration) {
            elapsedTime.textContent = totalTime.toFixed(2);
            cps.textContent = (clicks / totalTime).toFixed(1);
        }
        // when game isn't running
        else {
            running = false;
            clearInterval(timer); // resets time
            endGame();
        }
    }, 1);
}

function endGame() {
    var cps = (clicks / duration).toFixed(1);
    elapsedTime.textContent = duration.toFixed(2);
    cps.textContent = cps;
    running = false;

    setTimeout(function() {
        if (cps == 6.9) {
            alert("6.9 CPS! Goddamn...you're legendary...")
    }
        else {
            alert("GG! Your CPS was " + cps + " !" + " Why not try for 6.9?")
        }
    },10);
}

clickArea.addEventListener("click", function(e) {
    if (!running) {
        startGame();
    }
    else {
        clicks++;
        click_Stat.textContent = clicks;  
    }
    }
);
