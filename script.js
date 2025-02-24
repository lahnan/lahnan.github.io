const button = document.getElementById('hoverButton');

let counter = 0


button.addEventListener('mouseover', () => {
    button.textContent = "why you want know?";
    counter ++;
    
    if (counter == 20) {
        alert("Why You Still Want Click Me?");
    };

    if (counter == 40) {
        alert("Stop IT!");
      button.textContent = "hey stop";
    };

    if (counter > 40) {
        alert("PLEASE STOPPP!");
        button.textContent = "HEY STOPPP!";
    };

  // Get the viewport dimensions
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Get the button dimensions
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  // Calculate random positions within the viewport
  const randomX = Math.floor(Math.random() * (viewportWidth - buttonWidth));
  const randomY = Math.floor(Math.random() * (viewportHeight - buttonHeight));

  // Move the button to the new position
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
});

// Function to redirect to a random URL
function redirectToRandomWebsite() {
    // Define the URLs
    const url1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWS5-g9RsDet_hdcehy_N1JUhraoXrBW6d3Q&s"; // URL 1
    const url2 = "https://trakteer.id/lahnanadi/tip";  // URL 2
  
    // Generate a random number (0 or 1)
    const random = Math.floor(Math.random() * 2);
  
    // Redirect to the chosen URL
    if (random === 0) {
      window.location.href = url1; // Redirect to URL 1
    } else {
      window.location.href = url2; // Redirect to URL 2
    }
  }

// This is using ai /\ /\ /\



