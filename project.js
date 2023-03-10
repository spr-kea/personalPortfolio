
window.addEventListener('load', function() {
    const text = "Click the links below to visit pages dedicated to the project";
    const element = document.getElementById('welcomeAbout');
    let i = 0;
    const intervalId = setInterval(function() {
      element.textContent += text.charAt(i);
      i++;
      if (i === text.length) {
        clearInterval(intervalId);
      }
    }, 100);
  
    element.style.opacity = 0;
  
    const fadeInId = setInterval(function() {
      if (parseFloat(element.style.opacity) < 1) {
        element.style.opacity = parseFloat(element.style.opacity) + 1;
      } else {
        clearInterval(fadeInId);
      }
    }, 50);
  });