/**
 * Simple example on how and when to use the ArgumentNullError
 * 
 * This is useful when working with `strictNullChecks` set to `false` in `tsconfig.json`
 */

function increment(x: number): number {
    if (x === null)
        throw new ArgumentNullError("x");

    return x + 1;
}
