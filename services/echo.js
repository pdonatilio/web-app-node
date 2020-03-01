const express = require('express');
const globalService = require('./global_services');

const getEcho = () => {

    const result = {
        'ok': true,
        'message': 'The system is running',
        'data': ""
    };
    return result;
}

const postEcho = (message, data) => {
    
    const result = {
        'ok': true,
        'message': `The system is running ${message}`,
        'data': data
    };
    
    return result;
}

module.exports = {
    getEcho: getEcho,
    postEcho: postEcho
};