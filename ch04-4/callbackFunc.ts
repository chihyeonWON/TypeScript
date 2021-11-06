const init = (callback: () => void): void => {
    console.log('default initialization finished')
    callback()
    console.log('all initialization finished.')
}

init(() => console.log('custom initialization finished.'))

// default initialization finished 
// custom initialization finished
// all initialization finished