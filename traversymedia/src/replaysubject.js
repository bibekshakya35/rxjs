import $ from 'jquery';
import RX from 'rxjs';

var broadCast = new RX.Subject();

broadCast.subscribe(function(value){
    console.log("here is the value",value);
});
broadCast.next(40);