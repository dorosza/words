    document.addEventListener("DOMContentLoaded", function () {
        var list = [
          "impact",
          "moral",
          "ethics",
          "ethical",
          "order",
          "deforested",
          "crucial",
          "missing",
          "world",
          "filter",
          "feed",
          "equality",
          "quantity",
          "news",
          "accident",
          "evidence",
          "undermined",
          "capitalist",
          "message",
          "www",
          "parties",
          "capital",
          "regulation",
          "leader",
          "crowded",
          "abandoned",
          "labor",
          "prayer",
          "player",
          "industry",
          "crisis",
          "climate",
          "liberty",
          "capacity",
          "refugee",
          "limit",
          "ban",
          "identity",
          "gender",
          "income",
          "exploited",
          "division",
          "stimuli",
          "single",
          "algorithm",
          "EU",
          "silence",
          "environment",
          "privilege",
          "faith",
          "deal",
          "mother",
          "nuclear",
          "isolation",
          "crucifixion",
          "orphaned",
          "account",
          "communication",
          "war",
          "hunger",
          "unemployed",
          "belief",
          "legacy",
          "responsibility",
          "muted",
          "masked",
          "numb",
          "child",
          "spread",
          "extract",
		  "digital"
        ]
 
        for (var i=0; i<list.length; i++) {
          var word = document.createElement ("div")
          var audio = document.createElement ("audio")
          audio.id = i + "aud"
          var forras = document.createElement ("source")
          forras.src = "resources/audio/AUD_" + i + ".mp3"
          audio.appendChild (forras)
          document.body.appendChild (audio)
 
          var winWidth = window.innerWidth;
          var winHeight = window.innerHeight;
          word.className = "basic pointer center piskota"
          word.innerText = 'word'
          word.id = i
          document.body.appendChild (word)
 
          let isOverlap = true
          while (isOverlap) {
            var randomTop = getRandomNumber(0, winHeight-57);
            var randomLeft = getRandomNumber(0, winWidth-92);
 
            word.style.top = randomTop + "px";
            word.style.left = randomLeft + "px";
            word.style.position = 'fixed'
 
            isOverlap = fedes(word)
          }
 
          function getRandomNumber(min, max)
          {
            return Math.random() * (max - min) + min;
          }
 
          word.addEventListener("click", function (event)
          {
            var angyal = event.target
            var audio = document.getElementById (angyal.id + "aud")
 
            if (angyal.innerText == 'word')
            {
              audio.play();
              angyal.innerText = list[angyal.id]
            }
            else
            {
              angyal.innerText = 'word'
              audio.pause();
            }
          })
        }
      })
      function fedes (word)
      {
        var elements = document.getElementsByClassName("piskota");
        for (var i=0; i<elements.length; i++) {
          var element = elements[i]
          if (word.id !== element.id && overlap(elements[i], word)) {
            return true
          }
        }
        return false
      }
 
      function overlap(e1, e2) {
        var box1 = {
          top: parseInt(e1.style.top),
          left: parseInt(e1.style.left),
          width: parseInt(window.getComputedStyle(e1).width),
          height: parseInt(window.getComputedStyle(e1).height)
        }
        var box2 = {
          top: parseInt(e2.style.top),
          left: parseInt(e2.style.left),
          width: parseInt(window.getComputedStyle(e2).width),
          height: parseInt(window.getComputedStyle(e2).height)
        }
 
        var x1 = box1.left
        var y1 = box1.top;
        var h1 = box1.height;
        var w1 = box1.width;
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = box2.left;
        var y2 = box2.top;
        var h2 = box2.height;
        var w2 = box2.width;
        var b2 = y2 + h2;
        var r2 = x2 + w2;
 
        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
      }