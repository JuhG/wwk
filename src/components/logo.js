import React, { useEffect } from 'react'

import Logo from "../assets/wwk.svg"

export default () => {
    useEffect(() => {
        const wwk_1 = document.querySelector('.wwk_1')
        const wwk_2 = document.querySelector('.wwk_2')

        const wwk_1_length = wwk_1.getTotalLength()
        const wwk_2_length = wwk_2.getTotalLength()

        wwk_1.style.strokeDasharray = wwk_1_length
        wwk_2.style.strokeDasharray = wwk_2_length

        wwk_1.style.strokeDashoffset = wwk_1_length
        wwk_2.style.strokeDashoffset = wwk_2_length

        setTimeout(() => {
            wwk_1.style.opacity = 1
            wwk_1.style.transition = 'stroke-dashoffset ease 1.1s'
            wwk_1.style.strokeDashoffset = wwk_1_length * 2
        }, 50)

        setTimeout(() => {
            wwk_2.style.opacity = 1
            wwk_2.style.transition = 'stroke-dashoffset ease .4s'
            wwk_2.style.strokeDashoffset = 0
        }, 1200)
    }, [])

    return <>
        <Logo style={{
            width: 180,
        }} />
    </>
}
