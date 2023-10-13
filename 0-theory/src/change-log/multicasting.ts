// const subject = new Subject();

// const stream$ = interval(1000).pipe(
//     // multicast(subject),
//     // publish(), // publish = multicast + Subject
//     // refCount(),
//     take(3),
//     tap(console.log),
//     share({
//         connector: () => new Subject(),
//         resetOnComplete: true,
//         resetOnError: true,
//         resetOnRefCountZero: true,
//     }),
// );

// const subscription = new Subscription();

// subscription.add(stream$.subscribe(value => {
//     terminalLog(`Sub 1: ${value}`);
// }));

// setTimeout(() => {
//     subscription.add(stream$.subscribe(value => {
//         terminalLog(`Sub 2: ${value}`);
//     }))
// }, 3000);

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 5000);

// setTimeout(() => {
//     stream$.subscribe(value => {
//         terminalLog(`Sub 3: ${value}`);
//     })
// }, 7000);