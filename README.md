
# BhookhApp

BhookhApp is a simple restaurant app inspired by food delivery apps like Swiggy and Zomato. Built with **React Native**, the app demonstrates the use of clean code practices, a reusable component-based architecture, API integration, and consistent theming. This project is designed to showcase a modular and production-ready approach to React Native development.

---

## Features

- **Login Screen**:
  - Mock authentication using predefined users.
  - Basic input validation with error messages for invalid credentials.
- **Home Screen**:
  - Displays a personalized greeting with the logged-in user’s name.
  - Fetches and displays recipes from [dummyjson.com/recipes](https://dummyjson.com/recipes).
  - Includes a refresh button to re-fetch data from the API.
- **Theming**:
  - Consistent color palette and typography using a global `theme.js`.
- **Reusable Components**:
  - `CustomButton` for buttons.
  - `RecipeCard` for displaying recipe details.
- **Error Handling**:
  - Graceful error messages when API requests fail.

---

## Technologies Used

- **React Native CLI** (0.71+)
- **React Navigation** for screen transitions.
- **React Native Web** (optional, if targeting the web).
- **JavaScript** (with modular ES6+ syntax).
- **API Integration**: Fetch recipes from a dummy API.

---

## Installation and Setup

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js**: Download and install the latest LTS version from [Node.js](https://nodejs.org/).
- **React Native CLI**: Installed via `npx` (you don’t need a global installation).
- **Android Studio**: For Android builds.
- **Xcode**: For iOS builds (macOS only).

---

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Gaurav-glitchx/BhookhApp.git
   cd BhookhApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**:
   ```bash
   npx react-native start
   ```

4. **Run the app on Android**:
   ```bash
   npx react-native run-android
   ```
   Make sure an Android emulator is running or a physical device is connected.

5. **Run the app on iOS** (macOS only):
   - Install CocoaPods:
     ```bash
     cd ios
     pod install
     cd ..
     ```
   - Run the app:
     ```bash
     npx react-native run-ios
     ```

6. (Optional) **Run on Web**:
   If you’ve set up React Native Web or are using Expo:
   ```bash
   expo start --web
   ```

---

## Folder Structure

Here’s the organized folder structure of the project:

```
BhookhApp
├── android                 # Android native files
├── ios                     # iOS native files
├── src                     # Main source code
│   ├── components          # Reusable components
│   │   ├── CustomButton.js
│   │   └── RecipeCard.js
│   ├── constants           # Constants (e.g., mock users)
│   │   └── mockUsers.js
│   ├── controllers         # API integrations and logic
│   │   └── recipeController.js
│   ├── navigation          # Navigation setup
│   │   └── AppNavigator.js
│   ├── screens             # App screens
│   │   ├── LoginScreen.js
│   │   └── HomeScreen.js
│   ├── styles              # Theming and styling
│   │   └── theme.js
│   └── App.js              # Main app entry
├── app.json                # App configuration
├── index.js                # Entry point for React Native
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

---

## Usage Instructions

1. Launch the app on an emulator or device.
2. On the **Login Screen**, enter the following credentials (mocked users):
   - Username: `john`, Password: `123456`
   - Username: `jane`, Password: `password`
   - Username: `ashu`, Password: `secret`
3. Click **Login** to navigate to the **Home Screen**.
4. View the list of recipes fetched from the API.
5. Use the **Refresh** button to reload the recipe list.

---

## API Integration

The app fetches recipe data from [dummyjson.com/recipes](https://dummyjson.com/recipes).

Example response:
```json
{
  "recipes": [
    {
      "id": 1,
      "title": "Spaghetti Carbonara",
      "description": "A classic Italian pasta dish with creamy sauce.",
      "thumbnail": "https://via.placeholder.com/150"
    },
    ...
  ]
}
```

---

## Theming

The app uses a centralized `theme.js` for consistent design across components and screens.

### Example Theme
```js
export const COLORS = {
  primary: '#FF640D',
  text: '#2F2E41',
  background: '#FFFFFF',
  backgroundLight: '#ECECEC',
};

export const SIZES = {
  heading1: 39,
  body1: 20,
};
```

---

## Screenshots

Include screenshots of your app for Login and Home Screens here (optional):

| **Login Screen**               | **Home Screen**               |
|--------------------------------|--------------------------------|
| ![Login](assets/login.png)    | ![Home](assets/login.png)      |

---

## Challenges Faced

- Ensuring API requests and state management were handled cleanly.
- Maintaining consistent theming across screens and components.
- Simulating mock authentication for the Login Screen.

---

## Future Enhancements

1. **Pagination**: Add infinite scrolling for the recipe list.
2. **Search Functionality**: Allow users to search for specific recipes.
3. **Global State Management**: Implement Redux or Zustand for scalable state handling.
4. **Type Safety**: Use TypeScript for better type safety and code maintainability.
5. **Unit Tests**: Add tests for API calls and components.

---

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this code.

---

Feel free to modify the **README.md** to fit your project or organization’s requirements. It provides a detailed overview of the app while being easy to follow for developers or users.
