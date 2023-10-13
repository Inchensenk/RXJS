import 'bootstrap';
import 'bootstrap-slider';
import 'jquery';
import '../../assets/css/style.css';
import  './styles.css';
import {createSlider$} from './slider';
import { combineLatest, fromEvent, map, withLatestFrom } from 'rxjs';
import { terminalLog } from '../../utils/log-in-terminal';

const buttonElement = document.getElementById('send-result') as HTMLElement;
const buttonClick$ = fromEvent(buttonElement, 'click');

let mean = 0;

combineLatest([
    createSlider$('quality'),
    createSlider$('rating'),
    createSlider$('actual'),
])
    .pipe(
        map(values => values.reduce((acc, x) => acc + x) / values.length),
    )
    .subscribe(calcMean => {
        mean = calcMean;
    });

buttonClick$.subscribe(() => {
    terminalLog(mean);
})

// buttonClick$
//     .pipe(
//         withLatestFrom(
//             createSlider$('quality'),
//             createSlider$('rating'),
//             createSlider$('actual'),
//         ),
//         map(([_clickEvent, ...values]) => values.reduce((acc, x) => acc + x) / values.length)
//     )
//     .subscribe(terminalLog);
