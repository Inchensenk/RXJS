import { filter, fromEvent, map, merge, Observable, tap, zip } from 'rxjs';
import '../../assets/css/style.css';

const down$ = merge(
    fromEvent<MouseEvent>(document, 'mousedown'),
    fromEvent<TouchEvent>(document, 'touchstart'),
);
const up$ = merge(
    fromEvent<MouseEvent>(document, 'mouseup'),
    fromEvent<TouchEvent>(document, 'touchend'),
);

function getXPosition(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent
        ? event.clientX
        : event.changedTouches.item(0)!.clientX;
}

export const swipe$ = swipeFn$(
    down$,
    up$,
);

export function swipeFn$(
    downEvent$: Observable<MouseEvent | TouchEvent>,
    upEvent$: Observable<MouseEvent | TouchEvent>,
): Observable<number> {
    return zip(
        downEvent$.pipe(map(getXPosition)),
        upEvent$.pipe(map(getXPosition))
    ).pipe(
        map(([start, end]) => start - end),
        // tap(value => {
        //     console.log('diff', value);
        // }),
        filter<number>(diff => Math.abs(diff) > 30),
    );
}