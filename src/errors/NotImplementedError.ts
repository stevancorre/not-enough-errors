import { BaseError } from "./BaseError";

/**
 * Thrown when a requested function is not implemented
 */
export class NotImplementedError extends BaseError {
    /**
     * Thrown when a requested function is not implemented
     * 
     * @param funcName The name of the function
     * @param message The error message
     */
    public constructor(funcName?: string, message?: string) {
        super("Function name", funcName, message  ?? "This function is not implemented");
    }
}
