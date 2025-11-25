# Image Gallery Task

## Task Overview
Utkrusht seeks an interactive, responsive image gallery as a feature for its proof-of-skills platform. This gallery should request image data from a remote API, display the images in a well-organized grid, and allow users to expand images into a basic modal. You must ensure the UI handles data loading, error cases, and is responsive across device sizes. The primary goal is to demonstrate your ability to combine asynchronous data fetching, state management, and simple rendering optimizations in a real-world scenario using React and TypeScript.

## Helpful Tips
- Consider how to coordinate data retrieval when the component first becomes visible to users
- Think about what information needs to be tracked as data moves through different states (pending, available, failed)
- Explore patterns for providing user feedback during operations that take time to complete
- Review approaches for managing visibility of overlapping interface elements
- Consider how layout systems can adapt content arrangement based on available space
- Think about which pieces of your interface need to update when specific data changes
- Explore techniques that prevent components from updating unnecessarily when their inputs haven't changed
- Consider organizing related functionality into reusable, focused modules
- Review how type definitions can document expected data shapes and catch mismatches early
- Think about accessibility concerns when content appears over existing interface elements
- Explore strategies for maintaining smooth interactions even as data volumes grow

## Objectives
- Fetch image data asynchronously from the API upon gallery initialization and render all images in a grid.
- Show a loading indicator while fetching and show a clear error message if fetching fails.
- Render each image in the grid. On clicking an image, open a modal overlay with a larger view.
- Allow users to close the modal to return to the gallery.
- Ensure the gallery is responsive and visually adapts to different screen sizes.
- Use TypeScript for type safety throughout.
- Minimize unnecessary re-renders and ensure performant updates, especially when opening/closing modals or updating loading/error states.

## How to Verify
- When loaded, the gallery shows all images from the mock API in a grid layout, adapting to window size changes.
- During image fetch, a loading indicator is visible. If the fetch fails, an error message is clearly shown.
- Clicking any image opens it in a modal overlay, and closing the modal restores the grid view. The modal overlay must block background interaction when open.
- Images and modal content update smoothly without flicker or excessive UI re-renders.
- Codebase uses logical component, hook, and utility separation, all in TypeScript, and is well-organized and clean.
- Type correctness is enforced and the gallery is free from runtime TypeScript errors.
