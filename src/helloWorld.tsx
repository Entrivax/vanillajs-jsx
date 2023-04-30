import { useRef } from './helpers.js'
import { h, Frag } from './pragma.js'

export interface HelloProps {
    world: string
}

export default function Hello({ world }: HelloProps) {
    let counter = 0
    const buttonRef = useRef<HTMLButtonElement | undefined>(undefined)

    const onClick = () => {
        const button = buttonRef()
        if (button) {
            button.innerText = `Clicked ${++counter} times!`
        }
    }
    return <div>
        Hello { world }!
        <div>
            <button ref={buttonRef} onClick={onClick}>Click me!</button>
        </div>
    </div>
}