// js/bmi.js
document.addEventListener('DOMContentLoaded', () => {
    
    const bmiForm = document.getElementById('bmiForm');
    const bmiValueEl = document.getElementById('bmiValue');
    const bmiCategoryEl = document.getElementById('bmiCategory');
    const scaleIndicator = document.getElementById('scaleIndicator');
    const bmiMessage = document.getElementById('bmiMessage');
    
    if (bmiForm) {
        bmiForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const heightCm = parseFloat(document.getElementById('bmiHeight').value);
            const weightKg = parseFloat(document.getElementById('bmiWeight').value);
            
            if (!heightCm || !weightKg) return;
            
            const heightM = heightCm / 100;
            const bmi = (weightKg / (heightM * heightM)).toFixed(1);
            
            updateBMIDisplay(bmi);
        });
    }

    function updateBMIDisplay(bmi) {
        bmiValueEl.innerText = bmi;
        
        let category = '';
        let color = '';
        let percentage = 0;
        let message = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            color = '#00cc66';
            percentage = Math.max(0, (bmi - 15) / (18.5 - 15) * 20); // 0-20%
            message = 'You are underweight. Consider consulting a nutritionist to help you gain weight healthily.';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal Weight';
            color = '#d4ff00';
            percentage = 20 + ((bmi - 18.5) / (24.9 - 18.5) * 20); // 20-40%
            message = 'You are in a healthy weight range. Keep up the good work!';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
            color = '#ffc107';
            percentage = 40 + ((bmi - 25) / (29.9 - 25) * 20); // 40-60%
            message = 'You are slightly overweight. Regular exercise and a balanced diet can help.';
        } else if (bmi >= 30 && bmi < 34.9) {
            category = 'Obese (Class I)';
            color = '#ff5722';
            percentage = 60 + ((bmi - 30) / (34.9 - 30) * 20); // 60-80%
            message = 'Your BMI falls into the obesity category. Please consult a healthcare provider.';
        } else {
            category = 'Obese (Class II/III)';
            color = '#ff3366';
            percentage = 80 + Math.min(20, ((bmi - 35) / 10 * 20)); // 80-100%
            message = 'Your BMI indicates severe obesity. It is highly recommended to seek medical advice.';
        }

        bmiCategoryEl.innerText = category;
        bmiCategoryEl.style.color = color;
        bmiValueEl.style.color = color;
        
        // Cap percentage
        percentage = Math.max(0, Math.min(100, percentage));
        scaleIndicator.style.left = `${percentage}%`;
        
        bmiMessage.innerText = message;
    }
});
