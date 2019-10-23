import React from 'react'

import { RichText } from 'prismic-reactjs'

export default ({
    title = '',
    text = '',
    content = '',
}) => {
    return <div className="dd-editor">
        {title && RichText.render(title)}
        {text && RichText.render(text)}
        {content && RichText.render(content)}
    </div>
}
