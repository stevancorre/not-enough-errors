import { IStringBuilder, StringBuilder } from "lightsb";

/**
 * Abstract error class
 */
export abstract class BaseError extends Error {
    /**
     * Abstract error class
     * @param label The label text
     * @param labelValue The label value
     * @param message The error message
     */
    protected constructor(label: string, labelValue: string, message: string) {
        const builder: IStringBuilder = new StringBuilder()
            .append(message)
            .appendEmptyLine()
            .append(`${label}: ${labelValue}`);

        super(builder.toString());
    }
}
