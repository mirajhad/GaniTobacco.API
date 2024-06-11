import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import logger from './utils/logger.js';
import morgan from 'morgan';

const morganFormat = ':method :url :status :response-time ms';
const app = express()


app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit: "100kb"}))
app.use(express.urlencoded({extended: true, limit: "100kb"}))
app.use(express.static("public"))
app.use(cookieParser())

app.use(morgan(morganFormat, {
  stream: {
    write: (message) => {
      const logObject = {
        method: message.split(' ')[0],
        url: message.split(' ')[1],
        status: message.split(' ')[2],
        responseTime: message.split(' ')[3],

      };
      logger.info(JSON.stringify(logObject));
    }
  }
}));


// routes import

import userRouter from './routes/user.routes.js'
import mailRouter from "./routes/email.routes.js"
import healthCheck from "./routes/health.routes.js"
import addProduct from "./routes/product.routes.js"
import rate from "./routes/rate.routes.js"



//routes declarations
app.use("/api/v1/users", userRouter)
app.use("/api/v1/mails",mailRouter )
app.use("/",healthCheck)
app.use("/api/v1/products", addProduct)
app.use("/api/v1/rate", rate)

app.get('/favicon.ico', (req, res) => res.status(204));



export {app}