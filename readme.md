# Haversine Express
This repository is a simple api rest for calculating distances use [Haversine Formula](https://en.wikipedia.org/wiki/Haversine_formula), [Express JS](https://expressjs.com/) and [Here Maps](https://www.here.com/)

## Pre-Installation
Before you clone this project, you must install [NodeJS](https://nodejs.org/en/) in your computer and you must have a [Here Maps](https://www.here.com/) account. And if you already installed [NodeJS](https://nodejs.org/en/). After that, you can running this script for clone this project
```
git clone https://github.com/ariefnhidayah/haversine_express.git
```
## Installation
Running this script for installation depedency in [NodeJS](https://nodejs.org/en/)
```
npm install
```
## Run Project
Running this script for development
```
npm run dev
```
After that, this project will run on port 3000

Running this script for build this project
```
npm run build
```
## API Documentation
### Calculate Distance
```
  GET /search/calculate-distance
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `from` | `string` | **Required**. From Full Address |
| `to` | `string` | **Required**. To Full Address |
