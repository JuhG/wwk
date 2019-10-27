import React from 'react'

import Text from './text'

export default (props) => {
    return <div className="relative mt-4 px-4 py-4 dd-title text-sm">
        <p style={{
            fontSize: '10rem',
            top: '-2.2rem',
            left: '-2.2rem',
            opacity: .2
        }} className="absolute italic text-purple-600 w-24">"</p>
        <Text {...props} />
    </div>
}
