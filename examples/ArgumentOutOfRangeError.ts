/**
 * Simple example on how and when to use the ArgumentOutOfRangeError
 */

const collection: Item[] = [...];

function getItemByIndex(index: number): Item {
    if (index < 0 || index >= collection.length)
        throw new ArgumentOutOfRangeError("index", "`index` should be greater than 0 and less than the size of the collection");

    return collection[index];
}
