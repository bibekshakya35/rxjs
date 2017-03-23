import $ from 'jquery';
import Rx from 'rxjs/Rx';

const numbers = [33, 34, 52, 45];
const numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe(
    //arrow function
    v => {
        console.log(v);
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('complete');
    }

);
const posts = [
    { title: 'postOne', body: 'this is the body' },
    { title: 'postOne', body: 'this is the body' },
    { title: 'postOne', body: 'this is the body' },
    { title: 'postOne', body: 'this is the body' },
];
const posts$ = Rx.Observable.from(posts);
posts$.subscribe(
    //arrow function
    post => {
        console.log(post);
        $("#posts").append('<li><h3>' + post.title + '</h3><p>' + post.body + '</p></li>')
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('complete');
    }
);

// var clicks = 0;
// document.addEventListener('click',function registerClicks(e){
//     if(clicks<10){
//         console.log("inside click");
//         if(e.clientX > window.innerWidth/2){
//             clicks+=1;
//             console.log("inside click"+clicks);
//         }
//     }
//     else{
//         document.removeEventListener('click',registerClicks);
//     }
// });

Rx.Observable.fromEvent(document, 'click')
    .filter(function (c) { return c.clientX > window.innerWidth / 2 })
    .take(10)
    .subscribe(function (c) {
        console.log("this is "+c.clientX, c.clientY);
    });
