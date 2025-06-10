# AI Calculator 👋
[![Node.js CI](https://github.com/sawyerDeveloper/ai-calculator/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/sawyerDeveloper/ai-calculator/actions/workflows/node.js.yml)

## Philosophy
This is a calculator app.  I wrote a calculator that shows everyone how LLM's actually work to do my part to reduce magical thinking.  Mine works better then most that cost money because I am using a deterministic model instead of a probabalistic model.  This model was ethically sourced unlike most modern LLMs and services and this is free.

## Architecture
I created a data structure/algorithm based on the concept of a MODEM(Modulate/Demodulate).

The complex data stream is stored and processed and then broken down into a simpler datatype after muxing like the foundational technology in LLM's and compilers.  Every computer has an embedded LLM called a Math Coprocessor that I am leveraging for results.

It is also fun to make a calculator. 

It has a backend using the latest Expo API Routes https://docs.expo.dev/router/reference/api-routes/ and connects to a MongoDB database for storing calculations.

## Get started

1. Install dependencies


   ```bash
   npm install
   ```
2. Database Setup

   Get setup with Atlas (MongoDB) https://www.mongodb.com/cloud/atlas/register free cluster.

   Fill out the .env.example with your connection string and rename it to ```.env```.

   Create a database called 'calculator' and a collection called 'calculations'.

3. Start the app

   ```bash
    npx expo start
   ```
4. Choose the platform

   Press w for web

   Scan the QR code with your mobile device with Expo Go installed to see it live on device.
   
   Press i for ios simulator
   
   press a for android simulator

## Run Tests

   ```bash
   npm run watch
   ```
