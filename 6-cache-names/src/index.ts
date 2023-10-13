import 'bootstrap';
import '../../assets/css/style.css';
import { FormComponent } from './form/form.component';

const form1 = document.querySelector('.first-form') as HTMLElement;
const form2 = document.querySelector('.second-form') as HTMLElement;

new FormComponent(form1);

form2.hidden = true;

setTimeout(() => {
    form2.hidden = false;

    new FormComponent(form2);
}, 10000);
