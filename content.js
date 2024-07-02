(function() {
    // Link Form Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  
    //  fontFamily
    const newFontFamily = 'Noto Sans Thai, sans-serif';
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        font-family: ${newFontFamily} !important;
        font-weight: 500;
      }
    `;
    document.head.appendChild(style);
  })();