document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.getElementById('star-container');
    const width = window.innerWidth;
    const height = window.innerHeight;
    const starSize = 2;
    const spacing = starSize * 2; // Ensure stars are not next to each other
    const numStars = Math.floor((width * height) / (spacing * spacing) * 0.2); // Adjust density as needed

    const placedStars = [];

    function isValidPosition(x, y) {
        for (let i = 0; i < placedStars.length; i++) {
            const [px, py] = placedStars[i];
            if (Math.abs(px - x) < spacing && Math.abs(py - y) < spacing) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < numStars; i++) {
        let x, y;
        do {
            x = Math.floor(Math.random() * (width - starSize));
            y = Math.floor(Math.random() * (height - starSize));
        } while (!isValidPosition(x, y));

        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        starContainer.appendChild(star);

        placedStars.push([x, y]);
    }
});
