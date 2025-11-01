import React, { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase/config"; // your firebase.js config file

const OtpLogin = () => {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [message, setMessage] = useState("");

    // Initialize reCAPTCHA only once
    const setupRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                auth,
                "recaptcha-container",
                {
                    size: "invisible", // auto trigger without showing box
                    callback: (response) => {
                        console.log("reCAPTCHA solved:", response);
                    },
                    "expired-callback": () => {
                        console.warn("reCAPTCHA expired. Please try again.");
                    },
                }
            );
        }
    };

    const sendOTP = async () => {
        if (!phone) return setMessage("Enter a valid phone number");
        setMessage("Sending OTP...");

        setupRecaptcha();
        const appVerifier = window.recaptchaVerifier;

        try {
            const confirmation = await signInWithPhoneNumber(auth, phone, appVerifier);
            setConfirmationResult(confirmation);
            setMessage("OTP sent successfully!");
        } catch (error) {
            console.error("Error during OTP send:", error);
            setMessage(error.message);
        }
    };

    const verifyOTP = async () => {
        if (!otp) return setMessage("Enter OTP");
        try {
            const result = await confirmationResult.confirm(otp);
            const user = result.user;
            console.log("User signed in:", user);
            setMessage(`✅ Phone verified: ${user.phoneNumber}`);
        } catch (error) {
            console.error("Invalid OTP:", error);
            setMessage("❌ Invalid OTP. Please try again.");
        }
    };

    return (
        <div style={styles.container}>
            <h2>📱 Firebase OTP Login</h2>
            <input
                style={styles.input}
                type="tel"
                placeholder="+91XXXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button style={styles.button} onClick={sendOTP}>
                Send OTP
            </button>

            {confirmationResult && (
                <>
                    <input
                        style={styles.input}
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button style={styles.button} onClick={verifyOTP}>
                        Verify OTP
                    </button>
                </>
            )}

            <div id="recaptcha-container"></div>

            <p style={styles.message}>{message}</p>
        </div>
    );
};

const styles = {
    container: {
        width: "300px",
        margin: "60px auto",
        textAlign: "center",
        fontFamily: "sans-serif",
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        fontSize: "16px",
    },
    button: {
        width: "100%",
        padding: "10px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
    },
    message: {
        marginTop: "10px",
        color: "#555",
    },
};

export default OtpLogin;
