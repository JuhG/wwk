import React from 'react'

import Image from 'gatsby-theme-dromedar/src/components/image'
import { RichText } from 'prismic-reactjs'

export default ({
    name,
    text,
    profile_image,
    profile_imageSharp,
}) => {
    return <div className="mt-4 p-4 sm:p-6 rounded-lg bg-white shadow-xl">
        <div className="flex-shrink-0 h-12 sm:h-16 w-12 sm:w-16 rounded-full overflow-hidden mr-4 float-left">
            <Image image={profile_image} imageSharp={profile_imageSharp} />
        </div>
        <h3 className="dd-hx text-xl">{RichText.asText(name || [])}</h3>
        <p className="mt-1 dd-title text-gray-600">{RichText.asText(text || [])}</p>
    </div >
}
