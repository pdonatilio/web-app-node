const express = require('express');
const globalService = require('./global_services');
// import { find, findById, findOne, create, findByIdAndUpdate, findByIdAndRemove } from '../../models/user';

/*const getEcho = (req, res, next) => {
    try {

        return res.status(200).json({
            'date': globalService.getDateAmericaFormat(),
            'message': 'The system is running',
            'data': ""
        });

    } catch (error) {
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'Something went wrong, Please try again'
        });
    }
}*/

const getEcho = () => {
    if( 1===1 ){

        const data = {
            'ok': true,
            'message': 'The system is running',
            'data': ""
        };
        return data;
        /*
        const data = {
            'ok': true,
            'message': 'The system is running',
            'data': nul
        }
        */
        //return 'The system is running';
    }else{

        const data = {
            'ok': true,
            'message': 'The system is running, but you not allowed to get this info',
            'data': ""
        };
        return data;
        /*
        const data = {
            'ok': true,
            'message': 'The system is running',
            'data': nul
        }
        */
        //return 'The system is running, but you not allowed to get this info';
    }
}

module.exports = {
    getEcho: getEcho
};