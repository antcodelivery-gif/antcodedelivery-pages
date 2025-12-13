let contactForm;
let notifyModal;
let modelBackdropElement;

// 2. Initialize everything once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Initialize the Bootstrap Modal instance
    const modalElement = document.getElementById('notify-modal');
    modelBackdropElement = document.getElementById('modalBackdrop');
    if (modalElement) {
        notifyModal = new bootstrap.Modal(modalElement);
    }

    // Initialize the Form reference
    contactForm = document.getElementById('contactForm');

});

function sendEmail() {
    const recipient = "contact@ant.delivery";
    const subject = "Services Inquiry";
    const body = "I am writing to ask about...";

    // 1. URL-encode the subject and body to handle spaces and special characters.
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // 2. Construct the full mailto link.
    // Note: Use ? for the first parameter and & for subsequent parameters.
    const mailtoLink = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;

    // 3. Set the browser's location to the mailto link to trigger the email client.
    window.location.href = mailtoLink;
}

function openNotifyMeForm() {
    // alert("Notify Me");
    openModal();
}

// Function to open the modal
function openModal() {
    notifyModal.show();
    modelBackdropElement.style.display = 'visible';
}

// Function to close the modal (if you needed to call it from JS)
function closeModal() {
    notifyModal.hide();
    modelBackdropElement.style.display = 'none';
}

// Add an event listener to handle the form submission
// contactForm.addEventListener('submit', function(event) );

function submitContactForm() {
    // 1. Prevent the default form submission (page reload)
    event.preventDefault();

    // 2. Simple form validation check (in this example, we just check HTML5 'required')
    if (!contactForm.checkValidity()) {
        // If validation fails, let the browser show its error messages
        contactForm.classList.add('was-validated');
        return;
    }

    // 3. Get the form data
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        phoneNumber: formData.get('phoneNumber'),
        companyName: formData.get('companyName')
    };

    console.log("Form Data Submitted:", data);

    // --- Replace this block with your actual server-side submission (e.g., using fetch) ---
    // Example:
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
        // Show success message or close modal
        closeModal();
    })
    .catch(error => {
        console.error('Error:', error);
        // Show error message
    });
    */
    // ----------------------------------------------------------------------------------

    // For this example, we just log and then close the modal
    alert(`Thank you, ${data.name}! Details submitted.`);
    closeModal();
    contactForm.reset(); // Clear the form fields

    // Remove validation class after successful submission
    contactForm.classList.remove('was-validated');
}