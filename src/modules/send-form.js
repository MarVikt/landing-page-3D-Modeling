import{checkValue} from './helpers';

const sendForm = ({formId,someElems=[]}) => {
  const dataBaseUrl = 'https://jsonplaceholder.typicode.com/posts';
  const form = document.getElementById(formId);
  const formElements = form.querySelectorAll('input');

  const sendData = (data) => {
    return fetch(dataBaseUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then(res => res.json());
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (checkValue(formBody)) {
      someElems.forEach(elem => {
        const element = document.getElementById(elem.id);
        if (elem.type === 'block') {
          formBody[elem.id] = element.textContent;
        } else if (elem.type === 'input') {
          formBody[elem.id] = element.value;
        }
      });

      sendData(formBody)
        .then(data => {
          // очистим поля формы
          formElements.forEach(input => {
            input.value = '';
          });
          console.log(data);
        });
    } else {
      alert('данные формы не валидны');
    }
    console.log(formBody);

  });
  
};
export default sendForm;