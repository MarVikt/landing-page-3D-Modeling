import{animate} from './helpers';

const calculator = () => {
  const calcBlock = document.querySelector('.calc-block');
  const calcTotal = calcBlock.querySelector('#total');
  let typeRoom = 0;
  let square = 0;
  let count = 1;
  let days = 1;
  let totalSum = 0;

  calcBlock.addEventListener('input', (e) => {
    if (e.target.matches('select')) {
      if (e.target.selectedIndex !== 0) {
        typeRoom = +e.target.value;
        typeRoom = typeRoom === 1 ? 100 : (typeRoom === 1.4 ? 120 * 1.4 : 110 * 2);
      } else {
        typeRoom = 0; 
      }
    } else if (e.target.matches('input')) {
      if(!/[^0-9]+/gi.test(e.target.value)) {
        if (e.target.classList.contains('calc-square')) {
          square = +e.target.value > 0 ? +e.target.value : 0;
        }
        if (e.target.classList.contains('calc-count')) {
          count = +e.target.value > 0 ? +e.target.value : 1;
          count = count > 1 ? (1 + count * 0.1) : 1;
        }
        if (e.target.classList.contains('calc-day')) {
          days = +e.target.value > 0 ? +e.target.value : 10;
          days = days >= 10 ? 1 : (days >= 5 ? 1.5 : 2);
        }
      } else {
        e.target.value = e.target.value.replace(/[^0-9]+/gi,"");
      }
    } 
    totalSum = Math.round(typeRoom * square * count * days);

    // анимация суммы 
    animate({
      duration: 400,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        calcTotal.textContent = Math.round(progress * totalSum);
      },
    });

    // простой вывод суммы 
    // calcTotal.textContent = totalSum;
  });
};

export default calculator;