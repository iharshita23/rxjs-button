import {
  of,
  fromEvent,
  from,
  Observable,
  map,
  filter,
  takeUntil,
  tap,
} from 'rxjs';

const myInput = document.querySelector('input');

const myEvent = fromEvent(myInput, 'keyup');
const stop$ = fromEvent(document.querySelector('button'), 'click').pipe(
  tap(() => {
    (resultSpan as HTMLParagraphElement).innerText = '';
  })
);
const resultSpan = document.querySelector('#result');

myEvent
  .pipe(
    map((evnt: KeyboardEvent) => (evnt.target as HTMLInputElement).value),
    filter((val) => val.length > 0),
    takeUntil(stop$)
  )
  .subscribe((value) => {
    (resultSpan as HTMLParagraphElement).innerText = value;
  });

// console.log('before observable');

// const p = new Promise((res) => {
//   setTimeout(() => {
//     console.log('within timeout');
//     res({});
//   }, 100);
// })

// from(p)
//   .subscribe((val) => {
//     console.log('val', val);
//   })

// of(10).subscribe({
//   next: (val) => {
//     console.log(val);
//   },
// });

// console.log('after observable');
