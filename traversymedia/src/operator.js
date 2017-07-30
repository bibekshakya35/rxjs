import $ from 'jquery';
import RX from 'rxjs';

const numbers = [33, 44, 55, 66, 77];

const numnbers$ = RX.Observable.from(numbers);
numnbers$.subscribe(v => {
    console.log(v);
},
    err => {
        console.log(err)
    },
    complete => {
        console.log("complete")
    });  

    const posts = [{
        title:'Post One',
        body:'POST IS BODY 1'
    },{
        title:'Post One',
        body:'POST IS BODY 1'
    },
{
        title:'Post One',
        body:'POST IS BODY 1'
    }];
    const post$ = RX.Observable.from(posts);
    post$.subscribe(
        v=>{
            console.log(v);
        },
        err=>{
            console.log(err);
        },complete=>{
            console.log('Completed')
        }
    )