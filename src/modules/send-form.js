import{checkValueForm} from './helpers';

const sendForm = ({formId,someElems=[]}) => {
  const dataBaseUrl = 'https://jsonplaceholder.typicode.com/posts';
  const form = document.getElementById(formId);

  const sendData = (data) => {
    return fetch(dataBaseUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${ response.status }`);
      }
      return response.json();
    });
  };

  const deleteBlock = (block,msec) => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if (block) {
          block.remove();
        }
      }, msec);
    });
  };

  try {
    if (!form) {
      throw new Error (`Форма ${formId} отсутствует на странице`);
    }
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const formBody = {};
      let statusBlock = document.getElementById(`status-${formId}`);
  
      formData.forEach((val, key) => {
        formBody[key] = val;
      });
  
      if (checkValueForm(formBody)) {
        if (!statusBlock) {
          statusBlock = document.createElement('h3');
          statusBlock.id = `status-${formId}`;
          form.append(statusBlock);
        }
        if (formId === 'form3') {
          statusBlock.style.color = "#fff";
        }
        statusBlock.textContent = 'Загрузка...';
        
        someElems.forEach(elem => {
          const element = document.getElementById(elem.id);
          if (elem.type === 'block') {
            formBody[elem.id] = element.textContent;
          } else if (elem.type === 'input') {
            formBody[elem.id] = element.value;
          }
        });
  
        statusBlock.textContent = 'Отправка...';
        sendData(formBody)
          .then(data => {
            statusBlock.textContent = 'Спасибо! Наш менеджер свяжется с Вами!';
            // очистим поля формы
            const formElements = form.querySelectorAll('input');
            formElements.forEach(input => {
              input.value = '';
            });
            deleteBlock(statusBlock,5000);
            console.log(data);
          })
          .catch(error => {
            console.log(error.message);
            statusBlock.textContent = 'Ошибка отправки';
          });
      } else {
        // alert('данные формы не валидны');
      }
    });
  } catch (error) {
    console.log(error.message);
  } 
};
export default sendForm;