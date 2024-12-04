document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const couponCode = Array.from(urlParams.keys())[0]; // Get the first key as the coupon code
    const discountPercent = urlParams.get('discount'); // Extract the discount percentage
    const products = urlParams.get('products'); // Extract product names

    const couponElement = document.getElementById("couponCode");
    const copyButton = document.getElementById("copyButton");
    const couponBox = document.querySelector(".coupon-box");
    const thankYouMessage = document.getElementById("thankYouMessage");
    const productInfo = document.getElementById("productInfo");

    if (couponCode) {
        couponElement.textContent = couponCode;
    } else {
        couponElement.textContent = "No Coupon Found";
    }

    // Display dynamic thank you message
    if (discountPercent && products) {
        thankYouMessage.textContent = `Thank you for your purchase at JapanStore.LK!`;
        productInfo.textContent = `For your purchase, we have given you a ${discountPercent}% discount for your Next Purchase on the following products: ${products}.`;
    } else {
        thankYouMessage.textContent = "Thank you for shopping with us!";
        productInfo.textContent = "Enjoy your exclusive deals!";
    }

    // Tear animation on coupon click
    couponBox.addEventListener("click", () => {
        couponBox.classList.add("coupon-tear"); // Trigger realistic 3D tear animation
        setTimeout(() => {
            couponBox.classList.remove("coupon-tear"); // Remove animation after it's done
        }, 1500); // Duration matches the animation time
    });

    // Copy coupon code functionality
    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(couponCode)
            .then(() => {
                alert("Coupon code copied to clipboard!");
            })
            .catch(() => {
                alert("Failed to copy the coupon code.");
            });
    });
});
