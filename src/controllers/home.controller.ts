import { Request, Response } from 'express';
import logger from '../config/logger';
import sleep from '../utils/sleep';
import pino from 'pino';
import bunyanLogger from '../config/bunyanLogger';

const pinoLogger = pino();


export default async function Home(req: Request, res: Response) {
    const response = {
      message: 'Hello World'
    }
    const startTime = new Date().getTime();
  
    //winston
    logger.info("Teste Info")
    logger.error("Teste Error")
  
    //bunyan
    bunyanLogger.info("Teste Info")
    bunyanLogger.error("Teste Error")
  
    //pino
    pinoLogger.info("Teste Info")
    pinoLogger.error("Teste Error")
  
    await sleep(1000)
  
    const endTime = new Date().getTime();
    const time = endTime - startTime;
  
  
    res.json({
      response,
      time: time + "ms", 
    });
}