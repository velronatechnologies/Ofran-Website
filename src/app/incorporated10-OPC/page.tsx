"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Incroprated10OPC = () => {
    const router = useRouter();
    const [hasDirectorDSC, setHasDirectorDSC] = useState(false);
    const [hasNomineeDSC, setHasNomineeDSC] = useState(false);

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
          .switch {
            position: relative;
            display: inline-block;
            width: 44px;
            height: 24px;
          }
          .switch input {
            opacity: 0;
            width: 0;
            height: 0;
          }
          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #D9D9D9;
            transition: .4s;
            border-radius: 24px;
          }
          .slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
          }
          input:checked + .slider {
            background-color: #3395FF;
          }
          input:checked + .slider:before {
            transform: translateX(20px);
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
                {/* Active Indicator (Step 2 - covering 1 and 2) */}
                <div style={{
                    position: 'absolute',
                    width: '18px',
                    height: '240px',
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
                            fontSize: '13px',
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

            {/* Vertical Separator Line */}
            <div style={{
                position: 'absolute',
                width: '1px',
                height: '100%',
                left: '50px',
                top: '0px',
                background: '#AEAEAE'
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
                {/* Back Button */}
                <div style={{ position: 'absolute', left: '70px', top: '55px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => router.push('/incorporated6')}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M20 11H2M2 11L11 2M2 11L11 20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{
                        marginLeft: '10px',
                        fontWeight: 600,
                        fontSize: '20px',
                        fontFamily: "'Anek Latin', sans-serif",
                        color: '#000000'
                    }}>Back</span>
                </div>

                {/* Logo Section */}
                <div style={{ position: 'absolute', left: '653px', top: '57px', display: 'flex', alignItems: 'center' }}>
                    <img src="/ofran-black-logo.svg" alt="Logo" style={{ width: '20px', height: '20px' }} />
                    <span style={{
                        marginLeft: '10px',
                        fontWeight: 400,
                        fontSize: '15px',
                        color: '#686868',
                        fontFamily: "'Anek Latin', sans-serif"
                    }}>Ofran Incorporation</span>
                </div>

                {/* Header Content */}
                <h1 style={{
                    position: 'absolute',
                    left: '70px',
                    top: '120px',
                    fontWeight: 500,
                    fontSize: '30px',
                    color: '#000000',
                    margin: 0,
                    fontFamily: "'Anek Latin', sans-serif"
                }}>Shareholder Details</h1>

                <p style={{
                    position: 'absolute',
                    width: '580px',
                    left: '70px',
                    top: '169px',
                    fontWeight: 400,
                    fontSize: '18px',
                    color: '#686868',
                    margin: 0,
                    fontFamily: "'Anek Latin', sans-serif"
                }}>An OPC has only 1 shareholder. Here, we are assuming the shareholder to be the only Director in the company.</p>

                {/* Horizontal Divider */}
                <div style={{
                    position: 'absolute',
                    width: '739px',
                    height: '1px',
                    left: '70px',
                    top: '243px',
                    background: 'rgba(174, 174, 174, 0.5)'
                }} />

                {/* Number of Directors Input */}
                <div style={{
                    position: 'absolute',
                    left: '70px',
                    top: '273px',
                    fontWeight: 500,
                    fontSize: '15px',
                    color: '#686868',
                    fontFamily: "'Anek Latin', sans-serif"
                }}>Number of Directors/Shareholders</div>

                <div style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '570px',
                    height: '52px',
                    left: '70px',
                    top: '295px',
                    background: '#F5F5F5',
                    border: '1px solid #AEAEAE',
                    borderRadius: '7px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 20px'
                }}>
                    <span style={{
                        fontWeight: 500,
                        fontSize: '15px',
                        color: '#000000',
                        fontFamily: "'Anek Latin', sans-serif"
                    }}>1</span>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path d="M6 9L11.5 14.5L17 9" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* DSC Selection Container */}
                <div style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '570px',
                    left: '70px',
                    top: '380px',
                    border: '1px solid #AEAEAE',
                    borderRadius: '7px',
                    padding: '16px 20px'
                }}>
                    {/* Director DSC Row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{
                                fontWeight: 500,
                                fontSize: '16px',
                                color: '#000000',
                                fontFamily: "'Anek Latin', sans-serif"
                            }}>Directors/Shareholders has an existing DSC.</span>
                            <div style={{ cursor: 'pointer', marginTop: '2px' }}>
                                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                                    <circle cx="7" cy="7" r="6.5" stroke="#000000" strokeWidth="1" />
                                    <path d="M7 10V7M7 4H7.01" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <div
                            onClick={() => setHasDirectorDSC(!hasDirectorDSC)}
                            style={{
                                width: '42px',
                                height: '22px',
                                background: hasDirectorDSC ? '#3395FF' : '#D9D9D9',
                                borderRadius: '27px',
                                cursor: 'pointer',
                                transition: 'background 0.3s',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                width: '16px',
                                height: '16px',
                                left: hasDirectorDSC ? '23px' : '3px',
                                top: '3px',
                                background: '#FFFFFF',
                                borderRadius: '50%',
                                transition: 'left 0.3s'
                            }} />
                        </div>
                    </div>

                    {/* Nominee DSC Row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{
                                fontWeight: 500,
                                fontSize: '16px',
                                color: '#000000',
                                fontFamily: "'Anek Latin', sans-serif"
                            }}>Nominee has an existing DSC.</span>
                            <div style={{ cursor: 'pointer', marginTop: '2px' }}>
                                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                                    <circle cx="7" cy="7" r="6.5" stroke="#000000" strokeWidth="1" />
                                    <path d="M7 10V7M7 4H7.01" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <div
                            onClick={() => setHasNomineeDSC(!hasNomineeDSC)}
                            style={{
                                width: '42px',
                                height: '22px',
                                background: hasNomineeDSC ? '#3395FF' : '#D9D9D9',
                                borderRadius: '27px',
                                cursor: 'pointer',
                                transition: 'background 0.3s',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                width: '16px',
                                height: '16px',
                                left: hasNomineeDSC ? '23px' : '3px',
                                top: '3px',
                                background: '#FFFFFF',
                                borderRadius: '50%',
                                transition: 'left 0.3s'
                            }} />
                        </div>
                    </div>

                    {/* Info Text inside box */}
                    <p style={{
                        fontWeight: 400,
                        fontSize: '13px',
                        color: '#AEAEAE',
                        margin: 0,
                        lineHeight: '1.4',
                        fontFamily: "'Anek Latin', sans-serif"
                    }}>
                        Select only if the director/shareholder or nominee already has an existing DSC. We’ll only charge for new DSCs issued.
                    </p>
                </div>

                {/* Charge Info text (outside box) */}
                <div style={{
                    position: 'absolute',
                    left: '70px',
                    top: '525px',
                    fontWeight: 500,
                    fontSize: '13px',
                    color: '#AEAEAE',
                    fontFamily: "'Anek Latin', sans-serif",
                    lineHeight: '1.4'
                }}>
                    Based on your input, only {hasDirectorDSC ? '0' : '1'} Director/Shareholder and {hasNomineeDSC ? '0' : '1'} Nominee DSC will be issued & charged
                </div>

                {/* Next Button */}
                <div
                    style={{
                        position: 'absolute',
                        width: '700px',
                        height: '59px',
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
                    <span style={{
                        fontWeight: 500,
                        fontSize: '27px',
                        color: '#FFFFFF',
                        fontFamily: "'Anek Latin', sans-serif"
                    }}>Next</span>
                </div>
            </div>

            {/* Logout Icon */}
            <div style={{
                position: 'absolute',
                width: '25px',
                height: '24px',
                left: '13px',
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

export default Incroprated10OPC;
