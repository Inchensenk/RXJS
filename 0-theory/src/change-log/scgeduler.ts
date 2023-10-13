// const indexesArray = Array.from({length: 10}).map((_, i) => i);

// interval(1000).subscribe(terminalLog);
// from(indexesArray.map(v => `Old ${v}`)).subscribe(terminalLog);
// from(indexesArray.map(v => `New ${v}`)).subscribe(terminalLog); // indexesArray.map(v => `New ${v}`).forEach(terminalLog)

// subscriber => {
//     [].forEach(value => subscriber.next(value))
// }

// scheduled(indexesArray.map(v => `New ${v}`), asyncScheduler).subscribe(terminalLog);
// scheduled(indexesArray.map(v => `Old ${v}`), asyncScheduler).subscribe(terminalLog);


// from(indexesArray)
//     .pipe(
//         tap(() => {
//             console.log('from operator');
//         }),
//         observeOn(asyncScheduler),
//         tap(() => {
//             console.log('before async scheduler');
//         }),
//         subscribeOn(asapScheduler),
//     )
//     .subscribe(console.log);

// from(indexesArray.map(v => `Old ${v}`))
//     .subscribe(console.log);

// const stream1$ = scheduled([1, 2], asapScheduler);
// const stream2$ = scheduled([5], asyncScheduler);

// const sequence$ = combineLatest([stream1$, stream2$]);

// sequence$.subscribe(console.log);