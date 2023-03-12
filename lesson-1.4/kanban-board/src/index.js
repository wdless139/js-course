import AppEntryComponent from "./components/AppEntryComponent";

function runApp() {
    const root = document.querySelector('#app')

    new AppEntryComponent(root, {}).render()
}

runApp()