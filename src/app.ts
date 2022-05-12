import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

//Rutas
import indexRoutes from "./routes/index.routes";
import authRoutes from "./routes/auth.routes";
import usersRoutes from "./routes/user.routes";


const app = express();
const security = helmet();

//Settings
app.set('port', process.env.PORT || 3000);

//Middleweres
app.use(morgan('dev'));
app.use(cors());
app.use(security);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use("/api", indexRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);



export default app;