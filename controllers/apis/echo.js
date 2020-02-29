const express = require('express');
const echoService = require('../../services/echo');
const globalService = require('../../services/global_services');

let router = express.Router();


/**
* @swagger
* /echo:
*   get:
*     summary: Echo Test.
*     description: Echo Test - Get function without passport security.
*     responses: 
*       200:
*         description: The system is running
*       400:
*         description: The system is running, but you not allowed to get this info'
*       500:
*         description: Something went wrong, Please try again
*/
router.get('/', (req, res, next) => {
  try {

    const passport = true;

    const result = echoService.getEcho();

    const data = {
      'date': globalService.getDateAmericaFormat(),
      result
    };

    if(passport == true){
      return res.status(200).json(data);
    } else {
      return res.status(400).json(data);
    }
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
*     summary: Echo Test - NOT IMPLEMENTED.
*     description: Echo Test - Get function with passport security (in near future).
*     parameters:
*       - name: body
*         in: body
*         schema: 
*           type: object
*           properties:
*             name:
*               type: string
*     responses: 
*       200:
*         description: The system is running {name}
*       500:
*         description: Something went wrong {name}, Please try again
*/
//router.post('/', echoService.getEcho);


module.exports = router;