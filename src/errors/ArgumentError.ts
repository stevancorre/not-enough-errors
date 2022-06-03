import { BaseError } from "./BaseError";

/**
 * Thrown when a non-null argument that is passed to a method is invalid
 */
export class ArgumentError extends BaseError {
    /**
     * Thrown when a non-null argument that is passed to a method is invalid
     * 
     * @param paramName The name of the parameter that causes this error
     * @param message The error message
     */
    public constructor(paramName: string, message?: string) {
        super("Parameter name", paramName, message ?? "Got an unexpected argument value");
    }
}
