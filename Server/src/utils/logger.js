
import pino from "pino";


const logger = require('pino')({
    transport: {
        target: "pino-pretty",
        option: {
            colorize: true,
            translateTime: `SYS:🕖dd-mm-yyyy HH:MM:ss`,
            ignore: "pid,hostname",


        }
    }
});
export default logger;