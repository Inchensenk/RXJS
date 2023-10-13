import { combineLatest, distinctUntilChanged, fromEvent, map, startWith } from "rxjs";
import { userService } from "./user.service";

export class FormComponent {
    private readonly inputElement!: HTMLInputElement;
    private readonly buttonElement!: HTMLButtonElement;

    constructor(formElement: HTMLElement) {
        const inputElement = formElement.querySelector('input');
        const buttonElement = formElement.querySelector('button');

        if (!(inputElement && buttonElement)) {
            throw new Error('Форма не имеет необходимых элементов');
        }

        this.inputElement = inputElement;
        this.buttonElement = buttonElement;

        this.listenInputChange();
        this.listenSubmitValue();
    }

    private listenInputChange() {
        const inputValue$ = fromEvent<InputEvent>(this.inputElement, 'input')
            .pipe(
                map(({target}) => (target as HTMLInputElement).value),
                startWith(this.inputElement.value),
                distinctUntilChanged(),
            );

        combineLatest([
            inputValue$,
            userService.uniqueNameSequence$
        ]).subscribe(([inputValue, names]) => {
            const isValid = inputValue && names.includes(inputValue);

            this.buttonElement.disabled = !isValid;

            if (isValid) {
                this.inputElement.classList.remove('error');

                return;
            }

            this.inputElement.classList.add('error');
        });
    }

    private listenSubmitValue() {
        fromEvent(this.buttonElement, 'click').subscribe(() => {
            console.log(this.inputElement.value);
        })
    }
}