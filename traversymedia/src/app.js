import $ from 'jquery';
import RX from 'rxjs';

console.log("RX JS RUNNING");
const btn = $('#btn');
const btnStream$ = RX.Observable.fromEvent(btn, 'click');
const input = $("#input");
const output = $("#output");
const inputStream$ = RX.Observable.fromEvent(input, 'keyup');
btnStream$.subscribe(
    (e) => {
        console.log(e.target.innerHTML);
    },
    (err) => {
        console.log(err)
    },
    () => {
        console.log('completed');
    });

inputStream$.subscribe(
    (e) => {
        console.log(e.target.value);

    },
    (err) => {
        console.log(err)
    },
    () => {
        console.log('completed');
    });
const moveStream$ = RX.Observable.fromEvent(document, 'mousemove');

moveStream$.subscribe(
    (e) => {
        output.html('X : ' + e.clientX + 'Y: ' + e.clientY);
    }
)