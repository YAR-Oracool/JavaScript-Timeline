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

    document.getElementById("logo").src="https://assets-prd.ignimgs.com/2022/04/16/pong-1650079489009.jpg?width=300&crop=1%3A1%2Csmart&auto=webp";
    document.getElementById("logo").alt="A yellow Pong logo.";

    const pic = document.createElement("img");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");

    pic.src="https://www.arcade-history.com/images/game/2007_1.png";
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

    document.getElementById("logo").src="https://www.dosdays.co.uk/topics/images/my_video_cards/cga_colours_correct.jpg";
    document.getElementById("logo").alt="An old TV showing CGA colors.";

    const pic = document.createElement("img");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");

    pic.src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2024/03/cga-graphics-rick-dangerous-2-screenshot.jpg";
    pic.alt="A show casing of a game running on CGA with limited colors";
    para1.textContent = "Og god... CGA. During these times, if your computer could show colors, you had a high end PC.";
    para2.textContent = "Graphics and graphics cards existed before this but they had extremely limited pallets. This marked the first time we had a goo chunk of colors to work with.";
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

    document.getElementById("logo").src="https://fabrikbrands.com/wp-content/uploads/Activision-Logo-2-1200x750.png";
    document.getElementById("logo").alt="Activision Logo";

    const pic = document.createElement("img");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");

    pic.src="https://www.remindmagazine.com/wp-content/uploads/2024/07/Activision-Decathlon-Atari-2600-game-cover-box-1014x633.jpg";
    pic.alt="box art of a sports game by activision called Decathlon.";
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

    document.getElementById("logo").src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/sonic_jam_1000px.jpg";
    document.getElementById("logo").alt="characters of Sonic Jam.";

    const pic = document.createElement("img");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");

    pic.src="https://cdn.mos.cms.futurecdn.net/EwoDSPaxsRtdgQ9siCFPtH-970-80.jpg.webp";
    pic.alt="Gameplay picture fo a rail shooter called time crisis.";
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