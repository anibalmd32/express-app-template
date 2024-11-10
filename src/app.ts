import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import ViewsApp from "./apps/ViewsApp";
import ServicesApp from "./apps/ServicesApp";
import localesConfig from "./config/localesConfig";
import localesMiddleware from "./middlewares/localesMiddleware";

const app = express();
const viewsApp = new ViewsApp();
const servicesApp = new ServicesApp();

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(localesMiddleware);
app.use(localesConfig.init);

servicesApp.registerApp(app);
viewsApp.registerApp(app);

export default app;
