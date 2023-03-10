import Test from './test.jsx'
import { h, Frag } from './pragma.js'
import { useRef } from './helpers.jsx'

let divRef = useRef()

document.body.appendChild(
    <App aValue={'1'}>
        Hi
        <div style="margin-top: 5em" ref={divRef}><small>How are you?</small></div>
        <Test />
    </App>
)
console.log(divRef.current)

/**
 * 
 * @param {{aValue: string}} props 
 * @param  {...any} children
 */
function App(props, ...children) {
    return <>
        <h1 style="color: red">Numbeeeer {props.aValue}</h1>

        {children}
        
        <button onclick={() => alert('Yay')}>Click</button>
    </>
}
