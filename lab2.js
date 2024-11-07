
const pagetitle = document.querySelector('h1');

// Add event listener for the 'sheep' button
document.getElementById('sheep').addEventListener('click', function() {
    pagetitle.innerHTML = "Bighorn Sheep"; // Update the title
    console.log("sheep button clicked");
    document.body.classList.remove("bear", "moose", "wolf", "elk");
    document.body.classList.add('sheep');
    document.getElementById('banner').src = "images/sheep.webp";
    document.getElementById('banner').alt = "Bighorn Sheep";
    document.getElementById('sheep').style.backgroundColor = 'lightgreen'; 
    document.querySelectorAll('.container button').forEach(button => {
        if (button.id !== 'sheep') {
            button.style.backgroundColor = ''; // Reset to default
        }
    });
});


document.getElementById('bear').addEventListener('click', function() {
    pagetitle.innerHTML = "Black Bear";
    console.log("bear button clicked");

    document.body.classList.remove("sheep", "moose", "wolf", "elk");
    document.body.classList.add('bear');
    document.getElementById('banner').src = "images/bear.webp";
    document.getElementById('banner').alt = "Black Bear";

    document.getElementById('bear').style.backgroundColor = 'lightgreen';
    document.querySelectorAll('.container button').forEach(button => {
        if (button.id !== 'bear') {
            button.style.backgroundColor = ''; // Reset to default
        }
    });
});

document.getElementById('moose').addEventListener('click', function() {
    pagetitle.innerHTML = "Moose";
    console.log("moose button clicked");

    document.body.classList.remove("sheep", "bear", "wolf", "elk");
    document.body.classList.add('moose');
    document.getElementById('banner').src = "images/moose.webp";
    document.getElementById('banner').alt = "Moose";

    document.getElementById('moose').style.backgroundColor = 'lightgreen';
    document.querySelectorAll('.container button').forEach(button => {
        if (button.id !== 'moose') {
            button.style.backgroundColor = ''; // Reset to default
        }
    });
});

document.getElementById('wolf').addEventListener('click', function() {
    pagetitle.innerHTML = "Wolf";
    console.log("wolf button clicked");

    document.body.classList.remove("sheep", "bear", "moose", "elk");
    document.body.classList.add('wolf');
    document.getElementById('banner').src = "images/wolf.webp";
    document.getElementById('banner').alt = "Wolf";

    document.getElementById('wolf').style.backgroundColor = 'lightgreen';
    document.querySelectorAll('.container button').forEach(button => {
        if (button.id !== 'wolf') {
            button.style.backgroundColor = ''; // Reset to default
        }
    });
});

document.getElementById('elk').addEventListener('click', function() {
    pagetitle.innerHTML = "Elk";
    console.log("elk button clicked");

    document.body.classList.remove("sheep", "bear", "moose", "wolf");
    document.body.classList.add('elk');
    document.getElementById('banner').src = "images/elk.webp";
    document.getElementById('banner').alt = "Elk";

    document.getElementById('elk').style.backgroundColor = 'lightgreen';
    document.querySelectorAll('.container button').forEach(button => {
        if (button.id !== 'elk') {
            button.style.backgroundColor = ''; // Reset to default
        }
    });
});
