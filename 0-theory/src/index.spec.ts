import { map } from "rxjs";
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

describe('Test', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('cold test', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const stream$ = cold(
                '-a--b---c---|',
                {
                    a: 1,
                    b: 6,
                    c: 10,
                }
            );
            const finalStream$ = stream$.pipe(
                map(v => v * 2),
            );

            const expectedMarbles = '-a--b---c---|';
            const expectedMarblesValueMap = {
                a: 2,
                b: 12,
                c: 20,
            };

            expectObservable(finalStream$).toBe(expectedMarbles, expectedMarblesValueMap);
        })
    })

    it('hot test', () => {
        testScheduler.run(({hot, expectObservable}) => {
            const stream$ = hot(
                '-a--b---c------d',
                {
                    a: 1,
                    b: 6,
                    c: 10,
                    d: 100,
                }
            );
            const finalStream$ = stream$.pipe(
                map(v => v * 3),
            );

            const subscriptionMarbles = '----^--------!'
            const expectedMarbles =     '----b---c----';
            const expectedMarblesValueMap = {
                b: 18,
                c: 30,
            };

            expectObservable(finalStream$, subscriptionMarbles).toBe(expectedMarbles, expectedMarblesValueMap);
        })
    })
})