import React from 'react'

import Image from './blocks/image'
import Text from './blocks/text'
import Form from './blocks/form'
import Highlight from './blocks/highlight'

export default ({
    body,
}) => {
    const getBlock = (type, data, index) => {
        switch (type) {
            case 'content':
                return <Text {...data} key={index} />

            case 'highlight':
                return <Highlight {...data} key={index} />

            case 'image':
                return <Image {...data} key={index} />

            case 'form':
                return <Form {...data} key={index} />

            default:
                return null
        }
    }

    return <>
        {body && body.map((content, index) => {
            return getBlock(content.type, content.primary, index)
        })}
    </>
}
