const animateCounter = () => {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // Speed of the counter animation

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target'); // Get target number
            const count = +counter.innerText.replace(/[^0-9.]/g, ''); // Get current count, remove non-numeric and non-decimal characters

            const increment = target / speed; // Increment value based on speed

            if (count < target) {
                // Update the counter with the next increment and format with decimals
                counter.innerText = (count + increment).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                setTimeout(updateCount, 10);
            } else {
                // Ensure final value is exactly the target and format with decimals
                counter.innerText = target.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            }
        };

        updateCount(); // Initialize the counter update
    });
};

// Check if the counter has already been run in this session
if (!sessionStorage.getItem('counterRan')) {
    // If not, run the counter and set the session flag
    animateCounter();
    sessionStorage.setItem('counterRan', 'true');
} else {
    // If the animation has already run, set the final values directly
    document.querySelectorAll('.count').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        counter.innerText = target.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    });
}
