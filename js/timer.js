function startTimer(end, d) {
  var now,diff;
  
  function digits2(x){
    return x < 10 ? "0" + x : x;
  };
  function timer() {
    now = new Date(Date.now());
    diff = Math.floor( (end - now)/1000 );
    if (diff <= 0) {
      diff = 0;
    } else {
      var t = [0,0,0,0];
      t[0] = digits2( Math.floor( diff/(3600*24) ) );
      t[1] = digits2( Math.floor( (diff - t[0]*24*3600)/3600 ) );
      t[2] = digits2( Math.floor( (diff - t[0]*24*3600 - t[1]*3600)/60));
      t[3] = digits2( diff  % 60 );
      for (var i = 3; i >= 0; i--) {
        if ( d[i].textContent != t[i] ){
          d[i].textContent = t[i];
        } else {
          break;
        };
      };
    };
  };
  timer();
  setInterval(timer, 1000);
};

window.onload = function () {

    var end = new Date("May 20, 2019 10:00:00");
    var d = [ document.querySelector('#days'),
              document.querySelector('#hours'),
              document.querySelector('#minutes'),
              document.querySelector('#seconds') ];
    var temp = new Date( Date.now() );
    startTimer(end, d);
};