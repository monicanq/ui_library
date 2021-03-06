# React UI Library 

This UI library contains some components and hooks that I have been using through my projects. The css for each component has been added to the component folder and it is integrated in the component via css modules.

## Available Components

### 1. Responsive Navbar

Simple Responsive Navbar to use in projects that require a mobile menu. 

Hooks Required:
* useIsMobile.js

### 2. Dropdown items

Given an object with the dropdown data this component will create a series of dropdown items. The object provided to the component should have the following format:

    ```
    [
            {'id': 1,
            'title': 'Dropdown 1 title',
            'content': 'Dropdown 1 content'},
            {'id': 2,
            'title': 'Dropdown 2 title',
            'content': 'Dropdown 2 content'},
            {'id': 3,
            'title': 'Dropdown 3 title',
            'content': 'Dropdown 3 content'},
            {'id': 4,
            'title': 'Dropdown 4 title',
            'content': 'Dropdown 24 content'}
        ]
    ```

## Available Hooks

### 1. useIsMobile

Hook that calculates the innerwindowWidth and returns true if the window width is smaller than the breakpoint for mobile screens and false if the window width is bigger than the breakpoint for mobile screens.

**Return values true/false**

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


