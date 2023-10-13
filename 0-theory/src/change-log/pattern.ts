// Разбор проблем промиса (попытка получить новые значения в промисе)

// const sequence = new Promise(resolve => {
//     let count = 0;

//     setInterval(() => {
//         count += 1;

//         console.log('setInterval', count);

//         resolve(count);
//     }, 1000);
// });

// sequence.then(value => {
//     terminalLog(value);
// });

// setTimeout(() => {
//     sequence.then(value => {
//         terminalLog(value);
//     });
// }, 3000);

// Разбор проблем генератора (отсутсвие двигателя)

// const sequence = (function* iteratorFn() {
//     let count = 0;

//     while (true) {
//         count += 1;

//         console.log('iteratorFn', count);

//         yield count;
//     }
// })();

// terminalLog(sequence.next().value);

// setTimeout(() => {
//     terminalLog(sequence.next().value);
// }, 2000);

// setTimeout(() => {
//     terminalLog(sequence.next().value);
// }, 3000);

// Observable

// const sequence$: Observable<number> = interval(1000);

// const sequence$ = new Observable<number>((subscriber: Subscriber<number>) => {
//     console.log('CREATE');
//     let count = 0;

//     const intervalId = setInterval(() => {
//         // console.log('setInterval', count);
//         console.log('new counter', count);

//         if (count === 5) {
//             subscriber.complete();
//             console.log('COMPLETE');

//             // subscriber.error('count === 5');
//             // console.log('ERROR');

//             return;
//         }

//         subscriber.next(count);
//         console.log('NEXT');

//         count += 1;
//     }, 1000);

//     return () => {
//         clearInterval(intervalId);
//         console.log('DESTROY');
//     }
// });

// sequence$.subscribe(value => {
//     terminalLog(value);
// })