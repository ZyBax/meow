const loggingUrl = 'https://script.google.com/macros/s/AKfycbwkbu75xtpO0p_n2xBJIcjIEl2ykLHFGZebTetGH7MuEatFBnZRKO7IT83ddc39AB9NBg/exec';

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