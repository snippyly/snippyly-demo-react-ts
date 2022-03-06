<img src="https://snippyly.com/assets/logo/logo_colored_black.svg" width="250">


# Snippyly React (TS) Demo
**This demo has two features:**
1. **Presence:** Who is online on this page.
2. **Live Cursors:** Where are the online users on the page. It shows their live cursor position.

# Run demo locally

Run `yarn start` command to run demo locally.

Here are key pointers if you are implementing Snippyly SDK in your own React (TS) app:

1. Copy `declarations.d.ts` file in `src/types` folder.
2. Add `SnippylyContext.ts` file in `src/context` folder.
3. Refer `App.tsx` code to load Snippyly and initialize it with your api key.
4. Refer `Toolbar.tsx` file to set user in Snippyly.
5. If you want to show user cursors then add `<snippyly-cursor></snippyly-cursor>` in `App.tsx` file.
6. If you want to show user presence then add `<snippyly-presence></snippyly-presence>`. In this demo, this tag is added in `Toolbar.tsx` component, but it can be added in any other component you want.

For more instructions and customization, please follow SDK Documentation.

# Live demo

### Live demo link
[https://snippyly-demo-react-ts.web.app](https://snippyly-demo-react-ts.web.app)

### Instructions to try the demo

**Steps:**
1. Open the above link in two tabs, side by side: **`tab 1`**: a regular tab; **`tab 2`**: an incognito tab
2. On **`tab 1`**: Sign in with one of the 3 users given. (e.g. James Smith)
3. On **`tab 2`**: Sign in with a user different than the one in previous step. (e.g. Maria Garcia)

**Note:**
* Now you will start seeing Presence icons and Live cursors for each of the users.
* For the cursors to work each, you need to ensure that the tab is active. You can click on the page to ensure that its active.

<img src="https://snippyly.com/assets/images/react-demo.gif" width="500">



# Documentation

### SDK documentation
[https://sdk.snippyly.com/docs](https://sdk.snippyly.com/docs)

