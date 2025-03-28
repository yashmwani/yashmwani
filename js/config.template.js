// Configuration Template
// Copy this file to create your actual configuration files

// Google Analytics Configuration
const analyticsConfig = {
    measurementId: 'G-TB08L3NC72' // Replace with your actual Google Analytics Measurement ID
};

// EmailJS Configuration
const emailjsConfig = {
    serviceID: 'service_xz9fs8j', // Replace with your EmailJS service ID
    templateID: 'template_829tywj', // Replace with your EmailJS template ID
    publicKey: 'GKOPivKvZPL3R7B86' // Replace with your EmailJS public key
};

// Export configurations
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        analyticsConfig,
        emailjsConfig
    };
} 