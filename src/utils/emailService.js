import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_oiy3c1f';
const TEMPLATE_ID = 'template_fi9nx1k';
const PUBLIC_KEY = 'rttLxdeW_tZ4JiniU';

export const sendConfirmationEmail = async (userData) => {
    try {
        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                to_name: userData.name,
                to_email: userData.email,
                message: 'Thank you for registering with Fashe. Your account has been successfully created.',
            },
            PUBLIC_KEY
        );

        return response;
    } catch (error) {
        console.error('Email sending failed:', error);
        throw error;
    }
};