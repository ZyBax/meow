const loggingUrl = 'https://meowsers.meowautos.workers.dev';

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
