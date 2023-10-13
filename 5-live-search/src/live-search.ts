import { catchError, debounceTime, distinctUntilChanged, EMPTY, filter, map, OperatorFunction, pipe, retry, RetryConfig, switchMap, timer } from "rxjs";
import { ajax, AjaxConfig } from "rxjs/ajax";

export function liveSearch<T>(
    urlCreater: (searchParam: string) => string,
    requestConfig: Omit<AjaxConfig, 'url'> = {crossDomain: true},
): OperatorFunction<string, T> {
    return pipe(
        debounceTime(300),
        filter<string>(searchParam => searchParam.length > 3),
        distinctUntilChanged(),
        map<string, AjaxConfig>(searchParam => ({
            ...requestConfig,
            url: urlCreater(searchParam),
        })),
        switchMap(ajaxConfig => ajax<T>(ajaxConfig).pipe(
            map(({response}) => response),
            retry(3),
            // retry({
            //     count: 3,
            //     delay: (error, errorCount) => {
            //         console.warn('delay', error, errorCount);

            //         return timer(1000);
            //     },
            // } as RetryConfig),
            catchError((err) => {
                console.warn(err);

                return EMPTY;
            }),
        )),
    )
}