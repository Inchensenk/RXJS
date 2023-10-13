// interval(1000).subscribe(terminalLog);
// timer(6000, 1000).subscribe(terminalLog);

// of(1, 2, [3, 2], {count: 4}).subscribe(terminalLog)
// from([1, 2, [3, 2], {count: 4}]).subscribe(terminalLog);

// function* iteratorFn(seed: number, max: number) {
//     let i = seed;

//     while (i < max) {
//         yield i;

//         i += 1;
//     }
// };

// const iterator = iteratorFn(3, 1000);

// from(iterator).subscribe(x => {
//     terminalLog(x);
// })

// from(
//     fetch('https://learn.javascript.ru/courses/groups/api/participants?key=r1v5uj').then(res => res.json())
// ).subscribe(console.log);

// ajax({
//     url: 'https://learn.javascript.ru/courses/groups/api/participants?key=r1v5uj',
//     crossDomain: true,
//     method: 'GET'
// }).subscribe(console.log);

// const stream$ = defer(() => {
//     const random = Math.round(Math.random() * 10);

//     if (random > 8) {
//         return of('True 8');
//     }

//     return random > 5 ? of('True 5') : of('False ' + random);
// })

// stream$.subscribe(terminalLog);
// stream$.subscribe(terminalLog);
// stream$.subscribe(terminalLog);
// stream$.subscribe(terminalLog);

// const stream$ = iif(
//     () => Math.round(Math.random() * 10) > 5,
//     of('True 5'),
//     of('False 5'),
// )

// stream$.subscribe(terminalLog);
// stream$.subscribe(terminalLog);
// stream$.subscribe(terminalLog);
// stream$.subscribe(terminalLog);

