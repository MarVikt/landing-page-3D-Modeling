const calculator = () => {
  const calcBlock = document.querySelector('.calc-block');
  const calcInputs = calcBlock.querySelectorAll('input.calc-item');

  calcInputs.forEach((elem) => {
    elem.addEventListener('change', () => {
      if(!/[^0-9]+/gi.test(elem.value) && Number(elem.value) !== 0) {
        alert('в форме введено число');
        elem.style.color = '#464646';
      } else {
        alert('введите число');
        elem.style.color = 'red';
      }
    });
  });
};

export default calculator;