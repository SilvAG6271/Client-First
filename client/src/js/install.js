//Retrieves html element and sets it to a variable
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
//declare a variable and set it to null 
let deferredPrompt = null; 

//function to show the installation button
const handleBeforeInstallPrompt = (event) => {
    deferredPrompt = event;

    butInstall.classList.remove("hidden");
};

//function to handle the click of the install button 
//and hide button once installed
const handleInstallClick = async () => {
 // TODO: Implement a click event handler on the `butInstall` element
    if (deferredPrompt) {
        deferredPrompt.prompt();

        deferredPrompt = null;

        butInstall.classList.add("hidden");
    }

};
//handles when app is installed and sets deferredPrompt back to null
const handleAppInstalled = () => {
    deferredPrompt = null;

    butInstall.classList.add("hidden");
};
// TODO: Add an handler for the `appinstalled` event
//Event listeners
window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
window.addEventListener("click", handleInstallClick);
window.addEventListener('appinstalled', handleAppInstalled);

