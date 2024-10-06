const loggingUrl = 'https://script.google.com/macros/s/AKfycbyrir4q5puAMvoXb2RxRymzPQrK45DJwfGuFiO3yrolDIl498u0y46zBiZJWMM4kpLddw/exec';

window.onload = function() {
    fetch(loggingUrl)
        .then(response => {
            if (!response.ok) {
                console.error('Error logging visit:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
};