// function request$<T>(value: T): Observable<T> {
//     return of(value);
// }

// const streamHOO$ = interval(1000).pipe(
//     map(value => request$(value)),
//     mergeAll(),
// )

// const stream$ = interval(1000).pipe(
//     // map(value => request$(value)),
//     // mergeAll(),
//     mergeMap(value => request$(value)),
// )

// map + ...All === ...Map
// map + mergeAll === mergeMap
// map + switchAll === switchMap

// stream$.subscribe(value => {
//     terminalLog(value);
// })

// mergeMap
// const source$ = interval(1000)

// source$.pipe(
//     take(4),
//     mergeMap(
//         count => interval(500).pipe(
//             take(20),
//             tap(value => {
//                 console.log(`tap ${count}: ${value}`)
//             })
//         ),
//         1,
//     )
// ).subscribe(terminalLog);

// (----------) = 1000ms
// - = 100ms

// source$: ----------0----------1----------2----------3|
// mergeMap: (count) => -(count: 0)-(count: 1)-(count: 0)|
//          -----------(0: 0)-(0: 1)-(0: 2)------(1: 0)-(1: 1)-(1: 2)------0-1-2------0-1-2|

// switchMap
// const source$ = interval(1000)

// source$.pipe(
//     take(4),
//     switchMap(count => interval(500).pipe(
//         take(20),
//         tap(value => {
//             console.log(`tap ${count}: ${value}`)
//         })
//     ))
// ).subscribe(terminalLog);

// concatMap
// const source$ = interval(1000)

// source$.pipe(
//     take(4),
//     concatMap(count => interval(500).pipe(
//         take(20),
//         tap(value => {
//             console.log(`tap ${count}: ${value}`)
//         })
//     ))
// ).subscribe(terminalLog);

// exaustMap
// const source$ = interval(1000)

// source$.pipe(
//     take(50),
//     exhaustMap(count => interval(500).pipe(
//         take(20),
//         tap(value => {
//             console.log(`tap ${count}: ${value}`)
//         })
//     ))
// ).subscribe(terminalLog);