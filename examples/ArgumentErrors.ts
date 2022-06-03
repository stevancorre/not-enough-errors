/**
 * Simple example on how and when to use the ArgumentError
 */

const collection: { [id: string]: Item } = { ... };

function getItemById(id: string): Item {
    if (!/[a-zA-z0-9]{6}/g.test(id))
        throw new ArgumentError("id", "The expected format is: 6 letters of numbers");

    return collection[id];
}
