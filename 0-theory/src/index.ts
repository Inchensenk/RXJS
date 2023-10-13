import { Observable, Subscriber } from 'rxjs';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';




/* Пример 1
const sequence = new Promise(resolve =>{
    let count = 0;

    setInterval(()=>{
        count += 1;

        console.log('setInterval', count);
        
        resolve(count)
    }, 1000)
});

sequence.then(value => {
    terminalLog(value);
});

setTimeout(() => {
    sequence.then(value => {
        terminalLog(value);
    });
}, 1000);
*/

/* Пример 2
const sequence = (function* iteratorFn(){
    let count = 0;

    while(true){
        count++;

        console.log('iteratorFn', count);

        yield count;
    }
})();

terminalLog(sequence.next().value);

setTimeout(() => {
    terminalLog(sequence.next().value);
}, 2000);

setTimeout(() => {
    terminalLog(sequence.next().value);
}, 3000);
*/

/* Пример 3
const sequence$: Observable<any> = interval(1000);

sequence$.subscribe((value) =>{
    terminalLog(value)
})
*/

const sequence$ = new Observable<number>((subscriber: Subscriber<number>) =>{
    let count = 0;

    setInterval(()=>{
        count += 1;

        console.log('setInterval', count);
        
        subscriber.next(count)
    }, 1000)
});

sequence$.subscribe(value => {
    terminalLog(value);
});