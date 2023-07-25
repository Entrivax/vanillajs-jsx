// #region JSX Pragma

/** @typedef {((props: any, ...children: any[]) => Node) | string} Tag */
/** @typedef {Record<string, string | Function | number | boolean | null | undefined>} Props */
/** @typedef {string | Node} Child */

/**
 * @param {Tag} tag
 * @param {Props} props
 * @param {...Child} children
 * @returns {Node}
 */
export function h(tag, props, ...children) {
    const { ref, ..._props } = props || {}

    if (typeof tag === 'function') {
        return tag({ ref, ...props }, ...children)
    }

    let element;
    if (tag in { svg: 0, g: 0, path: 0, text: 0, symbol: 0, use: 0, circle: 0, ellipse: 0, line: 0, polygon: 0, polyline: 0, rect: 0, defs: 0, filter: 0, image: 0 }) {
        element = document.createElementNS('http://www.w3.org/2000/svg', tag)
    } else {
        element = document.createElement(tag)
    }

    for (let key of Object.keys(_props)) {
        const propVal = _props[key]
        if (key.startsWith('on')) {
            const capture = key.endsWith('Capture')
            const _key = capture ? key.slice(2, -7) : key.slice(2)
            element.addEventListener(_key.toLowerCase(), /** @type {EventListenerOrEventListenerObject} */(propVal), capture)
        } else if (propVal != null) {
            if (key === 'className') {
                const classes = (propVal.toString(10) || '').trim().split(' ')
                for (let className of classes) {
                    if (className) {
                        element.classList.add(className)
                    }
                }
            } else if (key === 'style') {
                if (typeof propVal === 'object') {
                    for (let styleProp of Object.keys(propVal)) {
                        if (propVal[styleProp]) {
                            element.style.setProperty(styleProp, propVal[styleProp])
                        }
                    }
                } else {
                    element.setAttribute(key, propVal.toString() || '')
                }
            } else if (typeof propVal !== 'boolean' || propVal === true) {
                element.setAttribute(key, propVal.toString() || '')
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
 * @returns {DocumentFragment}
 */
export function Frag(props, ...children){
    const frag = document.createDocumentFragment()
    
    if (children && children.length > 0) {
        frag.append(...(children.flat()))
    }

    return frag
}

// #endregion JSX Pragma