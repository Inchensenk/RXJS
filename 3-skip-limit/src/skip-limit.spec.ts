import { skipLimit } from "./skip-limit";
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

describe('SkipLimit', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('skip limit without value', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const stream$ = cold(
                '---0---1---2---3---4---5---6---7---8---9---',
            );

            const finalyStream$ = stream$.pipe(skipLimit(2, 2));

            const expectedMarbles = '-----------2---3-----------6---7-----------';

            expectObservable(finalyStream$).toBe(expectedMarbles);
        })
    })

    it('skip limit with value', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const user = {};

            const stream$ = cold(
                '---a---b---c---d---e---f---j',
                {
                    a: '123',
                    b: 0,
                    c: user,
                    d: false,
                    e: true,
                    f: 'test',
                    j: 'look',
                }
            );

            const finalyStream$ = stream$.pipe(skipLimit(1,3));

            const expectedMarbles = '-------b---c---d-------f---j';
            const expectedMarblesValueMap = {
                b: 0,
                c: user,
                d: false,
                f: 'test',
                j: 'look',
            }

            expectObservable(finalyStream$).toBe(expectedMarbles, expectedMarblesValueMap);
        })
    })
})
