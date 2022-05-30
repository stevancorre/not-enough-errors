import { ArgumentError } from "./ArgumentErrors";

/**
 * Thrown when null argument is passed to a method
 */
export class ArgumentNullError extends ArgumentError {
    /**
     * Thrown when null argument is passed to a method
     * 
     * @param paramName The name of the parameter that causes this error
     * @param message The error message
     */
    public constructor(paramName: string, message?: string) {
        super(paramName, message);
    }
}
