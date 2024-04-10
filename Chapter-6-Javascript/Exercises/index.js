document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('petrolForm');
    const calculateBtn = document.getElementById('calculateBtn');
    const totalCostDisplay = document.getElementById('totalCost');

    calculateBtn.addEventListener('click', function() {
        const costPerLiter = parseFloat(form.cost.value);
        const litersPurchased = parseFloat(form.liters.value);
        const totalCost = costPerLiter * litersPurchased;
        totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    });

    // Focus effect for input fields
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#007bff';
        });
        input.addEventListener('blur', function() {
            this.style.borderColor = '#ccc';
        });
    });
});
