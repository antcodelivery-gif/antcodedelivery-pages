let contactForm;
let notifyModal;
let modelBackdropElement;

const SHEETS_URL = "https://script.google.com/macros/s/AKfycbyY_TQzG4ny4TskydNFdFfvJq2UmgknY2GWCuSloZ_803IM5IS5XLZL8zzC3wQqO1hb/exec"

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

function becomeVendor() {
    // alert("Notify Me");
    openModal();
}

// Function to open the modal
function openModal() {
    notifyModal.show();
    contactForm.reset();
    modelBackdropElement.style.display = 'visible';
}

// Function to close the modal (if you needed to call it from JS)
function closeModal() {
    notifyModal.hide();
    modelBackdropElement.style.display = 'none';
}

// Add an event listener to handle the form submission
// contactForm.addEventListener('submit', function(event) );

async function submitContactForm() {
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
        companyName: formData.get('companyName'),
        companyAddress: formData.get('companyAddress'),
    };

    console.log("Form Data Submitted:", data);

    try {
        // We use 'no-cors' mode because Google Apps Script redirects (302)
        // to a different domain, which often triggers CORS errors
        // even if the data is successfully written.
        await fetch(SHEETS_URL, {
            method: "POST",
            mode: "no-cors",
            body: formData,
        });

        console.log("Data sent successfully!");
        alert(`Thank you, ${data.name}! Details submitted.`);
    } catch (error) {
        console.error("Error submitting form:", error);
        alert(`There was an error trying to submit the details, Please try again later.`);
    }

    // For this example, we just log and then close the modal

    closeModal();
    contactForm.reset(); // Clear the form fields

    // Remove validation class after successful submission
    contactForm.classList.remove('was-validated');
}