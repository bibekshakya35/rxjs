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
    {title : 'postOne',body:'this is the body'},
    {title : 'postOne',body:'this is the body'},
    {title : 'postOne',body:'this is the body'},
    {title : 'postOne',body:'this is the body'},
];
const posts$ =Rx.Observable.from(posts);
posts$.subscribe(
    //arrow function
    post => {
        console.log(post);
        $("#posts").append('<li><h3>'+post.title+'</h3><p>'+post.body+'</p></li>')
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('complete');
    }
);

