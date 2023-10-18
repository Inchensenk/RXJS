import { Observable, Subscriber, Subscription } from 'rxjs';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';

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