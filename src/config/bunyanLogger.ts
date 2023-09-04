import bunyan from 'bunyan';

const bunyanLogger = bunyan.createLogger({
  name: 'test', 
  level: 'info',
  serializers: {
    req: bunyan.stdSerializers.req,
    res: bunyan.stdSerializers.res,
  },
  streams: [
    {
      level: 'info',
      stream: process.stdout, //console
      path: 'errorBunyan.log',
    },
    {
      level: 'error',
      path: 'errorBunyan.log',
    },
  ],
});

export default bunyanLogger;
