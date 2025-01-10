# 3D-Hover-Effect

A simple and interactive 3D hover effect gallery that creates a visually stunning experience when users hover over images. The project uses HTML, CSS, and JavaScript to create a 3D effect on the images, which makes them appear to "pop" out when hovered. It also includes the functionality to "open" an image (expand it) when clicked, with smooth transitions.

---

## Table of Contents

- [Overview](#overview)

- [Features](#features)

- [Installation](#installation)

- [Usage](#usage)

- [File Structure](#file-structure)

- [Code Explanation](#code-explanation)

- [Contributing](#contributing)

---

## Overview

This project allows you to display a set of images in a gallery format. Each image has a 3D hover effect that makes it appear to move forward when hovered over. The user can also click on an image to enlarge it, with a smooth transition effect. The gallery is fully responsive and uses Flexbox for layout.

- **Images container**: Displays images in a row.

- **3D hover effect**: Images "pop" out on hover with a 3D effect.

- **Click-to-expand**: Clicking on an image enlarges it with a smooth transition.

---

## Features

- **Responsive layout**: The gallery adapts to different screen sizes.

- **3D hover effect**: Provides an interactive 3D experience on hovering over images.

- **Click to open**: Clicking an image enlarges it and brings it to the foreground.

- **Smooth transitions**: All animations are smooth, providing a polished user experience.

---

## Installation

To get started with this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/3D-Hover-Effect.git
    ```

2. **Navigate into the project directory**:
    ```bash
    cd 3D-Hover-Effect
    ```

3. **Open the `index.html` file in your browser**:
    Simply open the `index.html` file in any modern web browser to see the gallery in action.

---

## Usage

1. **Hovering over an image**: When you hover over any image in the gallery, it will appear to pop out with a 3D effect.

2. **Clicking an image**: When you click on any image, it will enlarge and stay in the foreground. Clicking on it again will shrink it back to its original size.

The gallery is designed to be simple to use and interactive, offering a visually pleasing experience.

---

## File Structure

Here is an overview of the project file structure:

```bash
3D-Hover-Effect/ 
│ 
├── index.html       # The main HTML file containing the structure 
├── main.css         # The CSS file with styling for the gallery and 3D effects 
├── app.js           # JavaScript file handling the interactions (hover and click) 
├── images/          # Directory containing the image files for the gallery 
└── img-1.jpg 
└──  img-2.jpg 
└──  img-3.jpg 
└── ...              # Other images for the gallery
```

---

### Description of Files:

- **index.html**: The HTML file that structures the page and links the CSS and JavaScript files.

- **main.css**: The CSS file responsible for styling the images, setting up the 3D hover effect, and the animations.

- **app.js**: The JavaScript file that manages user interactions (click and hover events).

- **images**: Folder containing all image files used in the gallery.

---

## Code Explanation

### HTML (`index.html`)

- The HTML file defines the structure of the gallery, with each image inside a `div` element with the class `img`.

- The images are styled using CSS `background-image` properties instead of the `<img>` tag to allow for more flexible styling and effects.

- The `wrapper` and `images-container` divs are used to center the images on the page and provide the necessary layout using Flexbox.

### CSS (`main.css`)

- **Flexbox Layout**: The images are arranged in a row with `display: flex;` and centered both horizontally and vertically using `align-items: center` and `justify-content: center`.

- **3D Hover Effect**: When the user hovers over an image, it uses `transform: translateZ()` to create the illusion of the image moving towards the user. The `filter` property is also used to adjust the brightness and grayscale of the image.

- **Click-to-Expand Effect**: When an image is clicked, the `open` class is toggled, which triggers an enlargement of the image with a smooth transition.

- **Pseudo-Elements for Shadows**: `::before` and `::after` pseudo-elements are used to create shadows on either side of the images, enhancing the 3D effect.

### JavaScript (`app.js`)

- **Event Listener for Click**: The JavaScript listens for click events on the body. If the user clicks on an image (with the `.img` class), it toggles the `open` class, either enlarging or shrinking the clicked image. If the user clicks anywhere else, all images are reset to their original state.

- **Handling Image Interactions**: The `open` class is used to apply specific styles to an image when it is clicked (such as enlarging it). The script ensures that only one image is enlarged at a time by removing the `open` class from other images before adding it to the clicked image.

---

## Contributing

We welcome contributions to this project! To contribute:

1. **Fork the repository**.

2. **Create a new branch** (`git checkout -b feature-name`).

3. **Make your changes**.

4. **Commit your changes** (`git commit -am 'Add new feature'`).

5. **Push to the branch** (`git push origin feature-name`).

6. **Open a pull request**.

Please ensure your code follows the existing code style and passes any tests if applicable.


---

Thank you for checking out the **3D-Hover-Effect** project! We hope you enjoy the interactive gallery. If you have any questions or suggestions, feel free to open an issue or contribute to the project.
