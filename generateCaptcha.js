
function generateRandom(){
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let strLength = 7;
    let result ='';
    for(let i=0; i<strLength; i++){
        let randomNum = Math.floor(Math.random() * chars.length);
        result += chars.substring(randomNum, randomNum+1);
    }
    document.getElementById('randomChar').innerHTML = result;
}