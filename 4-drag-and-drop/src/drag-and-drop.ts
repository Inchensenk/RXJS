import { fromEvent, map, mergeMap, Observable, switchMap, takeUntil, tap } from "rxjs";

interface ElementPosition {
    top: number;
    left: number;
}

export function dragElement$(element: HTMLElement): Observable<ElementPosition> {
    const elementMousedown$ = fromEvent<MouseEvent>(element, 'mousedown');
    const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
    const mouseup$ = fromEvent<MouseEvent>(document, 'mouseup');

    return drag$(
        elementMousedown$,
        mousemove$,
        mouseup$
    )
}

function drag$(
    mosedown$: Observable<MouseEvent>,
    mousemove$: Observable<MouseEvent>,
    mouseup$: Observable<MouseEvent>,
): Observable<ElementPosition> {
    return mosedown$.pipe(
        tap(event => {
            event.preventDefault();
        }),
        // offsetX, offsetY - отступы от границ контейнера
        switchMap(({offsetX, offsetY}: MouseEvent) => mousemove$.pipe(
            tap(event => {
                event.preventDefault();
            }),
            map(({clientX, clientY}: MouseEvent): ElementPosition => ({
                top: clientY - offsetY,
                left: clientX - offsetX,
            })),
            tap(console.log),
            takeUntil(mouseup$),
        )),
    )
}
