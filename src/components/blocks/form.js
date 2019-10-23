import React from 'react'
import Top from '../forms/top'
import Bottom from '../forms/bottom'

export default ({
    form_name
}) => {
    return <div className="dd-title">
        {getForm(form_name)}
    </div >
}

const getForm = name => {
    switch (name) {
        case 'top':
            return <Top />
        case 'bottom':
            return <Bottom />
        default:
            return null
    }
}