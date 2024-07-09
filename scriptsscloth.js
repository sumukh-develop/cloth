document.addEventListener("DOMContentLoaded", function() {
    const clothForm = document.getElementById('clothForm');

    clothForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate the form
        let valid = true;
        const categoryInputs = document.querySelectorAll('input[name="category[]"]');
        let categoryChecked = false;

        for (const input of categoryInputs) {
            if (input.checked) {
                categoryChecked = true;
                break;
            }
        }

        if (!categoryChecked) {
            alert("Please select at least one category.");
            valid = false;
        }

        const clothName = document.getElementById('clothName').value.trim();
        const clothDescription = document.getElementById('clothDescription').value.trim();
        const pickupDate = document.getElementById('pickupDate').value.trim();
        const clothImage = document.getElementById('clothImage').files.length;

        if (clothName === '' || clothDescription === '' || pickupDate === '' || clothImage === 0) {
            alert("Please fill out all required fields.");
            valid = false;
        }

        if (valid) {
            // Process the form data
            const formData = new FormData(clothForm);

            // Log the form data for testing purposes
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            // Display success message
            alert("Form submitted successfully!");
            
            // Reset the form
            clothForm.reset();
        }
    });
});
