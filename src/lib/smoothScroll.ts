'use client';

export const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  
  // Get the target element
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    // Scroll to the target element smoothly
    window.scrollTo({
      top: targetElement.offsetTop - 80, // Adjust offset as needed
      behavior: 'smooth',
    });
    
    // Update URL without page reload
    window.history.pushState(null, '', `#${targetId}`);
  }
};
