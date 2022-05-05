import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
// import validation from "./modules/validation";
import calculator from "./modules/calculator";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sendForm from "./modules/send-form";

timer('2 may 2022');
menu();
modal();
// validation();
calculator();
tabs();
slider();
sendForm({
  formId: 'form1'
});
