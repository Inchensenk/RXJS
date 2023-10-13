// Перекачевало из ./custom-operator
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

// function doubleFilter(source$: Observable<number>): Observable<number> {
//     return source$.pipe(
//         myMap(value => value * 2),
//         filter(value => value % 3 === 0),
//     )
// }

// const doubleFilter = (source$: Observable<number>) => {
//     return filter<number>(value => value % 3 === 0)(
//         myMap<number, number>(value => value * 2)(source$)
//     )
// }

// function pipe<T, U>(
//     ...operators: Array<OperatorFunction<any, any>>
// ): OperatorFunction<T, U> {
//     return (startSource$: Observable<T>): Observable<U> => operators.reduce(
//         (source$, operator) => operator(source$),
//         startSource$ as Observable<any>,
//     ) as Observable<U>;
// }

// const doubleFilter = pipe(
//     myMap<number, number>(value => value * 2),
//     filter<number>(value => value % 3 === 0),
// )

// interval(1000)
//     .pipe(
//         doubleFilter
//     )
//     .subscribe(terminalLog);

// pipe(doubleFilter)(interval(1000))
//     .subscribe(terminalLog);

// stream$.pipe(...) ~ pipe(...)(stream$)