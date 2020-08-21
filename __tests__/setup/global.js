import React from 'react'
let _ = require('lodash')

global.React = React
global._ = _
global.externalLibrary = {
    logError: err => {
        console.log(err)
    }
}