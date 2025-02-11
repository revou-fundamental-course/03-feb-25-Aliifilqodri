function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const fromUnitSelect = document.getElementById("fromUnit");
    const toUnitSelect = document.getElementById("toUnit");
    const resultDiv = document.getElementById("result");
    const convertedTemperature = document.getElementById("convertedTemperature");
    const explanation = document.getElementById("explanation");

    const temperature = parseFloat(temperatureInput.value);

    if (isNaN(temperature)) {
        alert("Masukkan suhu yang valid!");
        return;
    }

    let convertedValue;
    let convertedUnit;
    let formula; 

    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    
    if (fromUnit === toUnit) {
        convertedValue = temperature;
        convertedUnit = fromUnit;
        formula = `Tidak ada perubahan: ${temperature} ${fromUnit} = ${temperature} ${toUnit}.`;
    } else if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            convertedValue = (temperature * 9/5) + 32;
            convertedUnit = "Fahrenheit";
            formula = `(${temperature} × 9/5) + 32 = ${convertedValue.toFixed(2)}°F`;
        } else if (toUnit === "kelvin") {
            convertedValue = temperature + 273.15;
            convertedUnit = "Kelvin";
            formula = `${temperature} + 273.15 = ${convertedValue.toFixed(2)}K`;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            convertedValue = (temperature - 32) * 5/9;
            convertedUnit = "Celsius";
            formula = `(${temperature} - 32) × 5/9 = ${convertedValue.toFixed(2)}°C`;
        } else if (toUnit === "kelvin") {
            convertedValue = (temperature - 32) * 5/9 + 273.15;
            convertedUnit = "Kelvin";
            formula = `(${temperature} - 32) × 5/9 + 273.15 = ${convertedValue.toFixed(2)}K`;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            convertedValue = temperature - 273.15;
            convertedUnit = "Celsius";
            formula = `${temperature} - 273.15 = ${convertedValue.toFixed(2)}°C`;
        } else if (toUnit === "fahrenheit") {
            convertedValue = (temperature - 273.15) * 9/5 + 32;
            convertedUnit = "Fahrenheit";
            formula = `(${temperature} - 273.15) × 9/5 + 32 = ${convertedValue.toFixed(2)}°F`;
        }
    }

    convertedTemperature.innerHTML = `<strong>${convertedValue.toFixed(2)} ${convertedUnit}</strong>`;
    explanation.innerHTML = `🔍 Rumus: <strong>${formula}</strong>`;
    resultDiv.classList.remove("hidden");
}
