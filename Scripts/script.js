const Bear = document.getElementById("bear");
const Elk = document.getElementById("elk");
const Sheep = document.getElementById("sheep");
const Wolf = document.getElementById("wolf");
const Moose = document.getElementById("moose");

const Image = document.getElementById("animal");

bear.addEventListener('click', function(){
    Bear.classList.add("active");
    Bear.classList.remove("inactive");
Moose.classList.remove("active");
Moose.classList.add("inactive");
Wolf.classList.remove("active");
Wolf.classList.add("inactive");
Sheep.classList.remove("active");
Sheep.classList.add("inactive");
Elk.classList.remove("active");
Elk.classList.add("inactive");
    Image.src = 'image/bear.webp';
    Image.alt = 'Picture of a bear walking in the woods.';
})

elk.addEventListener('click', function(){
    Elk.classList.add("active");
    Elk.classList.remove("inactive");
    Bear.classList.remove("active");
Bear.classList.add("inactive");
Moose.classList.remove("active");
Moose.classList.add("inactive");
Wolf.classList.remove("active");
Wolf.classList.add("inactive")
Sheep.classList.remove("active");
Sheep.classList.add("inactive");
    Image.src = 'image/elk.webp';
    Image.alt = 'Picture of an elk walking in the woods.';
})

sheep.addEventListener('click', function(){
    Sheep.classList.add("active");
    Sheep.classList.remove("inactive");
    Bear.classList.remove("active");
Bear.classList.add("inactive")
Moose.classList.remove("active");
Moose.classList.add("inactive");
Wolf.classList.remove("active");
Wolf.classList.add("inactive");
Elk.classList.remove("active");
Elk.classList.add("inactive");
    Image.src = 'image/sheep.webp';
    Image.alt = 'Picture of two sheep walking on the mountains.';
})

wolf.addEventListener('click', function(){
    Wolf.classList.add("active");
    Wolf.classList.remove("inactive");
    Bear.classList.remove("active");
Bear.classList.add("inactive")
Moose.classList.remove("active");
Moose.classList.add("inactive");
Sheep.classList.remove("active");
Sheep.classList.add("inactive");
Elk.classList.remove("active");
Elk.classList.add("inactive");
    Image.src = 'image/wolf.webp';
    Image.alt = 'Picture of a wolf.';
})

moose.addEventListener('click', function(){
    Moose.classList.add("active");
    Moose.classList.remove("inactive");
    Bear.classList.remove("active");
Bear.classList.add("inactive");
Wolf.classList.remove("active");
Wolf.classList.add("inactive");
Sheep.classList.remove("active");
Sheep.classList.add("inactive")
Elk.classList.remove("active");
Elk.classList.add("inactive");
    Image.src = 'image/moose.webp';
    Image.alt = 'Picture of a moose in a grass field.';
})


