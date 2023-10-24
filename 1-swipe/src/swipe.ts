import { filter, fromEvent, map, merge, zip } from 'rxjs';
import '../../assets/css/style.css';
/*
//Поток по зажатию мыши
const down$ = merge(
  fromEvent<MouseEvent>(document, 'mousedown'),
  fromEvent<TouchEvent>(document, 'touchstart'),
);
//Поток по отжатию мыши
const up$ = merge(
  fromEvent<MouseEvent>(document, 'mouseup'),
  fromEvent<TouchEvent>(document, 'touchend'),
);

function getXPosition(event: MouseEvent | TouchEvent): number {
  return event instanceof MouseEvent ? event.clientX : event.changedTouches.item(0)!.clientX;
}

export const swipe$ = swipeFn$(down$, up$);

export function swipeFn$(
  downEvent$: Observable<MouseEvent | TouchEvent>,
  upEvent$: Observable<MouseEvent | TouchEvent>,
): Observable<number> {
  return zip(downEvent$.pipe(map(getXPosition)), upEvent$.pipe(map(getXPosition))).pipe(
    map(([start, end]) => start - end),
    // tap(value => {
    //     console.log('diff', value);
    // }),
    filter<number>((diff) => Math.abs(diff) > 30),
  );
}
*/

/* //Пример1: использование оператора zip() для вычисления свайпа на странице 
const down$ = fromEvent<MouseEvent>(document, 'mousedown');
const up$ = fromEvent<MouseEvent>(document, 'mouseup');

function getXPosition(event: MouseEvent): number {
  return event.clientX;
}

export const swipe$ = zip(down$.pipe(map(getXPosition)), up$.pipe(map(getXPosition))).pipe(
  map(([start, end]) => start - end),
  filter((diff) => Math.abs(diff) > 30),
);
*/

/* //Пример 2: Дебажим с помощью оператора tap(): какой diff формируется до фильтра
const down$ = fromEvent<MouseEvent>(document, 'mousedown');
const up$ = fromEvent<MouseEvent>(document, 'mouseup');

function getXPosition(event: MouseEvent): number {
  return event.clientX;
}

export const swipe$ = zip(down$.pipe(map(getXPosition)), up$.pipe(map(getXPosition))).pipe(
  map(([start, end]) => start - end),
  tap((value) => {
    console.log('diff', value);
  }),
  filter((diff) => Math.abs(diff) > 30),
);
*/

/* //Пример 3: Добавляем оператор merge() для комбинации 2х типов событий
//и тип события TouchEvent для работы свайпа в мобильной версии */

const down$ = merge(
  //Событие для десктопной версии
  fromEvent<MouseEvent>(document, 'mousedown'),
  //Событие для мобильной версии
  fromEvent<TouchEvent>(document, 'touchstart'),
);
const up$ = merge(
  //Событие для десктопной версии
  fromEvent<MouseEvent>(document, 'mouseup'),
  //Событие для мобильной версии
  fromEvent<TouchEvent>(document, 'touchend'),
);

function getXPosition(event: MouseEvent | TouchEvent): number {
  return event instanceof MouseEvent ? event.clientX : event.changedTouches.item(0)!.clientX;
}

export const swipe$ = zip(down$.pipe(map(getXPosition)), up$.pipe(map(getXPosition))).pipe(
  map(([start, end]) => start - end),
  // tap((value) => {
  //   console.log('diff', value);
  // }),
  filter((diff) => Math.abs(diff) > 30),
);
