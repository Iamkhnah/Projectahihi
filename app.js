document.addEventListener('DOMContentLoaded', function() {
    const GetBtn = document.getElementById('GetBtn'),
      HomeBtn = document.getElementById('HomeBtn'),
      GetscriptBtn = document.getElementById('abc1'),
      DiscordBtn = document.getElementById('abc2'),
      supportgamebtn = document.getElementById('abc3');

    function tourl(url) {
        window.location.href = url
    };
    function eventclick(v1, v2) {
        if (v1) {
            v1.addEventListener('click', v2);
        }
    };
    eventclick(HomeBtn, function() {
        console.log("hihi");
        tourl("./index.html")
    });
    eventclick(GetBtn, function() {
        console.log("hihi");
        tourl("https://scriptblox.com/script/Blox-Fruits-Synet-Hub-Fruit-19406")
    });
    eventclick(DiscordBtn, function() {
        tourl("https://discord.gg/a44E4uSg9s")
    });
    eventclick(supportgamebtn, function() {
        tourl("https://roblox.com/games/2753915549/Blox-Fruits")
    });
});