import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const SECRET = "fixtoc-secret";
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://marsenen:JnUKNP57coghJ626@cluster0.imllc.mongodb.net/fixtoc-database?retryWrites=true&w=majority'
export const JWT_SECRET = process.env.JWT_SECRET || 'jwt-secret';