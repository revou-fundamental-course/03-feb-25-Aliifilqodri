function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const fromUnitSelect = document.getElementById("fromUnit");
    const toUnitSelect = document.getElementById("toUnit");
    const resultDiv = document.getElementById("result");
    const convertedTemperature = document.getElementById("convertedTemperature");
    const explanation = document.getElementById("explanation");

    const temperature = parseFloat(temperatureInput.value);

    if (isNaN(temperature)) {
        alert("Please enter a valid temperature!");
        return;
    }

    let convertedValue;
    let convertedUnit;
    let exp; 

    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    
    if (fromUnit === toUnit) {
        convertedValue = temperature;
        convertedUnit = fromUnit;
        exp = `No conversion needed. ${temperature} ${fromUnit} is equal to ${temperature} ${fromUnit}.`;
    } else if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            convertedValue = (temperature * 9/5) + 32;
            convertedUnit = "Fahrenheit";
            exp = `${temperature} Celsius is equal to ${convertedValue.toFixed(2)} Fahrenheit. Formula: (C * 9/5) + 32`;
        } else if (toUnit === "kelvin") {
            convertedValue = temperature + 273.15;
            convertedUnit = "Kelvin";
            exp = `${temperature} Celsius is equal to ${convertedValue.toFixed(2)} Kelvin. Formula: C + 273.15`;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            convertedValue = (temperature - 32) * 5/9;
            convertedUnit = "Celsius";
            exp = `${temperature} Fahrenheit is equal to ${convertedValue.toFixed(2)} Celsius. Formula: (F - 32) * 5/9`;
        } else if (toUnit === "kelvin") {
            convertedValue = (temperature - 32) * 5/9 + 273.15;
            convertedUnit = "Kelvin";
            exp = `${temperature} Fahrenheit is equal to ${convertedValue.toFixed(2)} Kelvin. Formula: (F - 32) * 5/9 + 273.15`;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            convertedValue = temperature - 273.15;
            convertedUnit = "Celsius";
            exp = `${temperature} Kelvin is equal to ${convertedValue.toFixed(2)} Celsius. Formula: K - 273.15`;
        } else if (toUnit === "fahrenheit") {
            convertedValue = (temperature - 273.15) * 9/5 + 32;
            convertedUnit = "Fahrenheit";
            exp = `${temperature} Kelvin is equal to ${convertedValue.toFixed(2)} Fahrenheit. Formula: (K - 273.15) * 9/5 + 32`;
        
    }

    convertedTemperature.textContent = `${convertedValue.toFixed(2)} ${convertedUnit}`;
    explanation.textContent = exp;
    resultDiv.classList.remove("hidden");
}