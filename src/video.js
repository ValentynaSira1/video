// import Player from '@vimeo/player'; 
// import throttle from 'lodash.throttle'; 

// const { default: Swiper } = require("swiper");

 
// const iframe = document.querySelector('iframe'); 
// const player = new Player(iframe); 
 
// const onPlay = function (data) { 
//     localStorage.setItem('videoplayer-current-time', data.seconds); 
// }; 
 
// player.on('timeupdate', throttle(onPlay, 1000)); 
 
// const currentTime = Number(localStorage.getItem('videoplayer-current-time')); 
 
// player.setCurrentTime(currentTime).then(function (seconds) {  
// }).catch(function (error) { 
//     switch (error.name) { 
//         case 'RangeError':  
//             break; 
//         default: 
//             break; 
//     } 
// }); 


const swiper = new Swiper('.image-slider', {
    direction: 'vertical',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});