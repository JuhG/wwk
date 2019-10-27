import { useState, useEffect } from 'react'

export default ({
    initial,
    onLoad,
    delay = 0,
    beforeOnLoad = () => null,
}) => {
    const [thing, setThing] = useState(initial)

    useEffect(() => {
        setTimeout(() => {
            beforeOnLoad()

            setThing(onLoad)
        }, delay)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return thing
}
