/**
 * Simple example on how and when to use the KeyNotFoundError
 */

const collection: { [id: string]: Item } = { ... };

function getItemById(id: string): Item {
    if (!collection[id] !== undefined)
        throw new KeyNotFoundError(id);

    return collection[id];
}
