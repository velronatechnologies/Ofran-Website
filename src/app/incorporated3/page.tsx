"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Incroprated3 = () => {
    const router = useRouter();

    const steps = [
        { label: 'Signup', type: 'verified', status: 'completed' },
        { label: 'Personal Details', number: '1', status: 'pending' },
        { label: 'Business Details', number: '2', status: 'pending' },
        { label: 'Payment', type: 'verified-black', status: 'pending' },
        { label: 'Company Name Submission', number: '3', status: 'pending' },
        { label: 'Document Upload', number: '4', status: 'pending' },
    ];

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            fontFamily: "'Anek Latin', sans-serif",
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            background: '#FFFFFF'
        }}>
            {/* Global CSS Reset */}
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

            {/* Left Column (Logo & Welcome) */}
            <div style={{
                width: '30%',
                height: '100%',
                padding: '40px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRight: '1px solid #AEAEAE'
            }}>
                <div>
                    <img
                        src="/ofran-black-logo.svg"
                        alt="Ofran Logo"
                        style={{ width: '25px', height: '25px', cursor: 'pointer', borderRadius: '2px' }}
                        onClick={() => router.push('/')}
                    />
                </div>

                <div style={{ marginBottom: '350px'}}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                        <p style={{
                            fontWeight: 300,
                            fontSize: '16px',
                            lineHeight: '1.2',
                            color: '#AEAEAE',
                            margin: 0
                        }}>
                            Welcome to
                        </p>
                        <img src="/ofran-inc-logo.svg" alt="Ofran Inc" style={{ height: '14px' }} />
                    </div>
                    <p style={{
                        fontWeight: 300,
                        fontSize: '16px',
                        lineHeight: '1.2',
                        color: '#AEAEAE',
                        margin: 0
                    }}>
                        Let’s make your business official
                    </p>
                </div>
            </div>

            {/* Middle Column (Steps) */}
            <div style={{
                width: '35%',
                height: '100%',
                padding: '40px 40px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h2 style={{
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.2',
                    color: '#000000',
                    margin: '0 0 8px 0'
                }}>
                    Steps Involved
                </h2>
                <p style={{
                    fontWeight: 400,
                    fontSize: '13px',
                    lineHeight: '1.2',
                    color: '#AEAEAE',
                    margin: '0 0 40px 0',
                    maxWidth: '300px'
                }}>
                    Here’s a quick walkthrough of the steps involved in your company registration
                </p>

                {/* Steps Walkthrough Container */}
                <div style={{ position: 'relative', paddingLeft: '20px' }}>
                    {/* Vertical Connecting Line Segments */}
                    {/* Segment 1: Signup to Group 1 */}
                    <div style={{
                        position: 'absolute',
                        left: '31px',
                        top: '28px',
                        height: '15px',
                        width: '1px',
                        background: '#AEAEAE',
                        zIndex: 0
                    }} />

                    {/* Segment 2: Group 1 to Payment */}
                    <div style={{
                        position: 'absolute',
                        left: '31px',
                        top: '120px',
                        height: '20px',
                        width: '1px',
                        background: '#AEAEAE',
                        zIndex: 0
                    }} />

                    {/* Segment 3: Payment to Group 2 */}
                    <div style={{
                        position: 'absolute',
                        left: '31px',
                        top: '176px',
                        height: '15px',
                        width: '1px',
                        background: '#AEAEAE',
                        zIndex: 0
                    }} />


                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', position: 'relative', zIndex: 1 }}>
                        {/* Step: Signup */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '35px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '18px', height: '18px', background: '#3395FF', maskImage: 'url(/verified-badge.svg)', maskSize: 'contain', WebkitMaskImage: 'url(/verified-badge.svg)', WebkitMaskSize: 'contain' }} />
                                <span style={{ fontWeight: 500, fontSize: '15px', color: '#3395FF' }}>Signup</span>
                            </div>
                            <div style={{ width: '12px', height: '12px' }}>
                                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                                    <circle cx="7" cy="7" r="7" fill="#0AC655" />
                                    <path d="M4 7L6 9L10 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Gap for line */}
                        <div style={{ height: '8px' }} />

                        {/* Group 1: Steps 1 & 2 */}
                        <div style={{ display: 'flex', gap: '12px' }}>
                            {/* The pill background column */}
                            <div style={{
                                width: '18px',
                                height: '80px',
                                background: 'rgba(51, 149, 255, 0.1)',
                                borderRadius: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '0'
                            }}>
                                <div style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontWeight: 500, fontSize: '13px', color: '#000000' }}>1</span>
                                </div>
                                <div style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontWeight: 500, fontSize: '13px', color: '#000000' }}>2</span>
                                </div>
                            </div>

                            {/* Labels column */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '40px' }}>
                                    <span style={{ fontWeight: 500, fontSize: '15px', color: '#000000' }}>Personal Details</span>
                                    <div style={{ width: '12px', height: '12px' }}>
                                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                                            <circle cx="7" cy="7" r="6.5" stroke="#AEAEAE" />
                                            <path d="M4 7L6 9L10 5" stroke="#AEAEAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '40px' }}>
                                    <span style={{ fontWeight: 500, fontSize: '15px', color: '#000000' }}>Business Details</span>
                                    <div style={{ width: '12px', height: '12px' }}>
                                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                                            <circle cx="7" cy="7" r="6.5" stroke="#AEAEAE" />
                                            <path d="M4 7L6 9L10 5" stroke="#AEAEAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gap for line */}
                        <div style={{ height: '8px' }} />

                        {/* Step: Payment */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '45px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '18px', height: '18px', background: '#000000', maskImage: 'url(/verified-badge.svg)', maskSize: 'contain', WebkitMaskImage: 'url(/verified-badge.svg)', WebkitMaskSize: 'contain' }} />
                                <span style={{ fontWeight: 500, fontSize: '15px', color: '#000000' }}>Payment</span>
                            </div>
                            <div style={{ width: '12px', height: '12px' }}>
                                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                                    <circle cx="7" cy="7" r="6.5" stroke="#AEAEAE" />
                                    <path d="M4 7L6 9L10 5" stroke="#AEAEAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Gap for line */}
                        <div style={{ height: '8px' }} />

                        {/* Group 2: Steps 3 & 4 */}
                        <div style={{ display: 'flex', gap: '12px' }}>
                            {/* The pill background column */}
                            <div style={{
                                width: '18px',
                                height: '80px',
                                background: 'rgba(51, 149, 255, 0.1)',
                                borderRadius: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '0'
                            }}>
                                <div style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontWeight: 500, fontSize: '13px', color: '#000000' }}>3</span>
                                </div>
                                <div style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontWeight: 500, fontSize: '13px', color: '#000000' }}>4</span>
                                </div>
                            </div>

                            {/* Labels column */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '40px' }}>
                                    <span style={{ fontWeight: 500, fontSize: '15px', color: '#000000' }}>Company Name Submission</span>
                                    <div style={{ width: '12px', height: '12px' }}>
                                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                                            <circle cx="7" cy="7" r="6.5" stroke="#AEAEAE" />
                                            <path d="M4 7L6 9L10 5" stroke="#AEAEAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '40px' }}>
                                    <span style={{ fontWeight: 500, fontSize: '15px', color: '#000000' }}>Document Upload</span>
                                    <div style={{ width: '12px', height: '12px' }}>
                                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                                            <circle cx="7" cy="7" r="6.5" stroke="#AEAEAE" />
                                            <path d="M4 7L6 9L10 5" stroke="#AEAEAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column (Pricing) */}
            <div style={{
                width: '35%',
                height: '100%',
                background: '#EEF6FF',
                padding: '40px 40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h2 style={{
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.2',
                    color: '#000000',
                    margin: '0 0 12px 0',
                    textAlign: 'center'
                }}>
                    Get Incorporated in just <span style={{ fontWeight: 600 }}>₹1599</span> <span style={{ color: '#AEAEAE', fontSize: '12px' }}>+ Govt. Fees</span>
                </h2>
                <p style={{
                    fontWeight: 400,
                    fontSize: '13px',
                    lineHeight: '1.2',
                    color: '#686868',
                    textAlign: 'center',
                    maxWidth: '260px'
                }}>
                    Choose from company types such as Private Limited, LLP & OPC.
                </p>
            </div>

            {/* Bottom Button Bar */}
            <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '32%',
                right: '30px',
                height: '70px',
                background: '#3395FF',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 25px',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
                zIndex: 10
            }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                onClick={() => router.push('/incorporated4')}
            >
                <span style={{
                    fontWeight: 500,
                    fontSize: '18px',
                    color: '#FFFFFF'
                }}>
                    Start your Application
                </span>

                <div style={{ display: 'flex', gap: '-5px' }}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '-6px' }}>
                            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ))}
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

export default Incroprated3;
