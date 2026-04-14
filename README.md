# Unit Converter

A small practice project built with HTML, CSS, and JavaScript to convert between metric and imperial units.

## Overview

The app accepts a numeric input value and calculates both conversion directions for:

- Length: Meters <-> Feet
- Volume: Liters <-> Gallons
- Mass: Kilograms <-> Pounds

Results are formatted to three decimal places.

## Features

- Input field for a numeric value
- Button to trigger the conversion
- Output for three conversion categories:
  - Length (Meters/Feet)
  - Volume (Liters/Gallons)
  - Mass (Kilograms/Pounds)

## Conversion Factors Used

- `1 meter = 3.281 feet`
- `1 liter = 0.264 gallon`
- `1 kilogram = 2.204 pound`

## Project Structure

- `index.html`: Page markup and structure
- `index.css`: Layout and styling
- `index.js`: Event handling and conversion logic

## Run Locally

Since this is a pure frontend project without a build step, there are two simple ways to run it:

1. Open `index.html` directly in your browser.
2. Optionally run it with a local server (for example VS Code Live Server).

## Usage

1. Enter a number in the input field.
2. Click `Convert`.
3. Read the three conversion outputs below.

## Notes

- For non-numeric input, the app currently shows a prompt warning.
- Very large or very small values are supported but still rounded to three decimal places.

## Learning Goals (Practice Project)

- Select DOM elements and handle events
- Create reusable conversion functions
- Use template strings for dynamic output
- Build basic layout and styling with CSS
