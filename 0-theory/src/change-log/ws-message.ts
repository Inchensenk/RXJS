// const ws = new WebSocket('ws://localhost:8081');

// ws.onopen = () => {
//     ws.send('on');
// };

// export const wsMessage$ = new Observable<MessageEvent>(subscriber => {
//     console.log('CREATE');

//     function messageListener(message: MessageEvent) {
//         subscriber.next(message);

//         console.log('NEXT');
//     }

//     function closeListener() {
//         subscriber.complete();
//     }

//     ws.addEventListener('message', messageListener);
//     ws.addEventListener('close', closeListener);

//     return () => {
//         ws.removeEventListener('message', messageListener);
//         ws.removeEventListener('close', closeListener);

//         console.log('DESTROY')
//     }
// });

// const subscription = wsMessage$.subscribe(value => {
//     terminalLog(`subscribe - 1: ${value.data}`);
// })

// setTimeout(() => {
//     wsMessage$.subscribe(value => {
//         terminalLog(`subscribe - 2: ${value.data}`);
//     })
// }, 2000);

// setTimeout(() => {
//     // ws.close();
//     subscription.unsubscribe();
// }, 5000)