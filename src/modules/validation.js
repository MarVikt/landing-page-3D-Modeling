import{checkValue} from './helpers';

const validation = () => {
  const form1 = document.getElementById('form1');
  const form2 = document.getElementById('form2');
  const form3 = document.getElementById('form3');


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