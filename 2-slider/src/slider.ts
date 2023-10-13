import { fromEvent, map, Observable, OperatorFunction, startWith, tap } from "rxjs";

interface JQueryEvent {
    value: {
        newValue: number;
    }
}

enum SliderClass {
    Good = 'good',
    Warn = 'warn',
    Bad = 'bad',
}

function getNewValue(event: JQueryEvent): number {
    return event.value.newValue;
}

function colorizeSliderByValue(element: Element, value: number) {
    element.classList.remove(SliderClass.Bad, SliderClass.Warn, SliderClass.Good);

    if (value < 4) {
        element.classList.add(SliderClass.Bad);

        return;
    }

    if (value <= 7) {
        element.classList.add(SliderClass.Warn);

        return;
    }

    element.classList.add(SliderClass.Good);
}

function colorizeSlider(jqueryElement: JQuery<HTMLElement>): OperatorFunction<number, number> {
    const element = jqueryElement.prev().get(0).querySelector('.slider-track') as Element;

    return tap(sliderValue => {
        colorizeSliderByValue(element, sliderValue)
    })
}

export function createSlider$(sliderId: string): Observable<number> {
    const jquerySlider = $(`#${sliderId}`).slider();
    const startValue = Number(jquerySlider.val());

    return fromEvent<JQueryEvent>(jquerySlider, 'change')
        .pipe(
            map(event => event.value.newValue),
            startWith(startValue),
            colorizeSlider(jquerySlider),
        );
}

// const qualitySlider = $('#quality').slider();
// const ratingSlider = $('#rating').slider();
// const actualSlider = $('#actual').slider();

// const qualitySliderChangeEvent$ = fromEvent<JQueryEvent>(qualitySlider, 'change')
//     .pipe(
//         map(getNewValue),
//         startWith(qualitySlider.val() as number),
//         colorizeSlider(qualitySlider),
//     );

// const qualitySliderChangeEvent$ = createSlider$('quality');
// const ratingSliderChangeEvent$ = createSlider$('rating');
// const actualSliderChangeEvent$ = createSlider$('actual');


// qualitySliderChangeEvent$.subscribe(console.log);
// ratingSliderChangeEvent$.subscribe(console.log);
// actualSliderChangeEvent$.subscribe(console.log);