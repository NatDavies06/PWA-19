const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.display = 'block';
});

// A click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.style.display = 'none';
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChocice;
    console.log('User repsonse to install prompt:', outcome);
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Application installed', event);
});
