"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Incroprated4 = () => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState<'instant' | 'expert'>('instant');

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: '#FFFFFF',
            position: 'relative',
            fontFamily: "'Anek Latin', sans-serif",
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
                {/* Active Indicator (Step 1) */}
                <div style={{
                    position: 'absolute',
                    width: '18px',
                    height: '85px',
                    left: '0',
                    top: '0',
                    background: 'rgba(10, 198, 85, 0.5)',
                    borderRadius: '14px 14px 0px 0px'
                }} />

                {/* Step Numbers & Dividers */}
                {[1, 2, 3, 4, 5].map((num, i) => (
                    <React.Fragment key={num}>
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            top: `${(i * 120) + 55}px`,
                            fontWeight: 500,
                            fontSize: '11px',
                            color: '#000000'
                        }}>
                            {num}
                        </div>
                        {i < 4 && (
                            <div style={{
                                position: 'absolute',
                                width: '14px',
                                height: '1px',
                                background: '#AEAEAE',
                                top: `${(i + 1) * 120}px`
                            }} />
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Main Content Area */}
            <div style={{
                position: 'absolute',
                left: '50px',
                right: '0',
                top: '0',
                bottom: '0',
                borderLeft: '1px solid #4A4A4A'
            }}>
                {/* Top Nav */}
                <div style={{
                    position: 'absolute',
                    left: '70px',
                    top: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer'
                }} onClick={() => router.push('/incorporated3')}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M20 11H2M2 11L11 2M2 11L11 20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontWeight: 600, fontSize: '20px', marginLeft: '10px' }}>Back</span>
                </div>

                <div style={{
                    position: 'absolute',
                    left: '499px',
                    top: '38px',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img src="/ofran-black-logo.svg" alt="Logo" style={{ width: '20px', height: '20px' }} />
                    <span style={{ fontWeight: 400, fontSize: '15px', color: '#686868', marginLeft: '10px' }}>Ofran Incorporation</span>
                </div>

                {/* Header Section */}
                <div style={{ position: 'absolute', left: '70px', top: '147px' }}>
                    <h1 style={{ fontWeight: 500, fontSize: '30px', margin: 0 }}>Start your journey</h1>
                    <p style={{
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '22px',
                        color: '#686868',
                        maxWidth: '684px',
                        marginTop: '10px'
                    }}>
                        Select how you want to proceed with your company registration. For more details, view our <span style={{ color: '#3395FF', textDecoration: 'underline', cursor: 'pointer' }}>Payment & Refund Policy.</span>
                    </p>
                </div>

                {/* Divider */}
                <div style={{
                    position: 'absolute',
                    width: '739px',
                    height: '1px',
                    left: '70px',
                    top: '260px',
                    background: 'rgba(174, 174, 174, 0.5)'
                }} />

                {/* Options Selection */}
                <div style={{ position: 'absolute', left: '70px', top: '278px' }}>
                    <span style={{ fontWeight: 600, fontSize: '18px', color: '#000000' }}>Please select any one option:</span>

                    <div style={{ display: 'flex', gap: '20px', marginTop: '25px' }}>
                        {/* Option 1: Instant */}
                        <div
                            style={{
                                width: '418px',
                                height: '240px',
                                border: selectedOption === 'instant' ? '2px solid #3395FF' : '1px solid #D9D9D9',
                                borderRadius: '10px',
                                padding: '24px',
                                cursor: 'pointer',
                                background: '#FFFFFF',
                                position: 'relative'
                            }}
                            onClick={() => setSelectedOption('instant')}
                        >
                            <div style={{
                                background: '#3395FF',
                                borderRadius: '29px',
                                padding: '4px 12px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px',
                                marginBottom: '12px'
                            }}>
                                <img src="/star.svg" alt="Star" style={{ width: '13px', height: '13px' }} />
                                <span style={{ color: '#FFFFFF', fontSize: '11px', fontWeight: 500 }}>Ideal for experienced founders</span>
                            </div>

                            <h3 style={{ fontSize: '28px', margin: '0 0 5px 0', fontWeight: 500, color: '#000000' }}>Start registration instantly</h3>
                            <p style={{ fontSize: '12px', color: '#686868', margin: '0 0 15px 0', fontWeight: 400 }}>Begin your journey today. Complete payment (1599 + govt. fee) later</p>

                            <div style={{ height: '1px', background: '#F1F1F1', width: '100%', marginBottom: '15px' }} />

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <img src="/tick.svg" alt="Tick" style={{ width: '14px', height: '14px' }} />
                                    <span style={{ fontSize: '11px', color: '#686868', fontWeight: 400 }}>Select your company type and proceed with the registration process</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <img src="/tick.svg" alt="Tick" style={{ width: '14px', height: '14px' }} />
                                    <span style={{ fontSize: '11px', color: '#686868', fontWeight: 400 }}>Dedicated Relationship Manager</span>
                                </div>
                            </div>
                        </div>

                        {/* Option 2: Expert */}
                        <div
                            style={{
                                width: '418px',
                                height: '240px',
                                border: selectedOption === 'expert' ? '2px solid #3395FF' : '1px solid #D9D9D9',
                                borderRadius: '10px',
                                padding: '24px',
                                cursor: 'pointer',
                                background: '#FFFFFF',
                                position: 'relative'
                            }}
                            onClick={() => setSelectedOption('expert')}
                        >
                            <div style={{
                                background: '#EEF6FF',
                                borderRadius: '29px',
                                padding: '4px 12px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px',
                                marginBottom: '12px'
                            }}>
                                <img src="/office-bag.svg" alt="Office Bag" style={{ width: '13px', height: '13px' }} />
                                <span style={{ color: '#3395FF', fontSize: '11px', fontWeight: 500 }}>Ideal for first time founders</span>
                            </div>

                            <h3 style={{ fontSize: '28px', margin: '0 0 5px 0', fontWeight: 500, color: '#000000' }}>Unsure? Talk to an expert first</h3>
                            <p style={{ fontSize: '12px', color: '#686868', margin: '0 0 15px 0', fontWeight: 400 }}>Start with ₹1599 for expert help early, pay the govt. fee later</p>

                            <div style={{ height: '1px', background: '#F1F1F1', width: '100%', marginBottom: '15px' }} />

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <img src="/tick.svg" alt="Tick" style={{ width: '14px', height: '14px' }} />
                                    <span style={{ fontSize: '11px', color: '#686868', fontWeight: 400 }}>One-on-one expert consultation on company type, compliance, etc</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <img src="/tick.svg" alt="Tick" style={{ width: '14px', height: '14px' }} />
                                    <span style={{ fontSize: '11px', color: '#686868', fontWeight: 400 }}>Dedicated Relationship Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div style={{
                    position: 'absolute',
                    left: '70px',
                    bottom: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '15px'
                }}>
                    <span style={{ fontSize: '12px', color: '#686868' }}>Need help? Reach us at <span style={{ color: '#3395FF', cursor: 'pointer' }}>support@ofran.in</span></span>

                    <div style={{
                        width: '730px',
                        height: '59px',
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
                        onClick={() => router.push('/incorporated5')}
                    >
                        <span style={{ fontWeight: 500, fontSize: '27px', color: '#FFFFFF' }}>Proceed</span>
                    </div>
                </div>

                {/* Logout Icon */}
                <div style={{
                    position: 'absolute',
                    left: '-35px',
                    bottom: '30px',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s'
                }}
                    onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                    onClick={() => router.push('/')}
                >
                    <svg width="23" height="23" viewBox="0 0 25 24" fill="none">
                        <path d="M10 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V4C3 3.46957 3.21071 2.96086 3.58579 2.58579C3.96086 2.21071 4.46957 2 5 2H10" stroke="#686868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 16L21 12L17 8" stroke="#686868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 12H9" stroke="#686868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Incroprated4;
