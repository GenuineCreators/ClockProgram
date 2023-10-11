const myLabel = document.getElementById("myLabel");

function update(){
    let date = new Date();


    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "PM" : "AM";
        
        hours = (hours % 12) || 12;
        hours = formatZero(hours);
        minutes = formatZero(minutes);
        seconds = formatZero(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }
    function formatZero(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
    myLabel.innerHTML = formatTime(date);
}
setInterval(update, 1000);

update();