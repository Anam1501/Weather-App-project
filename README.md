# Weather-App

**Weather-App** is a simple web application that allows users to forecast the weather in different cities worldwide. This application is built using Angular CLI and integrates with a weather API. Users can enter the name of a city and retrieve current weather data for that location. If you're new to APIs, don't worry; we'll guide you through the setup process.

## What is an API?

API stands for Application Programming Interface, which is a set of definitions and protocols for building and integrating application software. If you'd like to learn more about APIs, you can check out this [link](https://www.redhat.com/en/topics/api/what-are-application-programming-interfaces).

## How to Use the Weather API Services

Follow these step-by-step instructions to set up and use the Weather-App with your own API key:

### Step 1: Open RapidAPI in your browser

Visit [https://rapidapi.com](https://rapidapi.com) in your web browser.

### Step 2: Sign up and create an account

If you don't already have a RapidAPI account, sign up and create one.

### Step 3: Search for Yahoo Weather

Search for "Yahoo Weather" within RapidAPI and subscribe to it to access its services. After subscribing, click on "Test Endpoints" to ensure that the API is working as expected.

![Step 3 Screenshot](https://user-images.githubusercontent.com/88324256/185447026-ca089873-632b-4497-94d4-4ae63d15404d.png)

### Step 4: Get your own API key

You will receive your API key after subscribing to the Yahoo Weather API. Make sure to keep it secure and don't share it with others.

![Step 4 Screenshot](https://user-images.githubusercontent.com/88324256/185449018-494a0a50-4cad-4e23-88f3-006818da0a2b.png)

### Step 5: Configure your API key

Open the `environment.ts` file from your project folder located at `WeatherApp/src/environments`. Paste your API key into this file to configure the application to use your key.

![Step 5 Screenshot](https://user-images.githubusercontent.com/88324256/185450681-44a31a1c-5c0f-408d-bd26-85dbf2bee648.png)

### Step 6: Save and run the server

Save all the changes you made to the configuration file. Now, open your terminal, ensure that you're in your Angular project folder (i.e., WeatherApp), and execute the following command to start the server:

```
ng serve
```

This will launch your Weather-App, and you can access it in your web browser.

Note: Make sure you're in the correct directory (WeatherApp) in the terminal when running the `ng serve` command.

Now you have successfully set up and configured your Weather-App with the Yahoo Weather API. Users can enter city names and receive current weather data. Happy forecasting! 🌦️🌧️🌞
