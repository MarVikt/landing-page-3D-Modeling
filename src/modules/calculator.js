const calculator = () => {
  const calcBlock = document.querySelector('.calc-block');
  const calcInputs = calcBlock.querySelectorAll('input.calc-item');
  let calcTotal = calcBlock.querySelector('#total');
    let typeRoom = 0;
    let square = 0;
    let count = 1;
    let days = 10;
    let totalSum = 0;

  calcBlock.addEventListener('input', (e) => {

    if (e.target.matches('select') && e.target.selectedIndex !== 0) {
      typeRoom = +e.target.value;
      console.log(typeRoom);
    } else if (e.target.matches('input')) {
      if(!/[^0-9]+/gi.test(e.target.value)) {
        e.target.style.color = '#464646';
        if (e.target.classList.contains('calc-square') && Number(e.target.value) !== 0) {
          square = +e.target.value;
        }
        if (e.target.classList.contains('calc-count') && Number(e.target.value) > 0) {
          count = +e.target.value;
        }
        if (e.target.classList.contains('calc-day') && Number(e.target.value) > 0) {
          days = +e.target.value;
        }
      } else {
        e.target.style.color = 'red';
      }
    } 
    totalSum = typeRoom * square * count * days;
    calcTotal.textContent = totalSum;
  });

//&& 
// 
//

  // calcInputs.forEach((elem) => {
  //   elem.addEventListener('change', () => {
  //     if(!/[^0-9]+/gi.test(elem.value) && Number(elem.value) !== 0) {
  //       alert('в форме введено число');
  //       elem.style.color = '#464646';
  //     } else {
  //       alert('введите число');
  //       elem.style.color = 'red';
  //     }
  //   });
  // });
};

export default calculator;