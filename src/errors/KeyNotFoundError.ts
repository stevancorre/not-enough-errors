import { BaseError } from "./BaseError";

/**
 * Thrown when the key specified for accessing an element in a collection does not match any key in the collection
 */
export class KeyNotFoundError extends BaseError {
    /**
     * Thrown when the key specified for accessing an element in a collection does not match any key in the collection
     * 
     * @param keyName The key that causes this error
     * @param message The error message
     */
    public constructor(keyName: string, message?: string) {
        super("Key name", keyName, message ?? "The provided key cannot be found in the collection");
    }
}
