/**
 * * ******* CONVENTIONS ********* * *
 * 
 * Instead of creating an array of query keys, create a function that returns a query key. This allows for dynamic query keys (e.g. `[...baseQueryKey, ...dynamicQueryKey]`)
 * 
 */

export const QUERY_KEYS = {
    getAllProducts: () => ['products'],
}