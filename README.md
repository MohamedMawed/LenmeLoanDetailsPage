## Lenme Mobile Application

### System Requirements

- Follow this guide to setup your local development environment https://reactnative.dev/docs/getting-started.html
- Run `pod install` inside the `ios` folder

### Common Errors

- `Error: spawnSync ./gradlew EACCES`. It may happen when you run `yarn android`. The fix: `chmod 755 android/gradlew`

### React Native commands

- `yarn install`: to install the packages
- `yarn android`: to run the app on the Android simulator
- `yarn ios`: to run the app on the iOS simulator
- `yarn android:clean`: to clean the android project if you have any build issues
