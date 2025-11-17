// --- Start of Onclick Ad Code ---

        // 1. A flag to ensure the ad opens only once.
        let adOpened = false;

        // 2. The destination URL for the ad.
        const adUrl = 'https://utm.sukdev.qzz.io/ujmFA';

        // 3. The function that opens the new tab.
        function openAd() {
            // Check if the ad has already been opened.
            if (!adOpened) {
                // Open the URL in a new tab. '_blank' is the key part.
                window.open(adUrl, '_blank');
                
                // Set the flag to true so it doesn't open again.
                adOpened = true;
            }
        }

        // 4. Add an event listener to the entire document body.
        // This will trigger the 'openAd' function on the first click.
        document.body.addEventListener('click', openAd, { once: true });
        
        // The { once: true } option is a modern, clean way to make the 
        // event listener automatically remove itself after it runs once.
        // This is more efficient than using the `adOpened` flag alone.

        // --- End of Onclick Ad Code ---