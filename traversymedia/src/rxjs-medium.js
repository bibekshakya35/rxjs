import $ from 'jquery';
import RX from 'rxjs';
//Concat :     Subscribe to Observables in order but only when the previous completes, let me know, then move to the next one.
//Use this operator when the order is important, for example when you need to send HTTP requests that should be in order.


const getPostOne$ =RX.Observable.timer(3000).mapTo({
    id:1
});
const getPostTwo$ = RX.Observable.timer(3000).mapTo({
    id:2
});
const getPostThree$ = RX.Observable.range(4000,10).mapTo({
    id:3
});

RX.Observable.concat(getPostOne$,getPostTwo$,getPostThree$)
.subscribe(res=>console.log(res));