function getIntegerValue(inputId) {
    const inputFieldValue = parseFloat(document.getElementById(inputId).value);
    return inputFieldValue;
};
let count =0;
function areaCalculation(firstId, secondId, type) {
    const firstVariable = getIntegerValue(firstId);
    // const secondVariable = secondId === 0 ? 1 : getIntegerValue(secondId);

    let secondVariable;

    if (secondId === 0) {
        secondVariable = 1;
    } else {
        secondVariable = getIntegerValue(secondId);
    }
    
    if (type === 'triangle') {
        const area = .5 * firstVariable * secondVariable;
        count++;
        return area.toFixed(3);
    }
    else if (type === 'rectangle') {
        const area = firstVariable * secondVariable;
        count++;
        return area.toFixed(3);
    }
    else if (type === 'parallelogram') {
        const area = firstVariable * secondVariable;
        count++;
        return area.toFixed(3);
    }
    else if (type === 'rhombus') {
        const area = .5 * firstVariable * secondVariable;
        count++;
        return area.toFixed(3);
    }
    else if (type === 'pentagon') {
        const area = (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(firstVariable, 2);
        count++;
        return area.toFixed(3);
    }
    else if (type === 'ellipse') {
        const area = Math.PI * firstVariable * secondVariable;
        count++;
        return area.toFixed(3);
    }
};


function showAreaValue(area,type) {
    const parent = document.getElementById('area-record');
    const p = document.createElement('p');
    p.textContent = count+"." +"Calculated Area of "+ type.toUpperCase() + ": " + area;
    parent.appendChild(p);
}


document.getElementById('btn-t').addEventListener('click', function() {
    const firstValue = 't-in-b';
    const secondValue = 't-in-h';
    const area = areaCalculation(firstValue, secondValue, 'triangle');
    showAreaValue(area,'triangle');
});

document.getElementById('btn-r').addEventListener('click',function () {
    const firstValue = 'r-in-w';
    const secondValue = 'r-in-l';
    const area = areaCalculation(firstValue, secondValue, 'rectangle');
    showAreaValue(area,'rectangle');
});
document.getElementById('btn-p').addEventListener('click',function () {
    const firstValue = 'p-in-b';
    const secondValue = 'p-in-h';
    const area = areaCalculation(firstValue, secondValue, 'parallelogram');
    showAreaValue(area,'parallelogram');
});
document.getElementById('btn-rh').addEventListener('click',function () {
    const firstValue = 'r-in-d1';
    const secondValue = 'r-in-d2';
    const area = areaCalculation(firstValue, secondValue, 'rhombus');
    showAreaValue(area,'rhombus');
});
document.getElementById('btn-pen').addEventListener('click',function () {
    const firstValue = 'p-in-a';
    const area = areaCalculation(firstValue, 0, 'pentagon');
    showAreaValue(area,'pentagon');
});
document.getElementById('btn-e').addEventListener('click',function () {
    const firstValue = 'e-in-a';
    const secondValue = 'e-in-b';
    const area = areaCalculation(firstValue, secondValue, 'ellipse');
    showAreaValue(area,'ellipse');
});