import { IStringBuilder, StringBuilder } from "lightsb";
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
    public constructor(funcName: string, message?: string) {
        const builder: IStringBuilder = new StringBuilder()
            .append(message ?? "The function is not implemented")
            .appendEmptyLine()
            .append("Function name: ")
            .append(funcName);

        super(builder.toString());
    }
}
