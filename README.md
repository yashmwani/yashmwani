# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Setup Instructions

### Configuration Files

The website requires two configuration files in the `js` folder:

1. `js/analytics-config.js` - Google Analytics configuration
2. `js/email-config.js` - EmailJS configuration for the contact form

#### Setting up Google Analytics

1. Create a Google Analytics 4 property
2. Get your Measurement ID (starts with 'G-')
3. Update `js/analytics-config.js` with your Measurement ID:
```javascript
const analyticsConfig = {
    measurementId: 'G-XXXXXXXXXX' // Replace with your actual ID
};
```

#### Setting up EmailJS

1. Create an EmailJS account
2. Create an email service
3. Create an email template
4. Get your public key
5. Update `js/email-config.js` with your credentials:
```javascript
const emailjsConfig = {
    serviceID: 'service_xxxxxxxx',
    templateID: 'template_xxxxxxxx',
    publicKey: 'public_key_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
};
```

### Template File

A template file `js/config.template.js` is provided as a reference. You can copy this file to create your actual configuration files.

## Security Note

The configuration files contain sensitive information and are not tracked in Git. Make sure to:
- Never commit your actual configuration files
- Keep your API keys and credentials secure
- Use environment variables in production environments

## Features

- Responsive design
- Modern UI/UX
- Contact form with EmailJS integration
- Google Analytics integration
- Smooth scrolling
- Mobile-friendly navigation
- Certificate viewing system
- Project showcase
- Experience timeline
- Education timeline
- Publications section

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- EmailJS
- Google Analytics
- GSAP (GreenSock Animation Platform)
- Font Awesome Icons

## License

This project is licensed under the MIT License - see the LICENSE file for details.
