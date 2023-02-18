
// This is mousehover change background color function
randomColor = function(e) {
    e.style.background =  "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
}