import { animationFrameScheduler, asapScheduler, interval, map, Observable, takeWhile } from "rxjs";

const animationFn = (percentage: number) => {
    return Math.sin(-13 * (percentage + 1) * Math.PI * 2) * Math.pow(2, -10 * percentage) + 1;
}

function time$(): Observable<number> {
    const startTime = animationFrameScheduler.now();

    return interval(0, animationFrameScheduler).pipe(
        map(() => animationFrameScheduler.now() - startTime),
    );
}

function duration$(allMs: number): Observable<number> {
    return time$().pipe(
        map(time => time / allMs),
        takeWhile(procentage => procentage <= 1),
    )
}

const diff = 100;

export function getAnimateElementPosition$(anumationTime: number): Observable<number> {
    return duration$(anumationTime).pipe(
        map(animationFn),
        map(percentage => percentage * diff),
    )
}