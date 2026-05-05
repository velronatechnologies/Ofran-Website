"use client";

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

const Incroprated2 = () => {
    const router = useRouter();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [isWhatsAppChecked, setIsWhatsAppChecked] = useState(true);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Handle OTP input change
    const handleOtpChange = (value: string, index: number) => {
        if (!/^\d*$/.test(value)) return; // Only allow digits

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1); // Only keep the last digit
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Handle backspace
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const isOtpComplete = otp.every(digit => digit !== '');

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            fontFamily: "'Anek Latin', sans-serif",
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Global CSS Reset for this page */}
            <style>
                {`
          body, html {
            margin: 0 !important;
            padding: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            overflow: hidden !important;
          }
          * {
            box-sizing: border-box;
          }
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        `}
            </style>
            <link href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@300;400;500;600&display=swap" rel="stylesheet" />

            {/* Background Image covering the entire screen */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url("/bg-image.svg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -2
            }} />

            {/* Dark gradient overlay to make text readable */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
                zIndex: -1
            }} />

            {/* Main Layout Container */}
            <div style={{
                width: '100%',
                height: '100%',
                padding: '30px 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'stretch',
                zIndex: 1
            }}>

                {/* Left Side Content */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flex: 1,
                    paddingRight: '50px'
                }}>
                    {/* Top Left Logo */}
                    <div>
                        <img
                            src="/ofran-logo2.svg"
                            alt="Ofran Logo"
                            style={{ width: '54px', height: '54px', cursor: 'pointer', borderRadius: '4px' }}
                            onClick={() => router.push('/')}
                        />
                    </div>

                    {/* Bottom Left Text & Features */}
                    <div style={{ marginBottom: '20px' }}>
                        <h1 style={{
                            fontWeight: 600,
                            fontSize: '30px',
                            lineHeight: '1.2',
                            color: '#FFFFFF',
                            maxWidth: '450px',
                            margin: '0 0 20px 0'
                        }}>
                            Join 25+ business who trusted us for their Company Registration
                        </h1>

                        <div style={{
                            display: 'flex',
                            gap: '30px',
                            fontWeight: 500,
                            fontSize: '15px',
                            color: '#FFFFFF',
                            flexWrap: 'wrap'
                        }}>
                            <span>Affordable Pricing</span>
                            <span>Best-in-Industry Support</span>
                            <span>Easy Tracking via Dashboard</span>
                        </div>
                    </div>
                </div>

                {/* Right Side Form Card */}
                <div style={{
                    width: '100%',
                    maxWidth: '480px',
                    height: '100%',
                    maxHeight: '800px',
                    background: '#FFFFFF',
                    borderRadius: '11px',
                    boxShadow: '0px 10px 40px rgba(0,0,0,0.2)',
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignSelf: 'center'
                }}>

                    {/* Inner Logo */}
                    <div style={{
                        position: 'relative',
                        width: '56px',
                        height: '56px',
                        marginBottom: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/Logo-Background.svg"
                            alt="Background"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                        <img
                            src="/LOGO-inside.png"
                            alt="Inner Logo"
                            style={{ position: 'relative', width: '31px', height: '31px', zIndex: 1, objectFit: 'contain' }}
                        />
                    </div>

                    <h2 style={{
                        fontWeight: 500,
                        fontSize: '30px',
                        lineHeight: '1.1',
                        color: '#000000',
                        maxWidth: '350px',
                        margin: '0 0 15px 0'
                    }}>
                        Almost there. Enter the OTP sent to your phone number
                    </h2>

                    {/* Phone Number Subtext */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '30px'
                    }}>
                        <span style={{ fontWeight: 400, fontSize: '16px', color: '#686868' }}>
                            +91 99999 99999
                        </span>
                        <button 
                            onClick={() => router.push('/incorporated')}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#3395FF',
                                fontWeight: 600,
                                fontSize: '14px',
                                cursor: 'pointer',
                                padding: 0,
                                textDecoration: 'none'
                            }}
                        >
                            Change
                        </button>
                    </div>

                    {/* OTP Input Fields */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '10px',
                        marginBottom: '30px'
                    }}>
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => { inputRefs.current[index] = el; }}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleOtpChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                style={{
                                    width: '54px',
                                    height: '54px',
                                    border: `1px solid ${digit !== '' ? '#3395FF' : '#AEAEAE'}`,
                                    borderRadius: '10px',
                                    textAlign: 'center',
                                    fontSize: '20px',
                                    fontWeight: 500,
                                    color: '#000000',
                                    outline: 'none',
                                    fontFamily: "'Anek Latin', sans-serif",
                                }}
                                placeholder="0"
                            />
                        ))}
                    </div>

                    {/* Continue Button */}
                    <button style={{
                        width: '100%',
                        height: '50px',
                        background: isOtpComplete ? '#3395FF' : '#D5EAFF',
                        border: 'none',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: isOtpComplete ? 'pointer' : 'default',
                        color: isOtpComplete ? '#FFFFFF' : '#3395FF',
                        fontWeight: 600,
                        fontSize: '20px',
                        fontFamily: "'Anek Latin', sans-serif",
                        transition: 'all 0.2s',
                        marginBottom: '20px',
                        opacity: isOtpComplete ? 1 : 0.8
                    }}
                        onMouseOver={(e) => {
                            if (isOtpComplete) e.currentTarget.style.opacity = '0.9';
                        }}
                        onMouseOut={(e) => {
                            if (isOtpComplete) e.currentTarget.style.opacity = '1';
                        }}
                        disabled={!isOtpComplete}
                        onClick={() => router.push('/incorporated3')}
                    >
                        Continue
                    </button>

                    {/* WhatsApp Updates Checkbox */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <div 
                            onClick={() => setIsWhatsAppChecked(!isWhatsAppChecked)}
                            style={{
                                width: '16px',
                                height: '16px',
                                border: '1px solid #AEAEAE',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: isWhatsAppChecked ? '#3395FF' : 'transparent',
                                borderColor: isWhatsAppChecked ? '#3395FF' : '#AEAEAE'
                            }}
                        >
                            {isWhatsAppChecked && (
                                <svg width="10" height="7" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )}
                        </div>
                        <span style={{
                            fontSize: '14px',
                            fontWeight: 400,
                            color: '#686868',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px'
                        }}>
                            Give me updates and information on WhatsApp 
                            <img src="/whatsapp.svg" alt="WhatsApp" style={{ width: '18px', height: '18px' }} />
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Incroprated2;
