// Function to get image URL
export function getImageUrl(path) {
  try {
    // Try to import the image directly
    return new URL(`../assets/images/${path}`, import.meta.url).href;
  } catch (error) {
    console.error(`Error loading image: ${path}`, error);
    // Return a placeholder if the image can't be loaded
    return 'https://placehold.co/600x400?text=Image+Not+Found';
  }
}