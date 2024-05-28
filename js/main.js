let count = 1
let bg_video = document.getElementById('background-video');
let source = document.getElementsByTagName('source')[0];
let invert = document.querySelector('.imgMode');
let card1 = document.querySelector('.card');
let text = document.getElementsByClassName('text');


function changeMode(){
    if (count % 2 == 0){
        source.src = './media/video/itcamp_dark.mp4'
        invert.style = 'filter:invert(1);'
        card1.style = 'background-color: rgb(46, 46, 46);'
        count+=1
    }
    else{
        source.src = './media/video/itcamp_light.mp4'
        card1.style.backgroundColor = 'rgb(46, 46, 46, 0.5)';
        invert.style = 'filter:invert(0);'
        text.style = 'color:black;'
        count+=1
    }
    bg_video.load()
}