/*
 * `asynchronous.js`
 *
 * The purpose of this example is to demonstrate how an asynchronous command would work thanks to the
 * promise based processing pipeline.
 *
 * To run:
 *      $ node asynchronous.js
 */
const Command = require('../index.js').Command;

class Timeout extends Command {
    execute () {
        let delay = (ms) => {
            return new Promise(resolve => {
                setTimeout(x => resolve(), ms);
            });
        };

        return delay(1000).then(() => {
            console.log('tick');
        });
    }
}

new Timeout().run().then(() => {
    console.log("tock");
});