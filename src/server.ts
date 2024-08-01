const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.get('/api/test', (req:any, res:any) => {
    res.json({ message: 'Hello from Express!' });
  });

  app.all('*', (req:any, res:any) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});