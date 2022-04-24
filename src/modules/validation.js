const validation = () => {
  // const isEmail = /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/gi;
  const isEmail = /[^\-\.\!\`\*\'\@\w]+/gi;
  const form1 = document.getElementById('form1');
  const form2 = document.getElementById('form2');
  const form3 = document.getElementById('form3');

  const checkValue = (name,mail,phone,message) => {
    let isError = false;

    if (!/[^а-я\-\s]+/gi.test(name) && name.replace(/[\-\s]/g,"") !== '') {
      alert('в форме имя введено верно');
    } else {
        alert('введите имя кириллицей, можно использовать дефис и пробел');
        isError = true;
    }

    if (!isEmail.test(mail)) {
      alert('в форме email правильный');
    } else {
     alert('введите правильный email');
      isError = true;
    }

    if (!/[^\d\(\)\-]+/gi.test(phone)) {
      alert('в форме телефон правильный');
    } else {
      alert('введите телефон, используя цифры, круглые скобки и тире');
      isError = true;
    }

    if (message !== '') {
      if (!/[^а-я\-\s]+/gi.test(message)) {
        alert('в форме сообщение введено верно');
      } else {
          alert('введите сообщение кириллицей, можно использовать дефис и пробел');
          isError = true;
      }
    }

    return isError;
  };

  form1.addEventListener('submit', (event) => {
    event.preventDefault();
    const textInput1 = document.getElementById('form1-name');
    const email1 = document.getElementById('form1-email');
    const phone1 = document.getElementById('form1-phone');
    checkValue(textInput1.value,email1.value,phone1.value,'');
  });

 form2.addEventListener('submit', (event) => {
   event.preventDefault();
   const textInput2 = document.getElementById('form2-name');
   const email2 = document.getElementById('form2-email');
   const phone2 = document.getElementById('form2-phone');
   const message2 = document.getElementById('form2-message');
   checkValue(textInput2.value,email2.value,phone2.value,message2.value);
  });

  form3.addEventListener('submit', (event) => {
    event.preventDefault();
    const textInput3 = document.getElementById('form3-name');
    const email3 = document.getElementById('form3-email');
    const phone3 = document.getElementById('form3-phone');
    checkValue(textInput3.value,email3.value,phone3.value,'');
  });
};
export default validation;