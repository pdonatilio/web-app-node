const express = require('express');
const globalService = require('./global_services');

const getEcho = () => {

    const data = {
        'ok': true,
        'message': 'The system is running',
        'data': ""
    };
    return data;
}

const postEcho = (name) => {
    
    const data = {
        'ok': true,
        'message': `The system is running ${name}`,
        'data': `*${name}*`
    };
    
    return data;
}

module.exports = {
    getEcho: getEcho,
    postEcho: postEcho
};