import express from "express";
import cors from "cors";

const app = express();
app.use(cors({origin: '*'}));

app.get('/ql', (_, res) => {
  res.json({
    hello: 'world',
  });
});

const {VITE_PORT: port = 5000} = process.env;

app.listen(port, () => {
  console.log();
  console.log(`  App running in port ${port}, just test`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${port}/\x1b[0m`);
});
