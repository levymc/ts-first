import { Request, Response } from 'express';
import logger from '../config/logger';
import sleep from '../utils/sleep';


export default async function Home(req: Request, res: Response) {
    const response = {
      message: 'Hello World'
    }
    const startTime = new Date().getTime();
  
    logger.info("Teste Info")
    logger.error("Teste Error")
    logger.warn("Teste Warn")

  
    await sleep(1000)

    const endTime = new Date().getTime();
    const time = endTime - startTime;
  
    res.json({
        response,
        time: time + "ms", 
    });
}