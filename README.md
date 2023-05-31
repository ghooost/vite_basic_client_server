## What is it

This is a basic setup for Vite: React client and ts-node server. No SSR! Just start-level client and server apps to confortable build new solutions from.

## Server

Express and cors are already added. Cors is configured to allow every origin (*). Change it for a real project.

```bash
npm start server
```

## Client

A very basic React app. Just start from here.

```bash
npm start dev
```

## Builds

```bash
npm run build:client
npm run build:server
```
It builds into dist/client and dist/server folders. Pass VITE_PORT env to the server app to set port to listen.
