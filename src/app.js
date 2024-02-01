import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()


app.use(cors({
    origin: 'https://reactwebdev.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));

app.use(express.json({limit: "100kb"}))
app.use(express.urlencoded({extended: true, limit: "100kb"}))
app.use(express.static("public"))
app.use(cookieParser())



// routes import

import userRouter from './routes/user.routes.js'
import mailRouter from "./routes/email.routes.js"
import healthCheck from "./routes/health.routes.js"
import addProduct from "./routes/product.routes.js"


//routes declarations
app.use("/api/v1/users", userRouter)
app.use("/api/v1/mails",mailRouter )
app.use("/",healthCheck)
app.use("/api/v1/products", addProduct)
app.get('/favicon.ico', (req, res) => res.status(204));



export {app}