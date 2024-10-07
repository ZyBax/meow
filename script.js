const loggingUrl = 'https://script.google.com/macros/s/AKfycbyuMRoy_7_Nzukp9U-UxGk8cgh7RbKUyQTYlhbchV4Zw0Yyn4UpEZ9XBL2i2ReNw1_sAg/exec';

window.onload = function() {
    const userAgent = navigator.userAgent;
    const referrer = document.referrer;
    const pageUrl = window.location.href;

    fetch(`${loggingUrl}?ip=${encodeURIComponent('Your_IP_Here')}&pageUrl=${encodeURIComponent(pageUrl)}&userAgent=${encodeURIComponent(userAgent)}&referrer=${encodeURIComponent(referrer)}`)
        .then(response => {
            if (!response.ok) {
                console.error('Error logging visit:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
};
