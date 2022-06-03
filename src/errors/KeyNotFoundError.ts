import { BaseError } from "./BaseError";

/**
 * Thrown when the key specified for accessing an element in a collection does not match any key in the collection
 */
export class KeyNotFoundError extends BaseError {
    /**
     * Thrown when the key specified for accessing an element in a collection does not match any key in the collection
     * 
     * @param key The key that causes this error
     * @param message The error message
     */
    public constructor(key: string, message?: string) {
        super("Key name", key, message ?? "The provided key cannot be found in the collection");
    }
}
