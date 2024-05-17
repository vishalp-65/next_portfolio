"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/validate";
import React from "react";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

// Define an in-memory map to store email limits
const emailLimits: Map<string, number> = new Map();

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail") as string;
    const message = formData.get("message") as string;

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    const limit = 2;

    const sentCount = emailLimits.get(senderEmail) || 0;
    if (sentCount >= limit) {
        return {
            error: "Email limit exceeded",
        };
    }

    // Send the email
    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "vishal65.p@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
            }),
        });

        // Increment the email count for the sender
        emailLimits.set(senderEmail, sentCount + 1);
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};
