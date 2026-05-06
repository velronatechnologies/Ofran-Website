"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Incroprated6 = () => {
    const router = useRouter();
    const [selectedType, setSelectedType] = useState('Private Limited');

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
          input::placeholder {
            color: #AEAEAE;
          }
          input:focus {
            outline: none;
            border-color: #3395FF !important;
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
                borderLeft: '1px solid #AEAEAE',
                overflow: 'hidden'
            }}>
                {/* Top Nav */}
                <div style={{ position: 'absolute', left: '70px', top: '55px', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => router.push('/incorporated5')}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M20 11H2M2 11L11 2M2 11L11 20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ marginLeft: '10px', fontWeight: 600, fontSize: '20px', color: '#000000', fontFamily: "'Anek Latin', sans-serif" }}>Back</span>
                </div>

                <img src="/ofran-black-logo.svg" alt="Logo" style={{ position: 'absolute', width: '20px', height: '20px', left: '653px', top: '57px' }} />
                <span style={{ position: 'absolute', width: '124px', height: '17px', left: '683px', top: '58px', fontWeight: 400, fontSize: '15px', color: '#686868', fontFamily: "'Anek Latin', sans-serif" }}>Ofran Incorporation</span>

                {/* Header Section */}
                <h1 style={{ position: 'absolute', left: '70px', top: '147px', fontWeight: 500, fontSize: '30px', color: '#000000', margin: 0, fontFamily: "'Anek Latin', sans-serif" }}>
                    Company Type
                </h1>
                <p style={{ position: 'absolute', width: '490px', left: '70px', top: '196px', fontWeight: 400, fontSize: '18px', color: '#686868', margin: 0, fontFamily: "'Anek Latin', sans-serif" }}>
                    Choose a company type that best fits your business needs.
                </p>

                {/* Divider Line with reduced darkness */}
                <div style={{ position: 'absolute', width: '739px', height: '0px', left: '70px', top: '248px', border: '1px solid rgba(174, 174, 174, 0.5)' }} />

                {/* Company Type Options */}
                <div style={{ position: 'absolute', left: '70px', top: '278px', display: 'flex', gap: '20px' }}>
                    {/* Private Limited */}
                    <div
                        onClick={() => setSelectedType('Private Limited')}
                        style={{
                            width: '160px',
                            height: '40px',
                            background: selectedType === 'Private Limited' ? 'rgba(51, 149, 255, 0.15)' : 'transparent',
                            border: selectedType === 'Private Limited' ? '2px solid #3395FF' : '1px solid #AEAEAE',
                            borderRadius: '42px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: selectedType === 'Private Limited' ? '#3395FF' : '#686868',
                            fontSize: '18px',
                            fontWeight: selectedType === 'Private Limited' ? 500 : 400,
                            fontFamily: "'Anek Latin', sans-serif"
                        }}
                    >
                        Private Limited
                    </div>

                    {/* LLP */}
                    <div
                        onClick={() => setSelectedType('LLP')}
                        style={{
                            width: '70px',
                            height: '40px',
                            background: selectedType === 'LLP' ? 'rgba(51, 149, 255, 0.15)' : 'transparent',
                            border: selectedType === 'LLP' ? '2px solid #3395FF' : '1px solid #AEAEAE',
                            borderRadius: '42px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: selectedType === 'LLP' ? '#3395FF' : '#686868',
                            fontSize: '18px',
                            fontWeight: selectedType === 'LLP' ? 500 : 400,
                            fontFamily: "'Anek Latin', sans-serif"
                        }}
                    >
                        LLP
                    </div>

                    {/* OPC */}
                    <div
                        onClick={() => setSelectedType('OPC')}
                        style={{
                            width: '70px',
                            height: '40px',
                            background: selectedType === 'OPC' ? 'rgba(51, 149, 255, 0.15)' : 'transparent',
                            border: selectedType === 'OPC' ? '2px solid #3395FF' : '1px solid #AEAEAE',
                            borderRadius: '42px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: selectedType === 'OPC' ? '#3395FF' : '#686868',
                            fontSize: '18px',
                            fontWeight: selectedType === 'OPC' ? 500 : 400,
                            fontFamily: "'Anek Latin', sans-serif"
                        }}
                    >
                        OPC
                    </div>
                </div>

                {/* Recommender Link */}
                <div style={{ position: 'absolute', width: '650px', left: '70px', bottom: '100px', fontSize: '15px', color: '#000000', fontWeight: 500, textAlign: 'center', fontFamily: "'Anek Latin', sans-serif" }}>
                    Unable to decide? <span style={{ color: '#3395FF', cursor: 'pointer', textDecoration: 'underline' }}>Try our Company Recommender</span>
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
                    onClick={() => {
                        if (selectedType === 'Private Limited') {
                            router.push('/incorporated7-Pvt');
                        } else if (selectedType === 'LLP') {
                            router.push('/incorporated12-LLP');
                        } else if (selectedType === 'OPC') {
                            router.push('/incorporated10-OPC');
                        } else {
                            router.push('/next-page');
                        }
                    }}
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

export default Incroprated6;
