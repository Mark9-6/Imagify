import express from 'express'
import cors from 'cors' 
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';
 

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
const allowedOrigins = ['https://imagify-f-rho.vercel.app'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Origin', 'https://imagify-f-rho.vercel.app');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      return res.status(200).json({});
    }
    next();
  });

await connectDB();
 

app.use('/api/user' , userRouter)
app.use('/api/image' , imageRouter )


app.get('/' , 
    (req,res)=>
        res.send( "server connected" )
)

app.listen(PORT , 
     ()=> console.log(`Server running on  ${PORT}`)
)


