import { h, Frag } from './pragma.js'

export interface HelloProps {
    world: string
}

export default function Hello({ world }: HelloProps) {
    return <div>Hello { world }!</div>
}