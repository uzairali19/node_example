const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

// app.get('/dishes/:dishId', (req, res, next) => {
//   res.end('Will send all the dishes' + req.params.dishId);
// });

// app.post('/dishes/:dishId', (req, res, next) => {
//   res.statusCode = 403;
//   res.end(
//     'Will not add the information to the request body' + req.params.dishId
//   );
// });

// app.put('/dishes/:dishId', (req, res, next) => {
//   res.write('PUT is supported on dishes' + req.params.dishId + '/n');
//   res.end('PUT is updated all dishes' + req.params.dishId);
// });

// app.delete('/dishes/:dishId', (req, res, next) => {
//   res.end('Deleting the dish' + req.params.dishId);
// });

dishRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('Will send all the dishes');
  })
  .post((req, res, next) => {
    res.end(
      'Will add the information to the request body' +
        req.body.name +
        'With details:' +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT is not supported on dishes');
  })
  .delete((req, res, next) => {
    res.end('Deleting all the dishes');
  });

module.exports = dishRouter;
