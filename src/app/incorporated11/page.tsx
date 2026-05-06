"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const FinalCrop = () => {
    const router = useRouter();

    const govFees = [
        { label: 'Name Approval Fee', amount: '₹1,000' },
        { label: 'DSC Fee For 2 Directors', amount: '₹5,000' },
        { label: 'Stamp Duty for (STATE)', amount: '₹720' },
        { label: 'PAN & TAN Charges', amount: '₹200' },
    ];

    const InfoIcon = () => (
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px', cursor: 'pointer' }}>
            <circle cx="7" cy="7" r="6.5" stroke="#AEAEAE" strokeWidth="1" />
            <path d="M7 10V7M7 4H7.01" stroke="#AEAEAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row'
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

            {/* ===== VERTICAL INDICATOR BAR ===== */}
            <div style={{
                width: '50px',
                flexShrink: 0,
                position: 'relative',
                borderRight: '1px solid rgba(174, 174, 174, 0.5)'
            }}>
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
                                    background: 'rgba(174, 174, 174, 0.5)',
                                    top: `${(i + 1) * 120}px`,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    zIndex: 1
                                }} />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Logout Icon */}
                <div style={{
                    position: 'absolute',
                    width: '25px',
                    height: '24px',
                    left: '12px',
                    bottom: '30px',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s',
                    zIndex: 100
                }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = '0.7')}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
                    onClick={() => router.push('/')}
                >
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M10 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V4C3 3.46957 3.21071 2.96086 3.58579 2.58579C3.96086 2.21071 4.46957 2 5 2H10" stroke="#686868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 16L21 12L17 8" stroke="#686868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 12H9" stroke="#686868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            {/* ===== LEFT COLUMN ===== */}
            <div style={{
                flex: '1 1 0',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                padding: '0 30px 30px 70px',
                overflowY: 'auto'
            }}>
                {/* Top Nav */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '45px', marginBottom: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => router.back()}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M20 11H2M2 11L11 2M2 11L11 20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span style={{ marginLeft: '10px', fontWeight: 600, fontSize: '20px', color: '#000000', fontFamily: "'Anek Latin', sans-serif" }}>Back</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img src="/ofran-black-logo.svg" alt="Logo" style={{ width: '20px', height: '20px' }} />
                        <span style={{ fontWeight: 400, fontSize: '15px', color: '#686868', fontFamily: "'Anek Latin', sans-serif" }}>Ofran Incorporation</span>
                    </div>
                </div>

                {/* Heading */}
                <h1 style={{ fontWeight: 500, fontSize: '30px', lineHeight: '38px', color: '#000000', margin: '0 0 8px 0', fontFamily: "'Anek Latin', sans-serif" }}>
                    Pricing Details
                </h1>

                {/* Subtext */}
                <p style={{ fontWeight: 400, fontSize: '18px', color: '#686868', margin: '0 0 18px 0', lineHeight: '22px', fontFamily: "'Anek Latin', sans-serif" }}>
                    Pay now and complete the next steps whenever you're ready.<br />
                    For more details, view our{' '}
                    <span style={{ color: '#3395FF', cursor: 'pointer', textDecoration: 'underline' }}>Payment &amp; Refund Policy.</span>
                </p>

                {/* Divider */}
                <div style={{ width: '100%', height: '0', border: '1px solid rgba(174,174,174,0.5)', marginBottom: '20px' }} />

                {/* Pricing Card */}
                <div style={{
                    width: '100%',
                    maxWidth: '450px',
                    border: '1px solid #AEAEAE',
                    borderRadius: '10px',
                    padding: '20px 22px',
                    background: '#FFFFFF',
                    marginBottom: 'auto'
                }}>
                    <div style={{ fontSize: '25px', fontWeight: 500, lineHeight: '28px', color: '#000000', marginBottom: '4px', fontFamily: "'Anek Latin', sans-serif" }}>
                        One Person Company Registration
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 400, color: '#686868', marginBottom: '14px', fontFamily: "'Anek Latin', sans-serif" }}>
                        Pay and proceed to document submission
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                        <span style={{ fontSize: '28px', fontWeight: 600, color: '#000000', fontFamily: "'Anek Latin', sans-serif" }}>₹8,519</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '13px', fontWeight: 400, color: '#3395FF', cursor: 'pointer', fontFamily: "'Anek Latin', sans-serif" }}>
                            Detail
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M5 3L9 7L5 11" stroke="#3395FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </div>

                    <div
                        style={{
                            width: '100%',
                            height: '42px',
                            background: '#3395FF',
                            borderRadius: '7px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            marginBottom: '14px',
                            transition: 'opacity 0.2s'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
                        onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
                    >
                        <span style={{ fontSize: '16px', fontWeight: 500, color: '#FFFFFF', fontFamily: "'Anek Latin', sans-serif" }}>Proceed to pay ₹8,519</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {[
                            'Inclusive of new DSCs charge (tokens, support & shipping)',
                            'Inclusive of company Name Registration fee for up to 4 names'
                        ].map((text, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                                    <path d="M2.5 7L5.5 10L11.5 4" stroke="#0AC655" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span style={{ fontSize: '12px', fontWeight: 400, color: '#686868', lineHeight: '18px', fontFamily: "'Anek Latin', sans-serif" }}>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Continue Button */}
                <div
                    style={{
                        width: '100%',
                        maxWidth: '840px',
                        height: '55px',
                        marginTop: '30px',
                        flexShrink: 0,
                        background: '#3395FF',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'opacity 0.2s'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
                    onClick={() => router.push('/')}
                >
                    <span style={{ fontWeight: 500, fontSize: '25px', lineHeight: '30px', color: '#FFFFFF', fontFamily: "'Anek Latin', sans-serif" }}>Continue</span>
                </div>
            </div>

            {/* ===== RIGHT PANEL ===== */}
            <div style={{
                width: '520px',
                flexShrink: 0,
                background: '#F5F5F5',
                margin: '20px 20px 20px 0',
                borderRadius: '14px',
                padding: '30px 28px',
                overflowY: 'auto'
            }}>
                <div style={{ fontSize: '30px', fontWeight: 500, lineHeight: '38px', color: '#000000', marginBottom: '24px', fontFamily: "'Anek Latin', sans-serif" }}>
                    One Person Company
                </div>

                {/* Government Fee */}
                <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '22px', fontWeight: 600, color: '#000000', marginBottom: '2px', fontFamily: "'Anek Latin', sans-serif" }}>Government Fee</div>
                    <div style={{ fontSize: '15px', fontWeight: 400, color: '#686868', marginBottom: '12px', fontFamily: "'Anek Latin', sans-serif" }}>Mandatory fee paid for government services</div>
                    <div style={{ background: '#EBEBEB', borderRadius: '7px', overflow: 'hidden' }}>
                        {govFees.map((fee, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '10px 14px',
                                borderBottom: i < govFees.length - 1 ? '1px solid rgba(174,174,174,0.3)' : 'none'
                            }}>
                                <span style={{ fontSize: '13px', fontWeight: 400, color: '#444444', fontFamily: "'Anek Latin', sans-serif" }}>
                                    {fee.label} <InfoIcon />
                                </span>
                                <span style={{ fontSize: '13px', fontWeight: 500, color: '#000000', fontFamily: "'Anek Latin', sans-serif" }}>{fee.amount}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Professional Fee */}
                <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '22px', fontWeight: 600, color: '#000000', marginBottom: '2px', fontFamily: "'Anek Latin', sans-serif" }}>Professional Fee</div>
                    <div style={{ fontSize: '15px', fontWeight: 400, color: '#686868', marginBottom: '12px', fontFamily: "'Anek Latin', sans-serif" }}>Fee for expert services &amp; specialised assistance</div>
                    <div style={{ background: '#EBEBEB', borderRadius: '7px', overflow: 'hidden' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px' }}>
                            <span style={{ fontSize: '13px', fontWeight: 400, color: '#444444', fontFamily: "'Anek Latin', sans-serif" }}>
                                Professional Fee <InfoIcon />
                            </span>
                            <span style={{ fontSize: '13px', fontWeight: 500, color: '#000000', fontFamily: "'Anek Latin', sans-serif" }}>₹1,599</span>
                        </div>
                    </div>
                </div>

                {/* Total Payable Amount */}
                <div style={{ background: '#EBEBEB', borderRadius: '7px', padding: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <span style={{ fontSize: '18px', fontWeight: 600, color: '#000000', fontFamily: "'Anek Latin', sans-serif" }}>Total Payable Amount</span>
                        <span style={{ fontSize: '18px', fontWeight: 600, color: '#000000', fontFamily: "'Anek Latin', sans-serif" }}>₹8,519</span>
                    </div>
                    <div style={{ fontSize: '11px', fontWeight: 400, color: '#686868', fontFamily: "'Anek Latin', sans-serif" }}>
                        Inclusive of DSC token fee, shipping &amp; support charges
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalCrop;
