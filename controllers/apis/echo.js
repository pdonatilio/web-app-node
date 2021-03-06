const express = require('express');
const echoService = require('../../services/echo');
const globalService = require('../../services/global_services');
const auth = require('../../middlewares/auth');

let router = express.Router();


/**
* @swagger
* /echo:
*   get:
*     tags:
*       - Echo Test
*     summary: Echo Test.
*     description: Echo Test - Get function without passport security.
*     responses: 
*       401:
*         description: You are not allowed
*       200:
*         description: The system is running
*       500:
*         description: Something went wrong, Please try again
*/
router.get('/', (req, res, next) => {

  try {
    const result = echoService.getEcho();

    const data = {
      'date': globalService.getDateAmericaFormat(),
      result
    };
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      'code': 'SERVER_ERROR',
      'description': 'Something went wrong, Please try again'
    });
  }
})


/**
* @swagger
* /echo:
*   post:
*     tags:
*       - Echo Test
*     summary: Echo Test.
*     description: Echo Test - Get function with passport security (in near future).
*     security:
*       - Bearer: []
*     consumes:
*       - application/json
*     parameters:
*       - name: test
*         in: body
*         schema: 
*           type: object
*           properties:
*             message:
*               type: string
*             data:
*               type: string
*     responses: 
*       401:
*         description: You are not allowed
*       400:
*         description: The parameters are incorrect
*       200:
*         description: The system is running, {message}
*       500:
*         description: Something went wrong, Please try again
*/
router.post('/', auth, (req, res, next) => {

  try {
    const body = req.body;

    if(body == null){
      return res.status(400).json({
        'date': globalService.getDateAmericaFormat(),
        'message': `The parameters are incorrect`
      });
    }

    const result = echoService.postEcho(body.message, body.data);
  
    const data = {
      'date': globalService.getDateAmericaFormat(),
      result
    };

    return res.status(200).json(data);

  } catch (error) {
    
    return res.status(500).json({
      'code': 'SERVER_ERROR',
      'description': 'Something went wrong, Please try again'
    });
    
  }


})

module.exports = router;