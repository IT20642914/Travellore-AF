const { default: pino } = require('pino');


const logger = require('pino')({
    transport: {
        target: "pino-pretty",
        option: {
            colorize: true,



        }
    }
});
export default logger;