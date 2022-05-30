import { ArgumentError } from "./ArgumentErrors";

/**
 * Thrown when the value of an argument is outside the range of valid values
 */
export class ArgumentOutOfRangeError extends ArgumentError {
    /**
     * Thrown when the value of an argument is outside the range of valid values
     * 
     * @param paramName The name of the parameter that causes this error
     * @param message The error message
     */
    public constructor(paramName: string, message?: string) {
        super(paramName, message);
    }
}
