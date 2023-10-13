
/**
 * Calculates the sum of numbers from 1 to n using an iterative approach.
 * The input must be a positive integer, otherwise an error is thrown.
 *
 * @param n - The number up to which the sum should be calculated.
 * @returns The sum of numbers from 1 to n.
 * @throws Error if the input is not a positive integer.
 * @complexity O(n) because it uses a loop to add all integers from 1 to n.
 */
export const sumToNWithIterative = (n: number): number => {
    if (n <= 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a positive integer.");
    }
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Calculates the sum of numbers from 1 to n using a formula.
 * Sum of Natural Numbers Formula: sum = [n(n+1)]/2, where n is the natural number.
 * https://www.cuemath.com/sum-of-natural-numbers-formula/
 * The input must be a positive integer, otherwise an error is thrown.
 *
 * @param n - The number up to which the sum should be calculated.
 * @returns The sum of numbers from 1 to n.
 * @throws Error if the input is not a positive integer.
 * @complexity O(1) because it leverages the mathematical formula for the sum of an arithmetic series,
 *  making it the most efficient option.
 */
export const sumToNWithFormula = (n: number): number => {
    if (n <= 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a positive integer.");
    }
    return (n * (n + 1)) / 2;
}

/**
 * Calculates the sum of numbers from 1 to n using recursion.
 * The input must be a positive integer, otherwise an error is thrown.
 *
 * @param n - The number up to which the sum should be calculated.
 * @returns The sum of numbers from 1 to n.
 * @throws Error if the input is not a positive integer.
 * @complexity O(n) because it uses recursion to add numbers from n to 1
 */
export const sumToNWithRecursive = (n: number): number => {
    if (n <= 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a positive integer.");
    }
    if (n === 1) {
        return 1;
    } else {
        return n + sumToNWithRecursive(n - 1);
    }
}


