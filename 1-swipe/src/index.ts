import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';
import { swipe$ } from './swipe';

swipe$.subscribe(terminalLog);
