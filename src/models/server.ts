import express from "express";
import cors from "cors";
import configEnv from "../config/configEnv";
import eventReceiveQueueRoutes from "../routes/eventReceiveQueue";
import { DbSequelize } from "../database/init";
import {Rabbitmq} from "../eventbus/rabbitmq";

export class Server {
  public readonly app: express.Application;
  private readonly port: number;
  private apiPath = {
    eventReceiveQueue: "/api/eventReceiveQueue",
  };

  constructor() {
    this.app = express();
    this.port = configEnv.PORT;

    // Configuración de middleware
    this.app.use(cors());
    this.app.use(express.json()); // Para parsear JSON

    // Configuración de rutas

    this.routes();
  }

  public async start(): Promise<void> {
    try {
      await Rabbitmq.init();
      DbSequelize()
        .then(async () => {
          // Define tus rutas aquí
          this.app.use("/api", (req, res) => {
            res.send("API Routes");
          });
          await Rabbitmq.init();
          // Levantar el servidor HTTP
          this.app.listen(this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  }

  routes() {
    // Define tus rutas aquí
    this.app.use(this.apiPath.eventReceiveQueue, eventReceiveQueueRoutes);
  }
}
