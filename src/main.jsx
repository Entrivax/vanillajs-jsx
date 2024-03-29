import Hello from './helloWorld'
import { h, Frag } from './pragma.js'
import { useRef } from './helpers.jsx'

let divRef = /** @type import('./helpers.jsx').Ref<HTMLDivElement | null> */(useRef(null))

document.body.appendChild(
    <App aValue={'1'}>
        Hi
        <div style="margin-top: 5em" ref={divRef}><small>How are you?</small></div>

        <div contenteditable={true}>Editable content</div>
        <div contenteditable={false}>Not editable content</div>

        <Hello world="World" />

        <div>
            A SVG:
            <svg:svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 1024 1024" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5">
                <svg:path fill="#e8eaed" d="M0 0h1023.996v1024H0z"/>
                <svg:path d="M822.44 1045.945a304.91 304.91 0 004.734-53.51c0-171.24-141.507-310.263-315.803-310.263-184.133 0-315.803 139.024-315.803 310.262a304.91 304.91 0 004.733 53.51h622.14z" fill="#7dcfee"/>
                <svg:path d="M822.44 1077.814c.014 0 .024-11.075.026-26.279h31.349c1.566-9.773 2.772-19.599 3.445-29.479.672-9.858.92-19.733.696-29.622-2.837-93.719-43.329-177.731-108.027-237.033-62.413-57.207-146.535-91.912-238.558-89.126-93.945 2.843-173.78 39.62-229.947 97.925-56.866 59.033-89.493 139.78-86.82 228.234.207 7.195.732 14.365 1.378 21.524.966 10.723 2.298 21.403 4.294 31.997.025.022 622.165.022 622.165.022v31.837zm-31.372-31.89v-5.57a281.455 281.455 0 003.648-23.824c.872-8.002 1.493-16.037 1.676-24.096 2.378-78.574-27.895-150.684-79.031-203.591-52.01-53.812-124.648-88.312-205.99-90.774-87.115-2.636-162.92 27.359-218.173 78.18-58.507 53.812-94.075 130.402-96.667 216.185-.308 10.753-.2 21.503.78 32.215.653 7.138 1.759 14.233 2.99 21.274h590.767z" fill="#00aff0"/>
                <svg:g transform="translate(16.593 -1.453) scale(.96425)">
                    <svg:circle cx="513.773" cy="421.521" r="177.039" fill="#57c5ef" stroke="#00aff0" stroke-width="44.25"/>
                </svg:g>
            </svg:svg>
        </div>
    </App>
)
console.log(divRef())

/**
 * 
 * @param {{aValue: string}} props 
 * @param  {...any} children
 */
function App(props, ...children) {
    return <>
        <h1 style="color: red">Numbeeeer {props.aValue}</h1>

        {children}
        
        <button onclick={() => alert('Yay')}>Show alert</button>
    </>
}
