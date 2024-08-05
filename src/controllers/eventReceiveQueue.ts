import { Request, Response } from "express";
import { EventReceiveQueue } from "../models/eventReceiveQueue";

export const getEventReceiveQueue = async (req: Request, res: Response) => {
  try {
    // Define tus rutas aquí
    // conect wit model 
    const eventReceiveQueue = await EventReceiveQueue.findAll();
    res.json({ message: "getEventReceiveQueue" ,
      data : eventReceiveQueue
    });
  } catch (error) {
    console.log(error);
  }
};

export const postEventReceiveQueue = async (req: Request, res: Response) => {
  try {
    // Define tus rutas aquí
    
    res.json({ message: "postEventReceiveQueue" });
  } catch (error) {
    console.log(error);
  }
};

export const putEventReceiveQueue = async (req: Request, res: Response) => {
  try {
    // Define tus rutas aquí
    res.json({ message: "putEventReceiveQueue" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEventReceiveQueue = async (req: Request, res: Response) => {
  try {
    // Define tus rutas aquí
    res.json({ message: "deleteEventReceiveQueue" });
  } catch (error) {
    console.log(error);
  }
};
