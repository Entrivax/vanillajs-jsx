// #region JSX Helpers

/**
 * @template T
 * @typedef {{get current(): T} & ((value: T) => void)} Ref<T> */

/**
 * @template T
 * @type {(initialValue?: T) => Ref<T>}
 */
export function useRef(initialValue) {
    let currentValue = initialValue
    let func = /** @type {Ref<T>} */(function(val) {
        currentValue = val
    })
    Object.defineProperty(func, 'current', {
        get: () => currentValue
    })
    return func
}

// #endregion JSX Helpers