const validation = () => {
  const textInput = document.getElementById('form1-name');
  const form1 = document.getElementById('form1');

  form1.addEventListener('submit', (event) => {
    event.preventDefault();
    let isError = false;
    if (!/[^а-я\-\s]+/gi.test(textInput.value) && textInput.value.replace(/[\-\s]/g,"") !== '') {
      alert('в форме 1 только кириллица');
    } else {
        alert('введите кириллицу, дефис или пробел');
        isError = true;
    }
  });
  // console.log(form1);

  // textInput.addEventListener('input', (event) => {
  //   event.target.value = event.target.value.replace(/[^а-яА-Я]\d+/g, "");
  // });

};
export default validation;