let divRef = useRef()

document.body.appendChild(
    <App aValue={1}>
        Hi
        <div style="margin-top: 5em" ref={divRef}><small>How are you?</small></div>
    </App>
)
console.log(divRef.current)

/**
 * 
 * @param {{aValue: string}} props 
 * @param  {...any} children 
 * @returns 
 */
function App(props, ...children) {
    return <>
        <h1 style="color: red">Numbeeeer {props.aValue}</h1>

        {children}
        
        <button onclick={() => alert('Yay')}>Click</button>
    </>
}

// #region JSX Helpers

/**
 * @param {*} [initialValue] 
 */
function useRef(initialValue) {
    let currentValue = initialValue
    let func = (function(val) {
        currentValue = val
    })
    Object.defineProperty(func, 'current', {
        get: () => currentValue
    })
    return func
}

// #endregion JSX Helpers

// #region JSX Pragma

/** @typedef {(props: any, ...children: any[]) => JSX.Element | string} Tag */
/** @typedef {Record<string, string | Function | number | null | undefined>} Props */
/** @typedef {string | Node} Child */

/**
 * @param {Tag} tag
 * @param {Props} props
 * @param {...Child} children
 */
function h(tag, props, ...children) {
    const { ref, ..._props } = props || {}
    if (typeof tag === 'function') {
        return tag({ ref, ...props }, ...children)
    }

    const element = document.createElement(tag)

    for (let key of Object.keys(_props)) {
        const propVal = _props[key]
        if (typeof propVal === 'function') {
            // If prop value is a function, treat it as an event listener
            element[key] = propVal
        } else if (propVal) {
            if (key === 'className') {
                const classes = (propVal || '').trim().split(' ')
                for (let className of classes) {
                    if (className) {
                        element.classList.add(className)
                    }
                }
            } else {
                element.setAttribute(key, _props[key])
            }
        }
    }

    const _children = children && children.length > 0 && children.flat()
    if (_children && _children.length > 0) {
        element.append(..._children)
    }

    if (typeof ref === 'function') {
        ref(element)
    }

    return element
}

/**
 * 
 * @param {Props} props 
 * @param  {...Child} children 
 * @returns 
 */
function Frag(props, ...children){
    const frag = document.createDocumentFragment()
    
    if (children && children.length > 0) {
        frag.append(...(children.flat()))
    }

    return frag
}

// #endregion JSX Pragma