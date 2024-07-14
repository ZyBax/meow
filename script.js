document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.getElementById('star-container');
    const content = document.getElementById('content');
    const width = window.innerWidth;
    const height = window.innerHeight;
    const starSize = 2;
    const spacing = starSize * 2;
    const margin = 50;
    const numStars = Math.floor((width * height) / (spacing * spacing) * 0.2);

    const placedStars = [];

    const contentRect = content.getBoundingClientRect();
    const contentBounds = {
        top: contentRect.top - margin,
        bottom: contentRect.bottom + margin,
        left: contentRect.left - margin,
        right: contentRect.right + margin
    };

    function isValidPosition(x, y) {
        if (
            x > contentBounds.left && x < contentBounds.right &&
            y > contentBounds.top && y < contentBounds.bottom
        ) {
            return false;
        }

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
