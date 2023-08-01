const err = new Error('This is an error message');

console.error(err.message);

								
/*error.code : This is a string label which is used to identify the type of error. It specifies errors in the form of node.js error codes .
error.stack : It returns a string in which details are provided about where in the code the error was instantiated.
Error.captureStackTrace : This is used to create a .stack property on the target object which returns the location in the code where Error.captureStackTrace() was called. It returns the data in the form of string.
Error.stackTraceLimit : This property specifies number of stack frames captured by stack trace. It can be any valid JS number however 10 is the default value. If set to a non-number or negative number , then stack trace will not return any frames.*/
