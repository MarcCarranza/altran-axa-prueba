import React from 'react'
const _ = require('lodash')
const fetch = require('jest-fetch-mock')

global.React = React
global._ = _
global.fetch = fetch
global.externalLibrary = {
    logError: err => {
        console.log(err)
    }
}