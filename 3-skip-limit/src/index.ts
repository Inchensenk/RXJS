import { of, tap } from 'rxjs';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';
import { skipLimit } from './skip-limit';

of(1, 2, 3, 4, 5, 6).pipe(tap(console.log), skipLimit(4, 2)).subscribe(terminalLog);

//interval(1000).pipe(tap(console.log), skipLimit(10, 1), tap(terminalLog)).subscribe();
