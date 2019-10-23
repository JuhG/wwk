import React, { useEffect } from 'react'

import Logo from "../assets/wwk.svg"

export default () => {
    useEffect(() => {
        const wwk_1 = document.querySelector('.wwk_1')
        const wwk_2 = document.querySelector('.wwk_2')

        wwk_1.style.strokeDasharray = wwk_1.getTotalLength()
        wwk_2.style.strokeDasharray = wwk_2.getTotalLength()

        wwk_1.style.strokeDashoffset = -1 * wwk_1.getTotalLength()
        wwk_2.style.strokeDashoffset = wwk_2.getTotalLength()

        setTimeout(() => {
            wwk_1.style.opacity = 1
            wwk_1.style.transition = 'stroke-dashoffset ease 1s'
            wwk_1.style.strokeDashoffset = 0
        }, 400)

        setTimeout(() => {
            wwk_2.style.opacity = 1
            wwk_2.style.transition = 'stroke-dashoffset ease .4s'
            wwk_2.style.strokeDashoffset = 0
        }, 1400)
    }, [])

    return <>
        <Logo style={{
            width: 180,
        }} />
    </>
}
