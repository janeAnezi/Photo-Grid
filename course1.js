const changeOne = document.getElementById('image1');
const changeTwo = document.getElementById('image2');
const changeThree = document.getElementById('image3');
const changeFour = document.getElementById('image4');
const changeFive = document.getElementById('image5');
const changeSix = document.getElementById('image6');
const changeSeven = document.getElementById('image7');
const changeEight = document.getElementById('image8');

changeOne.addEventListener('click', event => {
    event.target.style.background = 'gold';
    event.target.style.color = 'green';
});

changeTwo.addEventListener('click', event => { 
    event.target.style.backgroundColor = '#00ff99';
    event.target.style.color = 'gold';
});

changeThree.addEventListener('click', event => {
    event.target.style.backgroundColor = '#090979';
    event.target.style.color = '#00d4ff';
});

changeFour.addEventListener('click', event => { 
    event.target.style.backgroundColor = '#833ab4';
    event.target.style.color = '#ddfc45';
});

changeFive.addEventListener('click', event => { 
    event.target.style.backgroundColor = '#e99494';
    event.target.style.color = '#833ab4';
});

changeSix.addEventListener('click', event => { 
    event.target.style.backgroundColor = '#097967';
    event.target.style.color = '#ffffff';
});

changeSeven.addEventListener('click', event => { 
    event.target.style.backgroundColor = '#71fb3f';
    event.target.style.color = '#fd1d1d';
});

changeEight.addEventListener('click', event => { 
    event.target.style.backgroundColor = '#45abfc';
    event.target.style.color = 'orange';
});
