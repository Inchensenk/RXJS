import '../../assets/css/style.css';
import { getAnimateElementPosition$ } from './animate';
import  './styles.css';

getAnimateElementPosition$(20000).subscribe(diff => {
    (document.querySelector('.animated-shape') as HTMLElement).style.transform = `translateY(${diff}px)`;
})