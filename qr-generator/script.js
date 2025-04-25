let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value.trim().length > 0) {
        // Generate QR code and show the image box
        const qrCodeURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        qrImage.src = qrCodeURL;
        imgBox.classList.add("show-img");

        // Clear the input field after generating the QR code
        qrText.value = "";

    } else {
        // Handle empty input field (show an error class and a message)
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}

// Optional: You can add an event listener to trigger the function when a button is clicked
document.getElementById("generate-btn").addEventListener("click", generateQR);
