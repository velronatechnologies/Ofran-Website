"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Incroprated = () => {
    const router = useRouter();

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

                    {/* Inner Logo (Merged Image Layers) */}
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

                    {/* Welcome Text */}
                    <p style={{
                        fontWeight: 300,
                        fontSize: '20px',
                        color: '#686868',
                        margin: '0 0 30px 0'
                    }}>
                        Welcome to <span style={{ fontWeight: 600, color: '#000000' }}>Ofran Incorporation</span>
                    </p>

                    <h2 style={{
                        fontWeight: 500,
                        fontSize: '30px',
                        lineHeight: '1.1',
                        color: '#000000',
                        maxWidth: '320px',
                        margin: '0 0 25px 0'
                    }}>
                        Get started with your phone number
                    </h2>

                    {/* Phone Input Row */}
                    <div style={{ display: 'flex', gap: '13px', marginBottom: '30px' }}>
                        {/* Country Code */}
                        <div style={{
                            width: '116px',
                            height: '50px',
                            border: '1px solid #AEAEAE',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 500,
                            fontSize: '20px',
                            color: '#000000'
                        }}>
                            +91
                        </div>

                        {/* Phone Number Field */}
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            style={{
                                flex: 1,
                                height: '50px',
                                border: '1px solid #AEAEAE',
                                borderRadius: '10px',
                                paddingLeft: '20px',
                                fontFamily: "'Anek Latin', sans-serif",
                                fontWeight: 500,
                                fontSize: '20px',
                                outline: 'none',
                                color: '#000000'
                            }}
                        />
                    </div>

                    {/* Continue Button */}
                    <button style={{
                        width: '100%',
                        height: '50px',
                        background: '#3395FF',
                        border: 'none',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '20px',
                        fontFamily: "'Anek Latin', sans-serif",
                        transition: 'opacity 0.2s'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                        onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                        onClick={() => router.push('/incorporated2')}
                    >
                        Continue
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Incroprated;
