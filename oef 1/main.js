function clock() {
let time = new Date();
    
hours = time.getHours();

minutes = time.getMinutes();
    
seconds = time.getSeconds();


document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

  
  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}

function clock2() {
    let newyork = new Date()
        
    hours = newyork.getHours() - 6;
    
    minutes = newyork.getMinutes();
        
    seconds = newyork.getSeconds();
    
    
    document.querySelectorAll('.newyork')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
    
      
      function harold(standIn) {
        if (standIn < 10) {
          standIn = '0' + standIn
        }
        return standIn;
      }
    }
setInterval(clock, 1000);
setInterval(clock2, 1000);