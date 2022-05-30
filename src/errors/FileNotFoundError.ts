import { IStringBuilder, StringBuilder } from "lightsb";
import { BaseError } from "./BaseError";

/**
 * Thrown when a physical file does not exist at the specified location
 */
export class FileNotFoundError extends BaseError {
    /**
     * Thrown when a physical file does not exist at the specified location
     * 
     * @param fileName The file name that cannot be found
     * @param message The error message
     */
    public constructor(fileName: string, message?: string) {
        const builder: IStringBuilder = new StringBuilder()
            .append(message ?? "The provided file cannot be found")
            .appendEmptyLine()
            .append("File name: ")
            .append(fileName);

        super(builder.toString());
    }
}
