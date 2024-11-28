function deactivator(){
    const buttonCount = 2;
    for(let counter = 0; counter < buttonCount; counter++){
        document.getElementById(counter).classList.toggle('inactive');
    }
}

function pong(){
    const pic = document.createElement("img");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");

    pic.src="https://www.arcade-history.com/images/game/2007_1.png";
    para1.textContent = "Love it or hate it. The first set of video games were pong and remaind Pong for quite a while. Just 2 balls bouncing back and forth.";
    para2.textContent = "While insignificant by today's standards, this is where it all began. Where games  came out fo compouter labs and into arcades.";
    para3.textContent = "Thsi inspired tons of games with different names but basically identical gameplay. This was peak entertainment and fuekld what came after it.";

    deactivator();
    document.getElementById("nameYear").textContent="PONG 1972";
    document.getElementById("0").classList.toggle('active');
    document.getElementById("inner-frame").appendChild(pic);
    document.getElementById("inner-frame").appendChild(para1);
    document.getElementById("inner-frame").appendChild(para2);
    document.getElementById("inner-frame").appendChild(para3);

}

window.onload = function (){
    pong();
}

document.getElementById("toIntro").addEventListener('click', function(){
    window.location.href="../index.html";
})