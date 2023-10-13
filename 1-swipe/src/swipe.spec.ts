import { swipeFn$ } from "./swipe";
import { TestScheduler } from "rxjs/testing"

// describe('Test', () => {
//     let testScheduler: TestScheduler;

//     beforeEach(() => {
//         testScheduler = new TestScheduler((actual, expected) => {
//             expect(actual).toEqual(expected);
//         });
//     });

//     it('', () => {
//         testScheduler.run(({cold, expectObservable}) => {
            
//         })
//     })
// })

function createEvent(x: number): TouchEvent {
    return new TouchEvent('event', {
        changedTouches: [
            new Touch({clientX: x, identifier: 1, target: new EventTarget()}),
        ]
    })
}

describe('Swipe', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('swipe first', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const touchStart$ = cold(
                '-a----b-----------|',
                {
                    a: createEvent(2),
                    b: createEvent(30),
                }
            );
            const touchEnd$ = cold(
                '----a----b-----c--|',
                {
                    a: createEvent(40),
                    b: createEvent(20),
                    c: createEvent(10),
                }
            );

            const swipe$ = swipeFn$(
                touchStart$,
                touchEnd$,
            );

            const expectedMarbles = '----a-------------|';
            const expectedValue = {
                a: -38,
            };

            expectObservable(swipe$).toBe(expectedMarbles, expectedValue)
        })
    })

    it('swipe last', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const touchStart$ = cold(
                '-a----b-----------|',
                {
                    a: createEvent(0),
                    b: createEvent(999),
                }
            );
            const touchEnd$ = cold(
                '----a----b-----c--|',
                {
                    a: createEvent(500),
                    b: createEvent(666),
                    c: createEvent(10),
                }
            );

            const swipe$ = swipeFn$(
                touchStart$,
                touchEnd$,
            );

            const expectedMarbles = '----a----b--------|';
            const expectedValue = {
                a: -500,
                b: 333,
            };

            expectObservable(swipe$).toBe(expectedMarbles, expectedValue)
        })
    })
})
