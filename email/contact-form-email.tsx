/* eslint-disable react/no-unescaped-entities */
import React from "react";

export type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
};

const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
    message,
    senderEmail,
}) => {
    return (
        <>
            <div>Mail from portfolio</div>
            <p>Dear Vishal,</p>
            <p>{message}</p>
        </>
    );
};

export default ContactFormEmail;
