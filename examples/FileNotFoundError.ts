/**
 * Simple example on how and when to use the FileNotFoundError
 */

function loadConfigFromFile(path: string): Config {
    if (!existsSync(path))
        throw new FileNotFoundError(path);

    const content: string = readFileSync(path, "utf-8");
    return loadConfigFromJson(content);
}
