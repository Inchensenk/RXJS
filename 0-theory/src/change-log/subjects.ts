// Subject = Observable + Observer(Subscriber)

// const stream$ = new AsyncSubject<number>();

// stream$.subscribe(value => {
//     terminalLog(`Subscribe 1: ${value}`);
// });

// stream$.next(1);
// stream$.next(2);
// stream$.next(3);

// setTimeout(() => {
//     stream$.next(4);
//     stream$.next(5);
//     stream$.next(6);
// }, 2000);

// setTimeout(() => {
//     stream$.subscribe(value => {
//         terminalLog(`Subscribe 2: ${value}`);
//     });

//     stream$.next(7);
//     stream$.next(8);
//     stream$.next(9);
// }, 4000);

// setTimeout(() => {
//     stream$.complete();
// }, 5000)

// function getItems<T>(url: string): Observable<T> {
//     let asyncSubject: AsyncSubject<T>;

//     return new Observable(subscriber => {
//         if (!asyncSubject) {
//             asyncSubject = new AsyncSubject<T>();

//             ajax<T>({
//                 url,
//                 crossDomain: true,
//             })
//                 .pipe(map(({response}) => response))
//                 .subscribe(asyncSubject);
//         }

//         const subscription = asyncSubject.subscribe(subscriber);

//         return () => {
//             subscription.unsubscribe();
//         }
//     })
//     // return ajax<T>({
//     //     url,
//     //     crossDomain: true,
//     // }).pipe(map(({response}) => response))
// };

// const items$ = getItems('https://learn.javascript.ru/courses/groups/api/participants?key=r1v5uj');

// items$.subscribe(console.log);

// setTimeout(() => {
//     items$.subscribe(console.log);
// }, 4000)