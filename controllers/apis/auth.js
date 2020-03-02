const express = require('express');
const authService = require('../../services/auth');
const globalService = require('../../services/global_services');

let router = express.Router();


/**
* @swagger
* /auth:
*   post:
*     tags: 
*       - Authentication
*     summary: Login Application with JWT.
*     description: Login with JWT.
*     consumes:
*       - application/json
*     parameters:
*       - name: login
*         in: body
*         schema: 
*           type: object
*           properties:
*             email:
*               type: string
*             password:
*               type: string
*     responses: 
*       400:
*         description: The data are incorrect
*       401:
*         description: Login Failed
*       200:
*         description: Login successful whit token
*       500:
*         description: Something went wrong, Please try again
*/
router.post('/', (req, res, next) => {

  try {
    const body = req.body;

    if(body == null){
      return res.status(400).json({
        'date': globalService.getDateAmericaFormat(),
        'message': `The parameters are incorrect`
      });
    }

    let data = authService.authentication(body)

    if (data.ok == false) {
      return res.status(401).json({
        'date': globalService.getDateAmericaFormat(),
        'message': data.message
      });
    }

    return res.status(200).json(data);

  } catch (error) {
    
    return res.status(500).json({
      'code': 'SERVER_ERROR',
      'description': 'Something went wrong, Please try again',
      'error': error.message
    });

  }

})

module.exports = router;