# Unit Converter

A simple web-based unit converter built with TypeScript, Express, and EJS.

The application supports conversions for:

- Length
- Weight
- Temperature

## Technologies

- TypeScript
- Node.js
- Express
- EJS
- CSS

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Running the Application

Start the application with:

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

## Usage

Choose a conversion type from the navigation menu, enter a value, select the units to convert from and to, and submit the form.

The application currently supports:

### Length

- Millimeters
- Centimeters
- Meters
- Kilometers
- Inches
- Feet
- Yards
- Miles

### Weight

- Milligrams
- Grams
- Kilograms
- Ounces
- Pounds

### Temperature

- Celsius
- Fahrenheit
- Kelvin

## Project Structure

```text
src/
├── app.ts
├── controllers/
│   ├── lengthController.ts
│   ├── weightController.ts
│   └── temperatureController.ts
├── conversions/
│   ├── length.ts
│   ├── weight.ts
│   └── temperature.ts
├── public/
│   └── styles.css
└── views/
    ├── length.ejs
    ├── weight.ejs
    ├── temperature.ejs
    └── partials/
        ├── header.ejs
        └── nav.ejs
```

The controllers handle HTTP requests and form input, while the conversion modules contain the conversion logic.

## Type Checking

Run the TypeScript compiler without emitting JavaScript:

```bash
npm run typecheck
```

## Acknowledgements

This project is based on the description given at [roadmap.sh](https://roadmap.sh/projects/unit-converter)