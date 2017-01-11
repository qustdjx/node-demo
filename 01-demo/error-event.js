/**
 * Created by Jason Ding on 2017/1/11.
 */
var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('error',function () {
    console.log('erro msg');
})
emitter.emit('error');