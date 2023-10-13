let startX, startY, diffX, diffY;

window.touchStart = function touchStart(e) {
    console.log(touchStart);
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
};

window.touchMove = function touchMove(e) {
    console.log(touchMove);
    diffX = e.touches[0].clientX - startX;
    diffY = e.touches[0].clientY - startY;
};

window.touchEnd = function touchEnd() {
console.log(touchEnd);
let currentWeek = variables['67e4898f-2a6b-4fd4-a8d4-bb643283d2a5']?.['week'];
console.log(currentWeek);
    if (Math.abs(diffX) > Math.abs(diffY)) { // Ensuring it's a horizontal swipe
    let daysList = document.getElementById('dayslist');
        if (diffX < -40) {
            currentWeek++;
            if (currentWeek> 5) {
                currentWeek = 5;
            }
        } else if (diffX > 40) {
            currentWeek--;
        if (currentWeek < 0) {
            currentWeek=0;
        }
        } for(let i=1; i <=42; i++) {
            let day=document.getElementById('day' + i);
            day.style.transform=`translateX(-${currentWeek * 280}px)`;
            /*day.style.transition='transform 0.4s ease';*/
        } 
    }
};
