import { AsyncSubject, map, Observable, share, shareReplay } from "rxjs";
import { ajax } from "rxjs/ajax";
import { User } from "./user.interface";

class UserService {
    uniqueNameSequence$: Observable<string[]> = ajax<User[]>({
        url: 'https://learn.javascript.ru/courses/groups/api/participants?key=r1v5uj',
        crossDomain: true,
        method: 'GET',
    }).pipe(
        map(({response}) => response.map(({profileName}) => profileName)),
        // share({
        //     connector: () => new AsyncSubject(),
        //     resetOnComplete: false,
        // })
        shareReplay(1),
    )
}

export const userService = new UserService();