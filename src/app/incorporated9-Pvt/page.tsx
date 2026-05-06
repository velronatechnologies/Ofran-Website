"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Incroprated9Pvt = () => {
    const router = useRouter();

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <style>
                {`
          body, html {
            margin: 0;
            padding: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
          }
          * {
            box-sizing: border-box;
          }
        `}
            </style>
            <link href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@300;400;500;600&display=swap" rel="stylesheet" />

            {/* Vertical Indicator Bar (Left) */}
            <div style={{
                position: 'absolute',
                width: '18px',
                height: '600px',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#F1F1F1',
                borderRadius: '14px'
            }}>
                {/* Active Indicator (Step 1 & 2) */}
                <div style={{
                    position: 'absolute',
                    width: '18px',
                    height: '215px',
                    left: '0',
                    top: '0',
                    background: 'rgba(10, 198, 85, 0.5)',
                    borderRadius: '14px 14px 0px 0px'
                }} />

                {[1, 2, 3, 4, 5].map((num, i) => (
                    <React.Fragment key={num}>
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            top: `${(i * 120) + 55}px`,
                            fontWeight: 500,
                            fontSize: '11px',
                            color: '#000000',
                            fontFamily: "'Anek Latin', sans-serif"
                        }}>
                            {num}
                        </div>
                        {i < 4 && (
                            <div style={{
                                position: 'absolute',
                                width: '14px',
                                height: '1px',
                                background: 'rgba(174, 174, 174, 0.5)',
                                top: `${(i + 1) * 120}px`
                            }} />
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Vertical Separator Line */}
            <div style={{
                position: 'absolute',
                width: '1px',
                height: '100%',
                left: '50px',
                top: '0px',
                background: 'rgba(174, 174, 174, 0.5)'
            }} />

            {/* Main Content Area */}
            <div style={{
                position: 'absolute',
                left: '50px',
                right: '0',
                top: '0',
                bottom: '0',
                overflow: 'hidden'
            }}>
                {/* Top Nav */}
                <div style={{
                    position: 'absolute',
                    left: '70px',
                    top: '55px',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer'
                }} onClick={() => router.push('/incorporated8-Pvt')}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M20 11H2M2 11L11 2M2 11L11 20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontWeight: 600, fontSize: '20px', marginLeft: '10px', fontFamily: "'Anek Latin', sans-serif" }}>Back</span>
                </div>

                {/* Logo & Header Title */}
                <div style={{
                    position: 'absolute',
                    left: '653px',
                    top: '57px',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img src="/ofran-black-logo.svg" alt="Logo" style={{ width: '20px', height: '20px' }} />
                    <span style={{ fontWeight: 400, fontSize: '15px', color: '#686868', marginLeft: '10px', fontFamily: "'Anek Latin', sans-serif" }}>Ofran Incorporation</span>
                </div>

                {/* Page Title & Description */}
                <div style={{ position: 'absolute', left: '70px', top: '147px' }}>
                    <h1 style={{ fontWeight: 500, fontSize: '35px', margin: 0, color: '#000000', fontFamily: "'Anek Latin', sans-serif" }}>State of Registration</h1>
                    <p style={{
                        fontWeight: 400,
                        fontSize: '20px',
                        lineHeight: '22px',
                        color: '#686868',
                        maxWidth: '472px',
                        marginTop: '10px',
                        fontFamily: "'Anek Latin', sans-serif"
                    }}>
                        Choose a state where you plan to register your company. Note: Stamp duty may differ for each state.
                    </p>
                </div>

                {/* Horizontal Divider */}
                <div style={{
                    position: 'absolute',
                    width: '739px',
                    height: '1px',
                    left: '70px',
                    top: '270px',
                    background: 'rgba(174, 174, 174, 0.5)'
                }} />

                {/* State Selection Dropdown */}
                <div style={{ position: 'absolute', left: '70px', top: '300px' }}>
                    <label style={{ fontWeight: 500, fontSize: '15px', color: '#686868', display: 'block', marginBottom: '7px', fontFamily: "'Anek Latin', sans-serif" }}>State</label>
                    <div style={{
                        width: '570px',
                        height: '52px',
                        border: '1px solid #AEAEAE',
                        borderRadius: '7px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 20px',
                        cursor: 'pointer',
                        background: '#FFFFFF'
                    }}>
                        <span style={{ fontWeight: 400, fontSize: '15px', color: '#AEAEAE', fontFamily: "'Anek Latin', sans-serif" }}>Select Option</span>
                        <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9L12 15L18 9" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* Continue Button */}
                <div style={{
                    position: 'absolute',
                    width: '730px',
                    height: '59px',
                    left: '79px',
                    bottom: '30px',
                    background: '#3395FF',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s'
                }}
                    onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                    onClick={() => router.push('/incorporated11')}
                >
                    <span style={{ fontWeight: 500, fontSize: '27px', color: '#FFFFFF', fontFamily: "'Anek Latin', sans-serif" }}>Continue</span>
                </div>
            </div>

            {/* Logout Icon */}
            <div style={{
                position: 'absolute',
                width: '25px',
                height: '24px',
                left: '15px',
                bottom: '30px',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
                zIndex: 100
            }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                onClick={() => router.push('/')}
            >
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M10 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V4C3 3.46957 3.21071 2.96086 3.58579 2.58579C3.96086 2.21071 4.46957 2 5 2H10" stroke="#686868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 16L21 12L17 8" stroke="#686868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12H9" stroke="#686868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};

export default Incroprated9Pvt;
