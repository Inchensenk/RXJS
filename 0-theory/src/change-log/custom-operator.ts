// Из блока по паттерну (./pattern.ts), если захочется посмотреть на влияние оператора rxJS на родительский поток
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

// class DoubleSubscriber extends SafeSubscriber<number> {
//     next(value: number) {
//         super.next(value * 2);
//     }
// }

// function double(source$: Observable<number>): Observable<number> {
//     return new Observable(subscriber => {
//         // const subscription = source$.subscribe({
//         //     next: value => {
//         //         console.log('NEXT - double');
//         //         subscriber.next(value * 2);
//         //     },
//         //     complete: () => {
//         //         subscriber.complete();
//         //     },
//         //     error: error => {
//         //         subscriber.error(error);
//         //     }
//         // });
//         const subscription = source$.subscribe({
//             next: value => {
//                 console.log('NEXT - double');
//                 subscriber.next(value * 2);
//             },
//             complete: subscriber.complete.bind(subscriber),
//             error: subscriber.error.bind(subscriber),
//         });
//         // const doubleSubscriber = new DoubleSubscriber(subscriber);
//         // const subscription = source$.subscribe(doubleSubscriber);

//         return () => {
//             subscription.unsubscribe();

//             console.log('DESTROY - double');
//         }
//     })
// }

// const subscription = interval(1000)
// const subscription = sequence$
//     .pipe(
//         double
//     )
//     .subscribe({
//         next: value => {
//             terminalLog(value);
//         },
//         complete: () => {
//             terminalLog('COMPLETE');
//         }
//     });

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 4000);

// function myMap<T, U>(cb: (value: T) => U): OperatorFunction<T, U> {
//     return (source$: Observable<T>): Observable<U> => new Observable(subscriber => {
//         const subscription = source$.subscribe({
//             next: value => {
//                 subscriber.next(cb(value));
//             },
//             complete: subscriber.complete.bind(subscriber),
//             error: subscriber.error.bind(subscriber),
//         });

//         return () => {
//             subscription.unsubscribe();
//         }
//     })
// }

// const double = myMap<number, number>(value => value * 2);
