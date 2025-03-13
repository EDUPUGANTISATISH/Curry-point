document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let payment = document.getElementById("payment").value;
    let orderMessage = document.getElementById("orderMessage");

    if (name === "" || phone === "" || address === "") {
        orderMessage.style.color = "red";
        orderMessage.textContent = "All fields are required!";
        return;
    }

    // Display success message
    orderMessage.style.color = "blue";
    orderMessage.textContent = "Order placed successfully!";

    // Clear form after 3 seconds
    setTimeout(() => {
        document.getElementById("orderForm").reset();
        orderMessage.textContent = "";
    }, 3000);
});

// WhatsApp Chat Button (Replace with your WhatsApp number)
document.addEventListener("DOMContentLoaded", function() {
    let whatsappNumber = "+1234567890"; // Replace with your actual WhatsApp number
    let whatsappButton = document.createElement("a");
    whatsappButton.href = `https://wa.me/${whatsappNumber}`;
    whatsappButton.classList.add("whatsapp-button");
    whatsappButton.innerHTML = "📩";
    whatsappButton.target = "_blank";

    document.body.appendChild(whatsappButton);
});
