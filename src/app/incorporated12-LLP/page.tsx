"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Incroprated12LLP = () => {
    const router = useRouter();
    const [numDirectors, setNumDirectors] = useState('');
    const [hasExistingDSC, setHasExistingDSC] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const directorOptions = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];

    const dscCount = numDirectors && !hasExistingDSC
        ? numDirectors
        : numDirectors && hasExistingDSC
            ? Math.max(0, parseInt(numDirectors) - 1).toString()
            : '{NUM}';

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
                {/* Active Indicator (Step 2 highlighted) */}
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
                            zIndex: 2,
                            fontFamily: "'Anek Latin', sans-serif"
                        }}>
                            {num}
                        </div>
                        {i < 4 && (
                            <div style={{
                                position: 'absolute',
                                width: '14px',
                                height: '1px',
                                background: '#AEAEAE',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                top: `${(i + 1) * 120}px`,
                                zIndex: 1
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
                borderLeft: '1px solid #AEAEAE',
                overflow: 'hidden'
            }}>
                {/* Back Button */}
                <div style={{ position: 'absolute', left: '70px', top: '55px', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => router.push('/incorporated6')}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M20 11H2M2 11L11 2M2 11L11 20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ marginLeft: '10px', fontWeight: 600, fontSize: '20px', color: '#000000', fontFamily: "'Anek Latin', sans-serif" }}>Back</span>
                </div>

                {/* Logo */}
                <img src="/ofran-black-logo.svg" alt="Logo" style={{ position: 'absolute', width: '20px', height: '20px', left: '653px', top: '57px' }} />
                <span style={{ position: 'absolute', width: '124px', height: '17px', left: '683px', top: '58px', fontWeight: 400, fontSize: '15px', color: '#686868', fontFamily: "'Anek Latin', sans-serif" }}>Ofran Incorporation</span>

                {/* Header Section */}
                <h1 style={{ position: 'absolute', left: '70px', top: '120px', fontWeight: 500, fontSize: '30px', color: '#000000', margin: 0, fontFamily: "'Anek Latin', sans-serif" }}>
                    Director Details
                </h1>
                <p style={{ position: 'absolute', width: '490px', left: '70px', top: '169px', fontWeight: 400, fontSize: '18px', color: '#686868', margin: 0, fontFamily: "'Anek Latin', sans-serif" }}>
                    Select the number of directors who will be involved in your business.
                </p>

                {/* Divider Line */}
                <div style={{ position: 'absolute', width: '739px', height: '0px', left: '70px', top: '222px', border: '1px solid rgba(174, 174, 174, 0.5)' }} />

                {/* Number of Directors Label */}
                <label style={{ position: 'absolute', left: '70px', top: '252px', fontWeight: 500, fontSize: '15px', color: '#686868', fontFamily: "'Anek Latin', sans-serif" }}>
                    Number of Directors
                </label>

                {/* Number of Directors Dropdown */}
                <div
                    style={{
                        position: 'absolute',
                        width: '420px',
                        height: '52px',
                        left: '70px',
                        top: '274px',
                        border: '1px solid #AEAEAE',
                        borderRadius: '7px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 16px',
                        cursor: 'pointer',
                        background: '#FFFFFF',
                        zIndex: dropdownOpen ? 20 : 1
                    }}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <span style={{ fontSize: '18px', color: numDirectors ? '#000000' : '#AEAEAE', fontWeight: 400, fontFamily: "'Anek Latin', sans-serif" }}>
                        {numDirectors || ''}
                    </span>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path d="M6 9L11.5 14.5L17 9" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* Dropdown Options */}
                {dropdownOpen && (
                    <div style={{
                        position: 'absolute',
                        width: '420px',
                        left: '70px',
                        top: '326px',
                        border: '1px solid #AEAEAE',
                        borderRadius: '7px',
                        background: '#FFFFFF',
                        zIndex: 30,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                        {directorOptions.map((opt) => (
                            <div
                                key={opt}
                                onClick={() => { setNumDirectors(opt); setDropdownOpen(false); }}
                                style={{
                                    padding: '12px 16px',
                                    fontSize: '18px',
                                    color: '#000000',
                                    cursor: 'pointer',
                                    fontWeight: 400,
                                    background: numDirectors === opt ? 'rgba(51, 149, 255, 0.08)' : '#FFFFFF',
                                    transition: 'background 0.15s',
                                    fontFamily: "'Anek Latin', sans-serif"
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(51, 149, 255, 0.08)')}
                                onMouseOut={(e) => (e.currentTarget.style.background = numDirectors === opt ? 'rgba(51, 149, 255, 0.08)' : '#FFFFFF')}
                            >
                                {opt}
                            </div>
                        ))}
                    </div>
                )}

                {/* DSC Selection Box */}
                <div style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '420px',
                    left: '70px',
                    top: '370px',
                    border: '1px solid #AEAEAE',
                    borderRadius: '7px',
                    padding: '16px 20px',
                    zIndex: 1
                }}>
                    {/* DSC Toggle Row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '16px', fontWeight: 500, color: '#000000', fontFamily: "'Anek Latin', sans-serif" }}>
                                One or more directors have an existing DSC.
                            </span>
                            <div style={{ cursor: 'pointer', flexShrink: 0 }}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <circle cx="7" cy="7" r="6.5" stroke="#000000" strokeWidth="1" />
                                    <path d="M7 10V7M7 4H7.01" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Toggle Switch */}
                        <div
                            onClick={() => setHasExistingDSC(!hasExistingDSC)}
                            style={{
                                width: '42px',
                                height: '23px',
                                background: hasExistingDSC ? '#3395FF' : '#D9D9D9',
                                borderRadius: '27px',
                                cursor: 'pointer',
                                transition: 'background 0.3s',
                                position: 'relative',
                                flexShrink: 0
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                width: '17px',
                                height: '17px',
                                left: hasExistingDSC ? '22px' : '3px',
                                top: '3px',
                                background: '#FFFFFF',
                                borderRadius: '27px',
                                transition: 'left 0.3s'
                            }} />
                        </div>
                    </div>

                    {/* Info Text */}
                    <p style={{ margin: 0, fontSize: '13px', fontWeight: 400, color: '#AEAEAE', lineHeight: '18px', fontFamily: "'Anek Latin', sans-serif" }}>
                        Select only if any director already has valid DSC.<br />
                        We'll only charge for directors who don't already<br />
                        have a DSC.
                    </p>
                </div>

                {/* DSC charge info text */}
                <div style={{
                    position: 'absolute',
                    width: '420px',
                    left: '70px',
                    top: '530px',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#AEAEAE',
                    lineHeight: '18px',
                    fontFamily: "'Anek Latin', sans-serif"
                }}>
                    Based on your input, only <strong style={{ color: '#AEAEAE' }}>{dscCount} new DSC</strong> will we issued &amp; charged
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

export default Incroprated12LLP;
