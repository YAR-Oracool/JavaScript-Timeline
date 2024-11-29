function deactivator(){
    document.getElementById("inner-frame").innerHTML="";
    const buttonCount = 4;
    for(let counter = 0; counter < buttonCount; counter++){
        document.getElementById(counter).classList.remove('active');
        document.getElementById(counter).classList.add('inactive');
    }
}

function pong(){

    deactivator();

    document.getElementById("style").href="../Styles/1972.css";

    document.getElementById("logo").src="../Image/Pong Logo.svg";
    document.getElementById("logo").alt="A Pong logo.";

    const pic = document.createElement("img");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");

    pic.src="../Image/pong screenshot.svg";
    pic.alt="Gameplay image of pong. two lines passing a ball back and forth between eachother.";

    para1.textContent = "Love it or hate it. The first set of video games were pong and remained Pong for quite a while. Just 2 balls bouncing back and forth.";
    para2.textContent = "While insignificant by today's standards, this is where it all began. Where games  came out fo computer labs and into arcades.";
    para3.textContent = "This inspired tons of games with different names but basically identical gameplay. This was peak entertainment and fueled what came after it.";

    document.getElementById("nameYear").textContent="PONG - 1972";
    document.getElementById("0").classList.toggle('active');
    document.getElementById("inner-frame").appendChild(pic);
    document.getElementById("inner-frame").appendChild(para1);
    document.getElementById("inner-frame").appendChild(para2);
    document.getElementById("inner-frame").appendChild(para3);

}

function CGA(){

    deactivator();

    document.getElementById("style").href="../Styles/1981.css";

    document.getElementById("logo").src="../Image/CGA Logo.svg";
    document.getElementById("logo").alt="An old TV showing CGA colors.";

    const pic = document.createElement("img");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");

    pic.src="../Image/CGA_screenshot.jpg";
    pic.alt="A pictyure that has the CGA colors";
    para1.textContent = "Oh god... CGA. During these times, if your computer could show colors, you had a high end PC.";
    para2.textContent = "Graphics and graphics cards existed before this but they had extremely limited pallets. This marked the first time we had a good chunk of colors to work with.";
    para3.textContent = 'From Commander Keen to your desktop. Who can possibly miss these eye ball melting colors?';

    document.getElementById("nameYear").textContent="CGA - 1981";
    document.getElementById("2").classList.toggle('active');
    document.getElementById("inner-frame").appendChild(pic);
    document.getElementById("inner-frame").appendChild(para1);
    document.getElementById("inner-frame").appendChild(para2);
    document.getElementById("inner-frame").appendChild(para3);

}

function activision(){

    deactivator();

    document.getElementById("style").href="../Styles/1979.css";

    document.getElementById("logo").src="../Image/Activision Logo.svg";
    document.getElementById("logo").alt="A 5 step color transformation from Red to Blue threw Yellow";

    const pic = document.createElement("img");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");

    pic.src="../Image/Activision Screenshot.svg";
    pic.alt="A made up screen shot of a game taht would apear on a game from taht era.";
    para1.textContent = "Say what you want about Activsion but without them, teh world of video games would have been much smaller.";
    para2.textContent = "Their break away from Atari and them trying to break the rules, created third party games.";
    para3.textContent = 'Yes! Most of teh games you do was because some people wanted to be credited in games so they made their own studio and indirectly caused the first videogame market crash.';

    document.getElementById("nameYear").textContent="ACTIVISION - 1979";
    document.getElementById("1").classList.toggle('active');
    document.getElementById("inner-frame").appendChild(pic);
    document.getElementById("inner-frame").appendChild(para1);
    document.getElementById("inner-frame").appendChild(para2);
    document.getElementById("inner-frame").appendChild(para3);

}

function gen5(){

    deactivator();

    document.getElementById("style").href="../Styles/1992.css";

    document.getElementById("logo").src="../Image/5th gen Logo.svg";
    document.getElementById("logo").alt="a bunch of abstract shapes stacked on top of each other.";

    const pic = document.createElement("img");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");

    pic.src="../Image/5th gen render.png";
    pic.alt="A low poly simple sene";
    para1.textContent = "Have you ever thought about what hell looks like? This was it. Discs were coming in, cartridges were going out. Arcades were rapidly shutting down and 3D was becoming all the rage.";
    para2.textContent = "If you couldn't keep up, you were on your way out. Many studios closed down, many companies went out of business.";
    para3.textContent = 'By the end of this generation. There were corpses of many companies on the floor. But most importantly, companies started to put effort into their music instead fo it being just background noise.';

    document.getElementById("nameYear").textContent="5th console generation - 1992";
    document.getElementById("3").classList.toggle('active');
    document.getElementById("inner-frame").appendChild(pic);
    document.getElementById("inner-frame").appendChild(para1);
    document.getElementById("inner-frame").appendChild(para2);
    document.getElementById("inner-frame").appendChild(para3);

}

window.onload = function (){
    pong();
}

document.getElementById("0").addEventListener('click', function(){
    pong();
})

document.getElementById("1").addEventListener('click', function(){
    activision();
})

document.getElementById("2").addEventListener('click', function(){
    CGA();
})

document.getElementById("3").addEventListener('click', function(){
    gen5();
})

document.getElementById("toIntro").addEventListener('click', function(){
    window.location.href="../index.html";
})