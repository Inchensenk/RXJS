import { interval, of, tap } from 'rxjs';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';
import { skipLimit } from './skip-limit';

of(1,2,3,4,5,6)
    .pipe(
        tap(console.log),
        skipLimit(5, 2)
    )
    .subscribe(terminalLog);