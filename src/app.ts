import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import notificationRoutes from "./routes/notification.routes";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.get("/", (_, res) => {
    res.json({
        success: true,
        message: "Campus Notification API"
    });
});
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/notifications", notificationRoutes);

export default app;