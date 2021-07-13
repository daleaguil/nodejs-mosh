
const EventEmmitter = require('events');
const emitter = new EventEmmitter();

//Register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called');
});

// Raise an event
emitter.emit('messageLogged');