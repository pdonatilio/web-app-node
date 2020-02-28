const express = require('express');
// import { find, findById, findOne, create, findByIdAndUpdate, findByIdAndRemove } from '../../models/user';

const getEcho = (req, res, next) => {
    try {

        const today = new Date();

        return res.status(200).json({
            'date': today,
            'message': 'The system is running',
            'data': ""
        });

    } catch (error) {
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'Something went wrong, Please try again'
        });
    }
}

module.exports = {
    getEcho: getEcho
};