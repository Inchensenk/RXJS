import '../../assets/css/style.css';

/* Пример 1
const sequence = new Promise(resolve =>{
    let count = 0;

    setInterval(()=>{
        count += 1;

        console.log('setInterval', count);
        
        resolve(count)
    }, 1000)
});

sequence.then(value => {
    terminalLog(value);
});

setTimeout(() => {
    sequence.then(value => {
        terminalLog(value);
    });
}, 1000);
*/

/* Пример 2
const sequence = (function* iteratorFn(){
    let count = 0;

    while(true){
        count++;

        console.log('iteratorFn', count);

        yield count;
    }
})();

terminalLog(sequence.next().value);

setTimeout(() => {
    terminalLog(sequence.next().value);
}, 2000);

setTimeout(() => {
    terminalLog(sequence.next().value);
}, 3000);
*/

/* Пример 3
const sequence$: Observable<any> = interval(1000);

sequence$.subscribe((value) =>{
    terminalLog(value)
})
*/

/**Пример 4 
const sequence$ = new Observable<number>((subscriber: Subscriber<number>) =>{
    let count = 0;

    setInterval(()=>{
        count += 1;

        console.log('setInterval', count);
        
        subscriber.next(count)
    }, 1000)
});

sequence$.subscribe(value => {
    terminalLog(`subscribe-1: ${value}`);
});

setTimeout(()=>{
    sequence$.subscribe(value => {
    terminalLog(`subscribe-2: ${value}`);
});
}, 3000)
*/

/**Пример 5
const sequence$ = new Observable<number>((subscriber: Subscriber<number>) =>{
    let count = 0;

    setInterval(()=>{
        

        //console.log('setInterval', count);
        console.log(`new counter ${count}`);
        
        if(count === 5){
            subscriber.complete();
        }

        subscriber.next(count)
        

        count += 1;
    }, 1000)
});

sequence$.subscribe(value => {
    terminalLog(`subscribe-1: ${value}`);
});
*/

/*пример 6
const sequence$ = new Observable<number>((subscriber: Subscriber<number>) =>{
    let count = 0;

    setInterval(()=>{
        
        console.log(`new counter ${count}`);
        
        if(count === 5){
            subscriber.error(`count = ${count}`);
        }

        subscriber.next(count)
        

        count += 1;
    }, 1000)
});

sequence$.subscribe(value => {
    terminalLog(`subscribe-1: ${value}`);
});const sequence$ = new Observable<number>((subscriber: Subscriber<number>) =>{
    let count = 0;

    setInterval(()=>{
        
        console.log(`new counter ${count}`);
        
        if(count === 5){
            subscriber.error(`count = ${count}`);
        }

        subscriber.next(count)
        

        count += 1;
    }, 1000)
});

sequence$.subscribe(value => {
    terminalLog(`subscribe-1: ${value}`);
});
*/
/*пример 7 Свойства Subscribe (enext: complete: error:)
const sequence$ = new Observable<number>((subscriber: Subscriber<number>) =>{
    let count = 0;

    setInterval(()=>{
        
        console.log(`new counter ${count}`);
        
        if(count === 5){
            subscriber.error(`count = ${count}`);
        }

        subscriber.next(count)
        

        count += 1;
    }, 1000)
});

sequence$.subscribe({
        next: (value) => {
        terminalLog(`subscribe-1: ${value}`);
    },
    complete: () => {
        terminalLog(`complete`);
    },
    error: (err) =>{
        terminalLog(`error: ${err}`);
    }
});
*/

/*пример 8 Свойства Subscribe (enext: complete: error:)
const sequence$ = new Observable<number>((subscriber: Subscriber<number>) =>{
    let count = 0;

    setInterval(()=>{
        
        console.log(`new counter ${count}`);
        
        if(count === 5){
            //subscriber.error(`count = ${count}`);
            subscriber.complete();
        }

        subscriber.next(count)
        

        count += 1;
    }, 1000)
});

sequence$.subscribe({
        next: (value) => {
        terminalLog(`subscribe-1: ${value}`);
    },
    complete: () => {
        terminalLog(`complete`);
    },
    error: (err) =>{
        terminalLog(`error: ${err}`);
    }
});

*/
/*пример 8 уничтожение setInterval
const sequence$ = new Observable<number>((subscriber: Subscriber<number>) =>{
    console.log('CREATE');
    
    let count = 0;

    const intervalId = setInterval(()=>{
        
        console.log(`new counter ${count}`);
        
        if(count === 5){
            //subscriber.error(`count = ${count}`);
            //console.log('ERROR');
            
            subscriber.complete();
            console.log('COMPLETE');
                return;
        }

        subscriber.next(count)
        console.log('NEXT');

        count += 1;
    }, 1000)

    return () => {
        clearInterval(intervalId);
        console.log('DESTROY');
        
    }
});

sequence$.subscribe({
        next: (value) => {
        terminalLog(`subscribe-1: ${value}`);
    },
    complete: () => {
        terminalLog(`complete`);
    },
    error: (err) =>{
        terminalLog(`error: ${err}`);
    }
});
*/
/*пример 9 отписка от потока
const sequence$ = new Observable<number>((subscriber: Subscriber<number>) => {
  console.log('CREATE');

  let count = 0;

  const intervalId = setInterval(() => {
    console.log(`new counter ${count}`);

    if (count === 5) {
      //subscriber.error(`count = ${count}`);
      //console.log('ERROR');

      subscriber.complete();
      console.log('COMPLETE');
      return;
    }

    subscriber.next(count);
    console.log('NEXT');

    count += 1;
  }, 1000);

  return () => {
    clearInterval(intervalId);
    console.log('DESTROY');
  };
});

const subscription: Subscription = sequence$.subscribe({
  next: (value) => {
    terminalLog(`subscribe-1: ${value}`);
  },
  complete: () => {
    terminalLog(`complete`);
  },
  error: (err) => {
    terminalLog(`error: ${err}`);
  },
});

setTimeout(() => {
  subscription.unsubscribe();
}, 3000);

setTimeout(() => {
  const subscription: Subscription = sequence$.subscribe({
    next: (value) => {
      terminalLog(`subscribe-2: ${value}`);
    },
    complete: () => {
      terminalLog(`complete`);
    },
    error: (err) => {
      terminalLog(`error: ${err}`);
    },
  });

  setTimeout(() => {
    console.log(subscription.closed);
    subscription.unsubscribe();
    console.log(subscription.closed);
  }, 4000);
}, 5000);
*/

/*пример 10 отписка от потока
const sequence$ = new Observable<number>((subscriber: Subscriber<number>) => {
  console.log('CREATE');

  let count = 0;

  const intervalId = setInterval(() => {
    console.log(`new counter ${count}`);

    if (count === 5) {
      //subscriber.error(`count = ${count}`);
      //console.log('ERROR');

      subscriber.complete();
      console.log('COMPLETE');
      return;
    }

    subscriber.next(count);
    console.log('NEXT');

    count += 1;
  }, 1000);

  return () => {
    clearInterval(intervalId);
    console.log('DESTROY');
  };
});

const allSubscription = new Subscription();

const subscription: Subscription = sequence$.subscribe({
  next: (value) => {
    terminalLog(`subscribe-1: ${value}`);
  },
  complete: () => {
    terminalLog(`complete`);
  },
  error: (err) => {
    terminalLog(`error: ${err}`);
  },
});

allSubscription.add(subscription);

setTimeout(() => {
  const subscription: Subscription = sequence$.subscribe({
    next: (value) => {
      terminalLog(`subscribe-2: ${value}`);
    },
    complete: () => {
      terminalLog(`complete`);
    },
    error: (err) => {
      terminalLog(`error: ${err}`);
    },
  });

allSubscription.add(subscription);

}, 2000);

setTimeout(()=>{
allSubscription.unsubscribe();
}, 4500);

*/

/*пример 11 горячий поток
let count = 0;

const sequence$ = new Observable<number>((subscriber: Subscriber<number>) => {
  console.log('CREATE');


  const intervalId = setInterval(() => {
    console.log(`new counter ${count}`);

    if (count === 5) {
      //subscriber.error(`count = ${count}`);
      //console.log('ERROR');

      subscriber.complete();
      console.log('COMPLETE');
      return;
    }

    subscriber.next(count);
    console.log('NEXT');

    count += 1;
  }, 1000);

  return () => {
    clearInterval(intervalId);
    console.log('DESTROY');
  };
});

const allSubscription = new Subscription();

const subscription: Subscription = sequence$.subscribe({
  next: (value) => {
    terminalLog(`subscribe-1: ${value}`);
  },
  complete: () => {
    terminalLog(`complete`);
  },
  error: (err) => {
    terminalLog(`error: ${err}`);
  },
});

allSubscription.add(subscription);

setTimeout(() => {
  const subscription: Subscription = sequence$.subscribe({
    next: (value) => {
      terminalLog(`subscribe-2: ${value}`);
    },
    complete: () => {
      terminalLog(`complete`);
    },
    error: (err) => {
      terminalLog(`error: ${err}`);
    },
  });

allSubscription.add(subscription);

}, 2000);

setTimeout(()=>{
allSubscription.unsubscribe();
}, 4500);
*/

/*пример 12 горячий поток
const ws = new WebSocket('ws://localhost:8081');

ws.onopen = () => {
  ws.send('on');
};

const wsMessage$ = new Observable<MessageEvent>((subscriber) => {
  console.log('CREATE');

  function messageListener(message: MessageEvent) {
    subscriber.next(message);

    console.log('NEXT');
  }

  function closeListener() {
    subscriber.complete();
  }

  ws.addEventListener('message', messageListener);

  ws.addEventListener('close', closeListener);

  return () => {
    ws.removeEventListener('message', messageListener);
    ws.removeEventListener('close', closeListener);

    console.log('DESTROY');
  };
});

const subscription = wsMessage$.subscribe((value) => {
  terminalLog(`subscribe-1: ${value.data}`);
});

setTimeout(() => {
  wsMessage$.subscribe((value) => {
    terminalLog(`subscribe-2: ${value.data}`);
  });
}, 2000);

setTimeout(() => {
  //ws.close();
  subscription.unsubscribe();
}, 5000);



Если смотреть со стороны паттерна ReactiveX то этот поток горячий, потому что хранилище и соответсвенно двигатель нашего потока находится вне конструктора. 
То есть внутри конструктора мы просто слушаем какойто  внешний двигатеоль. Соответсвенно внешним двигателем выступает WebSocket. 
Соответсвенно если мы будем подписываться на данный поток сразу или через сеттаймаут через какое то время, 
в любом случае все подписчики будут получать синхронно одно и то же событие.

По поведению, если смотреть на наш поток со стороны паттерна, является горячим. Все подписчики получают одно и то же значение.
Потому что хранилище и движок находится вне конструктора. То есть он единый для всех потоков.

Но именно в реализации паттерна в библиотеке RxJS наш поток является холодным. Мы не сделали его по настоящему горячим.
Конструктор, а именно сердце потока, все таки вызывается каждый раз когда мы создаем новую подписку.

Если смотреть со стороны паттерна все ок, поток горячий, но со стороны RxJS поток холодный.

А вот чтобы этот холодный поток превратить в понастоящему горячий, нам нужен оператор мультикастинга.
*/
