import logger from "./logger";

const createError = (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    logger.error(err);
    return err;
  };
  
  export default createError;