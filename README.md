Liverpool FC Fan Explorer 
A high-performance React Native application designed for the Scouse community. This project serves as a deep dive into Mobile UI Architecture, focusing on complex layout patterns and performance-optimized scrolling.

 Project Goals
The main objective of this project was to move beyond basic "Hello World" apps and master the intricacies of the React Native Flexbox engine. Specifically, I focused on:

Nested Text Wrapping: Implementing seamless "Read More" logic within paragraph components.

Asset Optimization: Handling local vs. remote images without layout thrashing.

Horizontal Data Visualization: Creating a "Seasons Stats" engine using a horizontally-oriented ScrollView.

 Key Features
Spotlight Card: A custom-designed profile card utilizing flexDirection: 'row' to balance visual assets with dense biographical text.
Dynamic Season Tracker: A horizontal scrollable component containing the last 10 years of LFC history.
Actionable UX: Direct deep-linking to official social channels and the LFC website using the Linking API.

Tech Stack & Architecture
Frontend: React Native (CLI) with TypeScript.
Layout: Flexbox-first design with a focus on flexGrow and contentContainerStyle for smooth scrolling performance.
State Management: Data-driven UI using local object arrays for efficient rendering.

 Getting Started
Prerequisites
Node.js (v18+)
Android Studio / Xcode
React Native CLI

Installation
Clone the repo:
git clone https://github.com/yourusername/ProjectTwo.git

Install dependencies:
npm install

Start Metro Bundler:
npm start

Launch the app:
npm run android  # For Android
# OR
npm run ios      # For iOS

 Challenges Overcome
One of the primary challenges was ensuring the Season Stats cards didn't "squish" when scrolling horizontally. I solved this by implementing a fixed width on the cards combined with contentContainerStyle to ensure the scroll engine correctly calculated the overflow boundaries.

##  Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
