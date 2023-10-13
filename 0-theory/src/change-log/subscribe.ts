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

// const allSubscription = new Subscription();

// const subsription: Subscription = sequence$.subscribe({
//     next: value => {
//         terminalLog(`subscribe - 1: ${value}`);
//     },
//     complete: () => {
//         terminalLog(`complete`);
//     },
//     error: err => {
//         terminalLog(`error: ${err}`);
//     }
// });

// allSubscription.add(subsription);

// setTimeout(() => {
//     const subsription: Subscription = sequence$.subscribe({
//         next: value => {
//             terminalLog(`subscribe - 2: ${value}`);
//         },
//         complete: () => {
//             terminalLog(`complete`);
//         },
//         error: err => {
//             terminalLog(`error: ${err}`);
//         }
//     });

//     allSubscription.add(subsription);
// }, 2000);

// setTimeout(() => {
//     allSubscription.unsubscribe();
// }, 4500)

// setTimeout(() => {
//     sequence$.subscribe(value => {
//         terminalLog(`subscribe - 2: ${value}`);
//     })
// }, 3000);