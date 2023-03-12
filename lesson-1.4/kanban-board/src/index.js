import AppEntryComponent from "./components/appEntryComponent";

function runApp() {
    /** В качестве корнегого элемента получаем элемент с id app */
    const root = document.querySelector('#app')

    new AppEntryComponent(root, {}).render()
}

runApp()