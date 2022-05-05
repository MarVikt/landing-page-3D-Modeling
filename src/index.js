import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calculator from "./modules/calculator";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sendForm from "./modules/send-form";

timer('7 may 2022');
menu();
modal();
calculator();
tabs();
slider();

sendForm({
  formId: 'form1',
  someElems: [
    {
      type: 'block',
      id: 'total'
    },
  ]
});

sendForm({
  formId: 'form2',
  someElems: [
    {
      type: 'block',
      id: 'total'
    },
  ]
});

sendForm({
  formId: 'form3',
  someElems: [
    {
      type: 'block',
      id: 'total'
    },
  ]
});
