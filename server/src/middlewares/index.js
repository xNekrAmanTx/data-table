import { ERROR_INTERNAL } from "../constants/errors";
import validator from "./validator.middleware";

const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 400;
  res.status(statusCode).json({
    statusCode,
    error: ERROR_INTERNAL,
    details: [{ message: err.message }],
  });
};

export { errorHandler, validator };
