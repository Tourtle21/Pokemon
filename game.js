y = 10;
x = 10;
a = 0;
guy = {};
var w = window.innerWidth;
var h = window.innerHeight;
stash = [];
squirtleDict = {
  maxHealth: 100,
  health: 100,
  type: "water",
  level: 2,
  experience: 0,
  move: ["Water Blast", "Absorb"],
  attack: 20,
  critical: 5
}
charmanderDict = {
  maxHealth: 100,
  health: 100,
  type: "fire",
  level: 2,
  experience: 0,
  move: ["Fire Ball", "Ember"],
  attack: 20,
  critical: 5
}
bulbasaurDict = {
  maxHealth: 100,
  health: 100,
  type: "grass",
  level: 2,
  experience: 0,
  move: ["Vine Whip", "Seed Attack"],
  attack: 20,
  critical: 5
}

function start(){
  $(function() {
    console.log('loaded');
    var character = document.getElementById("character");

    starting = document.getElementById("Pokemon")
    pokemon = starting.className
    console.log(pokemon)

    character.style.top = y + "px"


    function move(e) {
      badGuy = false
      number = Math.random();
      console.log(x, y)
      console.log(number)
      console.log(document.getElementById("hospital").style.visibility)
      if (document.getElementById("hospital").style.visibility == "hidden" && number > 0.985 && x < 510 && y < -110) {
        var fight = "fight";
        var run = "run"
        console.log("hi")
        document.body.style.backgroundImage = "url('images/tumblr_static_grassfortowns.png')"
        changeToGame(pokemon)
      }

      if (y < -469 && x > 589) {
        y += 10
        start();
      }
      if (y == -490 && x < 581 && x > 569) {
        y = -10
        character.style.top = y + "px";
        x = w-w/2 -4.5
        character.style.left = x + "px"
        hospital();
      }
      if (x > w-427 || x > 681 || x < 669 || y != -320 || x != 865 || y != -410)  {
        document.getElementById("message").innerHTML = ""
        console.log(w-w/2+180)
      }
      if (x > w-w/2 && x < 870 && y == -400 && document.getElementById("hospital").style.visibility =="visible") {
        document.getElementById("message").innerHTML = "How many pokeballs do you want 1 - 5"
      }
      if (x > 859 && x < 870 && y == -410 && document.getElementById("hospital").style.visibility =="visible") {
        if (e.keyCode == 49) {
          stash[0] = 1
          document.getElementById("message").innerHTML = stash[0]
        }
        if (e.keyCode == 50) {
          stash[0] = 2
          document.getElementById("message").innerHTML = stash[0]
        }
        if (e.keyCode == 51) {
          stash[0] = 3
          document.getElementById("message").innerHTML = stash[0]
        }
        if (e.keyCode == 52) {
          stash[0] = 4
          document.getElementById("message").innerHTML = stash[0]
        }
        if (e.keyCode == 53) {
          stash[0] = 5
          document.getElementById("message").innerHTML = stash[0]
        }

      }
      if (document.getElementById("hospital").style.visibility =="visible" && x < 691 && x > 669 && y == -310){
        document.getElementById("message").innerHTML = "Type enter to heal pokemon"
        document.getElementById("message").style.visibility = "visible"
      }
      if (document.getElementById("hospital").style.visibility =="visible" && e.keyCode == 13 && x < 691 && x > 669 && y == -320) {
        guy.health = guy.maxHealth;
        console.log("guy.health")
      }
      if (document.getElementById("hospital").style.visibility == "visible" && x > 670 && x < 715 && y == 0) {
        x = 580;
        y = -480;
        character.style.left= 580 + "px"
        character.style.top = -480 + "px"
        changeBack();
      }
      else if (e.keyCode == 40 && y < h - 655) {
                      //Moves Down
        y += 10;
        character.style.top = y + "px";
        $('#character').removeClass();
        $("#character").addClass('characterDown');
      }
      else if (e.keyCode == 38 && y > -618) {
        y-= 10;      //Moves Up
        character.style.top = y + "px";
        $('#character').removeClass();
        $('#character').addClass('characterUp');
      }
      else if (e.keyCode == 37 && x  > -8) {
        x-=10;       //Moves left
        character.style.left = x + "px";
        $('#character').removeClass();
        $("#character").addClass('characterLeft');
      }
      else if (e.keyCode == 39 && x < w - 437) {
        x+=10     //Moves right
        character.style.left = x + "px"
        $('#character').removeClass();
        $("#character").addClass('characterRight');
        if (x > w - 437) {
          var water = "FIGHT";
          document.getElementById("message").innerHTML = "To fish for water pokemon click" + " " + water.big();
          document.getElementById("message").style.visibility = "visible"
        }

      }

    }
    document.onkeydown = move;


  });
}

function changeToGame(pokemon) {
  move = document.getElementsByClassName("move")
  move[0].style.visibility = "visible"
  move[1].style.visibility = "visible"
  document.getElementById("building").style.visibility = "hidden"
  document.getElementById("character").style.visibility = "hidden"
  document.getElementById("grass").style.visibility = "hidden"
  document.getElementById("water").style.visibility = "hidden"
  document.getElementById("play").style.visibility = "hidden"
  document.getElementById("battle").style.visibility = "visible"
  document.getElementById("text").innerHTML = "A pokemon has spawned"
  document.onkeydown = null
  if (x < 510 && y < -110){
    document.getElementById("enemy").src='images/weedle.png'
  }
  if(guy.experience == allyExperience.max){
    guy.level += 1;
    guy.experience = 0;
    allyExperience.max *= 1.25
  }
  if (pokemon == "Bulbasaur") {
    guy = bulbasaurDict;
    document.getElementById("allyImage").src = "images/bulbasaur.png"
    chooseCharacter();

  }
  if (pokemon == "Charmander") {
    guy = charmanderDict;
    document.getElementById("allyImage").src = "images/charmander.png"
    chooseCharacter();
  }
  if(pokemon == "Squirtle"){
    guy = squirtleDict;
    document.getElementById("allyImage").src = 'images/squirtleMain.png'
    chooseCharacter();
  }
}
function changeBack() {
  move = document.getElementsByClassName("move");
  move[0].style.visibility = "hidden";
  move[1].style.visibility = "hidden";
  document.getElementById("building").style.visibility = "visible"
  document.getElementById("main").style.visibility = "hidden"
  document.getElementById("battle").style.visibility = "hidden"
  document.getElementById("hospital").style.visibility = "hidden"
  document.getElementById("character").style.visibility = "visible"
  document.getElementById("grass").style.visibility = "visible"
  document.getElementById("water").style.visibility = "visible"
  document.body.style.backgroundImage = "url('images/dirt.png')";
  start();
}
function squirtle() {
  var w = window.innerWidth;
  $(".Charmander").remove();
  $(".Bulbasaur").remove();
  $(".squirtleLink").remove();
  $(".squirtle").css("margin-top", $(this).outerHeight());
  document.getElementById("Pokemon").style.left = w - w/2 - 105 + "px"
  document.getElementById("chosenPokemon").innerHTML = "You have chosen Squirtle"
  document.getElementById("play").style.visibility = "visible"
}
function charmander() {
  var w = window.innerWidth;
  $(".Squirtle").remove();
  $(".Bulbasaur").remove();
  $(".charmanderLink").remove();
  document.getElementById("chosenPokemon").innerHTML = "You have chosen Charmander"
  document.getElementById("play").style.visibility = "visible"
}
function bulbasaur() {
  var w = window.innerWidth;
  bulbasaur=$(".bulbasaur");
  $(".Charmander").remove();
  $(".Squirtle").remove();
  $(".bulbasaurLink").remove();
  $(".bulbasaur").css("margin-top", $(this).outerHeight());
  document.getElementById("Pokemon").style.left = w - w/2 - 205 + "px"
  document.getElementById("chosenPokemon").innerHTML = "You have chosen Bulbasaur"
  document.getElementById("play").style.visibility = "visible"
}
function changeBackground() {
  document.body.style.backgroundImage = "url(images/water.png)"
  document.getElementById("enemy").src = "images/magicarp.png"
}
function subtractEnemyHealth() {
  var enemyHealth = document.getElementById("enemyHealth")
  console.log(enemyHealth.value)
  if (enemyHealth.value > guy.attack) {
    enemyHealth.value = enemyHealth.value - guy.attack
    enemyTurn();
  }
  else  {
    move = document.getElementsByClassName("move")
    move[0].style.visibility = "hidden";
    move[1].style.visibility = "hidden"
    enemyHealth.value = 100;
    guy.experience += 20;
    changeBack()
  }
}
function enemyTurn() {
  var allyHealth = document.getElementById("allyHealth")
  if (allyHealth.value == 0) {
    location.reload();
  }
  guy.health -= 10;
  allyHealth.value = guy.health;
}
function hospital() {
  document.getElementById("game").style.visibility = "hidden"
  document.getElementById("building").style.visibility = "hidden"
  document.getElementById("character").style.visibility = "visible"
  document.getElementById("grass").style.visibility = "hidden"
  document.getElementById("water").style.visibility = "hidden"
  document.getElementById("play").style.visibility = "hidden"
  document.getElementById("hospital").style.visibility = "visible"
  document.body.style.background = "black"
  document.getElementById("image").style.height = h -100+ "px"
  document.getElementById("image").style.left = w - w/2 - 325 + "px"
  start()
}
function chooseCharacter() {
  document.getElementById("moveOne").innerHTML = guy.move[0]
  document.getElementById("allyExperience").value = guy.experience;
  document.getElementById("allyHealth").value = guy.health;
  document.getElementById("level").innerHTML = "Level" + " " + guy.level;
  if (guy.level > 2) {
    document.getElementById("moveTwo").innerHTML = guy.move[1]
    document.getElementById("moveTwo").style.visibility = "visible"
  }
}
function catchPokemon() {
  console.log("working")
  if (stash[0] > 0){
    if (document.getElementById("enemyHealth").value > 20) {
      document.getElementById("enemy").style.visibility = "hidden"
      stash[0] -= 1
      finish()
    }
  }
  else {
    console.log("nope")
  }


}
function finish() {
  document.getElementById("text").innerHTML = "You have caught the pokemon"
  document.getElementById("battle").setAttribute("onclick", "undo()");
}
function undo() {
  document.getElementById("text").innerHTML = ""
  changeBack();
}
