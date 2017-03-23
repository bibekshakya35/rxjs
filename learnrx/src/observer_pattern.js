function Producer() {
    this.listeners = [];
}
Producer.prototype.add = function (listener) {
    this.listeners.push(listener);
}
Producer.prototype.remove = function (listener) {
    var index = this.listeners.indexOf(listener);
    this.listeners.slice(index, 1);
}
Producer.prototype.notify = function (message) {
    this.listeners.forEach(
        listener => listener.update(message)
    );
}

var listener1 = {
    update: message => console.log("Listener 1 received", message)
};
var listener2 = {
    update: message => console.log("Listner 2 recieved", message)
}
var notifier = new Producer();
notifier.add(listener1);
notifier.add(listener2);
notifier.notify('Hello There');

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eyecolor;
}

var bibek = new Person("Bibek","Shakya",57,"blue");
bibek.nationality = "English";
console.log(bibek.nationality);
bibek.name = function(){
    return this.firstName +" "+this.lastName; 
}
console.log(bibek.name())