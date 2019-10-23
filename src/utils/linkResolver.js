module.exports = (doc) => {
    switch (doc.type) {
        case 'page':
            return '/page/' + doc.uid

        default:
            return '/'
    }
}
