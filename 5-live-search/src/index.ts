import 'bootstrap';
import { fromEvent, map } from 'rxjs';
import '../../assets/css/style.css';
import { liveSearch } from './live-search';
import  './styles.css';
import {Card} from './card.interface';
import { requestToHtmlString } from './request-to-html-string';

const inputElement = document.getElementById('search') as HTMLInputElement;
const containerElement = document.querySelector('.container') as HTMLDivElement;

fromEvent<InputEvent>(inputElement, 'input')
    .pipe(
        map(({target}) => (target as HTMLInputElement).value),
        liveSearch<{items: Card[]}>(q => `https://api.github.com/search/repositories?q=${q}`),
        map(({items}) => requestToHtmlString(items)),
    )
    .subscribe(htmlString => {
        containerElement.innerHTML = htmlString;
    });