"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Incroprated7 = () => {
    const router = useRouter();
    const [numDirectors, setNumDirectors] = useState('2');
    const [hasDSC, setHasDSC] = useState(false);

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

            {/* Main Content Area */}
            <div style={{
                position: 'absolute',
                left: '50px',
                right: '0',
                top: '0',
                bottom: '0',
                borderLeft: '1px solid rgba(174, 174, 174, 0.5)',
                overflow: 'hidden'
            }}>
                {/* Top Nav */}
                <div style={{ position: 'absolute', left: '70px', top: '55px', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => router.push('/incorporated6')}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M20 11H2M2 11L11 2M2 11L11 20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ marginLeft: '10px', fontWeight: 600, fontSize: '20px', color: '#000000', fontFamily: "'Anek Latin', sans-serif" }}>Back</span>
                </div>

                <img src="/ofran-black-logo.svg" alt="Logo" style={{ position: 'absolute', width: '20px', height: '20px', left: '653px', top: '57px' }} />
                <span style={{ position: 'absolute', width: '124px', height: '17px', left: '683px', top: '58px', fontWeight: 400, fontSize: '15px', color: '#686868', fontFamily: "'Anek Latin', sans-serif" }}>Ofran Incorporation</span>

                {/* Header Section */}
                <h1 style={{ position: 'absolute', left: '70px', top: '147px', fontWeight: 500, fontSize: '30px', color: '#000000', margin: 0, fontFamily: "'Anek Latin', sans-serif" }}>
                    Director Details
                </h1>
                <p style={{ position: 'absolute', width: '570px', left: '70px', top: '196px', fontWeight: 400, fontSize: '18px', color: '#686868', margin: 0, fontFamily: "'Anek Latin', sans-serif" }}>
                    Select the number of directors who will be involved in your business.
                </p>

                {/* Divider Line */}
                <div style={{ position: 'absolute', width: '739px', height: '0px', left: '70px', top: '248px', border: '1px solid rgba(174, 174, 174, 0.5)' }} />

                {/* Dropdown Section */}
                <label style={{ position: 'absolute', left: '70px', top: '278px', fontWeight: 500, fontSize: '15px', color: '#AEAEAE', fontFamily: "'Anek Latin', sans-serif" }}>Number of Directors</label>
                <div style={{
                    position: 'absolute',
                    width: '570px',
                    height: '52px',
                    left: '70px',
                    top: '300px',
                    border: '1px solid #AEAEAE',
                    borderRadius: '7px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 20px',
                    cursor: 'pointer'
                }}>
                    <span style={{ fontSize: '18px', color: '#000000', fontFamily: "'Anek Latin', sans-serif" }}>{numDirectors}</span>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path d="M6 9L11.5 14.5L17 9" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* DSC Switch Box */}
                <div style={{
                    position: 'absolute',
                    width: '570px',
                    height: hasDSC ? '230px' : '148px',
                    left: '70px',
                    top: '404px',
                    border: '1px solid #AEAEAE',
                    borderRadius: '7px',
                    padding: '20px',
                    transition: 'height 0.3s'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontWeight: 500, fontSize: '20px', color: '#000000', fontFamily: "'Anek Latin', sans-serif" }}>One or more directors have an existing DSC.</span>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ cursor: 'pointer' }}>
                                    <circle cx="7" cy="7" r="6.5" stroke="black" />
                                    <path d="M7 4V5" stroke="black" strokeLinecap="round" />
                                    <path d="M7 6.5V10" stroke="black" strokeLinecap="round" />
                                </svg>
                            </div>
                            <p style={{ width: '302px', fontSize: '15px', color: '#AEAEAE', fontWeight: 400, marginTop: '10px', lineHeight: '16px', margin: 0, fontFamily: "'Anek Latin', sans-serif" }}>
                                Select only if any director already has valid DSC. We’ll only charge for directors who don’t already have a DSC.
                            </p>
                        </div>

                        {/* Toggle Switch */}
                        <div 
                            onClick={() => setHasDSC(!hasDSC)}
                            style={{
                                width: '42px',
                                height: '23px',
                                background: hasDSC ? '#3395FF' : '#D9D9D9',
                                borderRadius: '27px',
                                position: 'relative',
                                cursor: 'pointer',
                                transition: 'background 0.2s'
                            }}
                        >
                            <div style={{
                                width: '17px',
                                height: '17px',
                                background: '#FFFFFF',
                                borderRadius: '27px',
                                position: 'absolute',
                                top: '3px',
                                left: hasDSC ? '22px' : '3px',
                                transition: 'left 0.2s',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {hasDSC && (
                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                        <path d="M1 4L3.5 6.5L9 1" stroke="#3395FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>

                    {hasDSC && (
                        <div style={{ marginTop: '25px' }}>
                            <label style={{ display: 'block', fontSize: '15px', color: '#686868', fontWeight: 500, marginBottom: '8px', fontFamily: "'Anek Latin', sans-serif" }}>Directors having valid DSC</label>
                            <div style={{
                                width: '100%',
                                height: '48px',
                                border: '1px solid #AEAEAE',
                                borderRadius: '7px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '0 15px',
                                cursor: 'pointer'
                            }}>
                                <span style={{ color: '#AEAEAE', fontSize: '15px', fontFamily: "'Anek Latin', sans-serif" }}>Select Option</span>
                                <svg width="18" height="18" viewBox="0 0 23 23" fill="none">
                                    <path d="M6 9L11.5 14.5L17 9" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>

                {/* Info Text */}
                <div style={{ 
                    position: 'absolute', 
                    left: '70px', 
                    top: hasDSC ? '650px' : '562px', 
                    fontSize: '15px', 
                    color: '#AEAEAE', 
                    fontWeight: 500,
                    transition: 'top 0.3s',
                    fontFamily: "'Anek Latin', sans-serif"
                }}>
                    Based on your input, only <span style={{ color: '#000000' }}>{hasDSC ? '1' : numDirectors}</span> new DSC will we issued & charged
                </div>

                {/* Next Button */}
                <div
                    style={{
                        position: 'absolute',
                        width: '700px',
                        height: '50px',
                        left: '70px',
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
                    onClick={() => router.push('/incorporated8-Pvt')}
                >
                    <span style={{ fontWeight: 500, fontSize: '25px', color: '#FFFFFF', fontFamily: "'Anek Latin', sans-serif" }}>Next</span>
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

export default Incroprated7;
