import React from 'react'
import { RichText } from 'prismic-reactjs'

import Top from '../forms/top'
import Bottom from '../forms/bottom'

export default ({
    form_name,
    form_title = '',
    text = '',
}) => {
    return <div className="dd-title">
        {getForm(
            form_name,
            RichText.asText(form_title || []),
            RichText.asText(text || [])
        )}
    </div >
}

const getForm = (name, title, text) => {
    switch (name) {
        case 'top':
            return <Top text={text} />
        case 'bottom':
            return <Bottom title={title} text={text} />
        default:
            return null
    }
}