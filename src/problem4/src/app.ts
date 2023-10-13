import express, { Request, Response } from 'express';
import { router } from './routes';
import { formatError } from './common/util';
import logger from './logger';
import expressJSDocSwagger from 'express-jsdoc-swagger';
import { response } from './common/response';
import bodyParser from 'body-parser';

const app: express.Application = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const options = {
    info: {
        version: '1.0.0',
        title: 'CRUD API',
    },
    filesPattern: './**/*.ts',
    swaggerUIPath: '/swagger', // SwaggerUI will be render in this url. Default: '/api-docs'
    baseDir: __dirname,
    exposeSwaggerUI: true, // Expose OpenAPI UI. Default true
    exposeApiDocs: false, // Expose Open API JSON Docs documentation in `apiDocsPath` path. Default false.
    apiDocsPath: '/api', // Open API JSON Docs endpoint. Default value '/v3/api-docs'.
};

expressJSDocSwagger(app)(options);




const port = process.env.PORT || 3000;
app.use(process.env.API_ROUTE || '', router);
app.use(response);


process.on('uncaughtException', err => {
    logger.error(`Uncaught Exception: ${formatError(err)}`);
});

process.on('unhandledRejection', reason => {
    logger.error(`Unhandled Rejection: ${formatError(reason)}`);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});