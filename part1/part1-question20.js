setInterval(temp,1000);
function temp() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}