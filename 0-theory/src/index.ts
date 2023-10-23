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

/* Шаблонный поток основанный на setInterval
interval(1000).subscribe(terminalLog);
 */

/* Шаблонный поток основанный на setTimeout 
timer(1000).subscribe(terminalLog);
*/

/* Шаблонный поток основанный на setTimeout и setInterval 
timer(через сколько секунд, с каким интервалом).subscribe(terminalLog);
timer(6000, 1000).subscribe(terminalLog);
*/
/* Шаблонный поток, который синхронно испускает значения переданные ему в аргументе
of(1, 2, [3, 2], { count: 4 }).subscribe(terminalLog);
*/
/**Шаблонный поток, который принимает массив значений либо любой итерируемый объект 
from([1, 2, [3, 2, 5], { count: 4 }]).subscribe(terminalLog);
*/

/** Пример from с итерируемым объектом (генератор)
function* iteratorFn(seed: number, max: number) {
  let i = seed;

  while (i < max) {
    yield i;
    i++;
  }
}

const iterator = iteratorFn(3, 1000);

from(iterator).subscribe((x) => {
  terminalLog(x);
});
*/

/** Пример from с promise
from(
  fetch('https://learn.javascript.ru/courses/groups/api/participants?key=r1v5uj').then((res) =>
    res.json(),
  ),
).subscribe(console.log);
*/

/*Пример from с promise
from(Promise.resolve(4000)).subscribe(console.log);
*/
/* Пример ajax() функция RxJS для запросов.(Функционал такой же как выше from с fetch)
ajax({
  url: 'https://learn.javascript.ru/courses/groups/api/participants?key=r1v5uj',
  method: 'GET',
}).subscribe(console.log);
*/

/** defer() создает холодный поток на основе колбэка
const stream$ = defer(() => {
  const random = Math.round(Math.random() * 10);
  if (random > 8) {
    return of('TRUE 8');
  } else {
    return random > 5 ? of('TRUE 5') : of(`FALSE ${random}`);
  }
});

stream$.subscribe(terminalLog);
stream$.subscribe(terminalLog);
stream$.subscribe(terminalLog);
stream$.subscribe(terminalLog);
stream$.subscribe(terminalLog);
*/

/* Частный случай defer(). 
iif() возвращает TRUE, либо FALSE 
и в зависимости от этого возвращает поток либо из второго аргумента либо из третьего

const stream$ = iif(() => Math.round(Math.random() * 10) > 5, of('TRUE'), of(`FALSE`));
stream$.subscribe(terminalLog);
stream$.subscribe(terminalLog);
stream$.subscribe(terminalLog);
stream$.subscribe(terminalLog);
stream$.subscribe(terminalLog);
*/

/* Мраморная диаграмма

const stream$ = interval(1000);

//Мраморная диаграмма
// --- === 1000ms(1s) === 1frame
// | === поток завершился === .complete()

// ---0---1---2---3---4---5---6---7---8---9---10-...---∞

// take: 10 === взяли 10 значений
//---0---1---2---3---4---5---6---7---8---9|

//map: x * 2 === умножаем каждое значение потока на 2
//---0---2---4---6---8---10---12---14---16---18|

// filter: x % 3 === отфильтруем те числа которые кратны 3-м
//---0--- --- ---6--- --- ---12--- --- ---18|

// skip: 2 === из оставшейся последовательности мне нужно пропустить 2 значения
//--- --- --- --- --- --- ---12--- --- ---18|

// take: 1 === хочу получить только 1 значение
//--- --- --- --- --- --- ---12|

//pipe() позволит задать последовательность операторов RxJS.
// После каждого оператора, изначальный поток будет меняться
stream$
  // ---0---1---2---3---4---5---6---7---8---9---10-...---∞
  .pipe(
    take(10),
    //---0---1---2---3---4---5---6---7---8---9|
    map((x) => x * 2),
    //---0---2---4---6---8---10---12---14---16---18|
    filter((x) => x % 3 === 0),
    //---0--- --- ---6--- --- ---12--- --- ---18|
    skip(2),
    //--- --- --- --- --- --- ---12--- --- ---18|
    take(1),
    //--- --- --- --- --- --- ---12|
  )
  .subscribe(terminalLog);
  */

/* Оператор tap() 
const stream$ = interval(1000);

stream$
  .pipe(
    take(10),
    map((x) => x * 2),
    tap((value) => {
      console.log(value);
    }),
    filter((x) => x % 3 === 0),
    skip(2),
    take(1),
  )
  .subscribe(terminalLog);
  */
