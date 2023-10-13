// const tick$ = interval(500);
// const data$ = of('1', '2', '3', 4, '5');
// const stream$ = zip(tick$, data$);

// function calculate$(data: any): Observable<string> {
//     return typeof data === 'string'
//         ? of(data.toUpperCase())
//         : throwError(() => 'Error custom');
// }

// stream$
//     .pipe(
//         switchMap(([_, data]) => calculate$(data).pipe(
//             catchError(error => {
//                 console.log('catchError', error);
    
//                 return of('0');
//             }),
//         )),
//         tap({
//             next: console.log,
//             error: console.log,
//         }),
//         map(string => string[0]),
//     )
//     .subscribe({
//         next: value => {
//             terminalLog(value);
//         },
//         error: error => {
//             terminalLog(`error: ${error}`);
//         },
//         complete: () => {
//             terminalLog(`complete`);
//         }
//     })

// stream$.pipe(
//     switchMap(([_, data]) => calculate$(data).pipe(
//         // catchError((err, obs) => {
//         //     console.warn('catchError main', err);

//         //     return obs.pipe(
//         //         catchError((err) => {
//         //             console.warn('catchError child', err);

//         //             return EMPTY;
//         //         }),
//         //     );
//         // }),
//     )),
//     retry({
//         count: 3,
//         delay: 4000,
//     } as RetryConfig),
//     // catchError(error => {
//     //     console.log('catchError', error);

//     //     return NEVER;
//     // }),
// )
// .subscribe({
//     next: value => {
//         terminalLog(value);
//     },
//     error: error => {
//         terminalLog(`error: ${error}`);
//     },
//     complete: () => {
//         terminalLog(`complete`);
//     }
// })

// EMPTY: |
// NEVER: --------------------------
// THROW("throwError()"): X
