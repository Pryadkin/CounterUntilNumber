'use strict';

const getCounterUntilNumber = (function () {
  return function (num, step, speed, classItem) {
    let
      counter = document.querySelector(classItem),
      i = 0,
      timeoutID;

    setTimeout(function count() {
      counter.innerHTML = i;
      i += step;
      if(i > num){
        i = num;
        counter.innerHTML = i;
        clearTimeout(timeoutID)
      };
      timeoutID = setTimeout(count, speed);
    }, speed)
  };
})();
getCounterUntilNumber(989, 12, 50, '.num1');
getCounterUntilNumber(350, 12, 50, '.num2');
getCounterUntilNumber(1250, 12, 50, '.num3');
