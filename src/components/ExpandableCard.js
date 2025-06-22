import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useTheme } from '../context/ThemeContext';
import './ExpandableCard.css';

export default function ExpandableCard({ title, summary }) {
    const { colors, mode } = useTheme();
    const [open, setOpen] = useState(false);

    const { height } = useSpring({
        to: {
            height: open ? 600 : 200,
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0px)' : 'translateY(-10px)',
        },
        config: {
            mass: 2.5,
            tension: 300,  
            friction: 30,  
            clamp: false
        }
    });

    const items = [
        { name: 'Someone', text: 'Lorem ipsum' },
        { name: 'Someone else', text: 'Lorem ipsum', hasSquare: true },
        { name: 'Who else', text: 'Lorem Indeed!', mention: '@Someone else', hasDiamond: true },
        { name: 'No one', text: 'Cool!', hasSquare: true, hasDiamond: true },
    ];

    return (
        <animated.div
            className="card"
            style={{
                background: colors.background,
                borderColor: colors.themeButton.default.bg,
                height: height,
                padding: '1rem',
                 overflow: 'visible',
            }}
        >

            <div style={{ background: colors.background, padding: '0px 20px ' , overflow: 'auto' , height: '100%',  scrollbarWidth: 'none'}}>
                <div className="section-header" style={{
                    borderBottomWidth: open ? '0.5px' : 0,          
                    borderBottomStyle: 'solid',              
                    borderBottomColor: colors.themeButton.default.bg,
                }}>
                    <div className="swatch" style={{ background: colors.themeButton.default.bg }} />
                    <div className="text-block">
                        <h3 style={{ color: mode === 'Dark' ? 'White' : 'black' }}>{title}</h3>
                        <p className="summary" style={{ color: mode === 'Dark' ? 'White' : 'black' }}>{summary}</p>
                        <div className="icon-row">
                            <div className="shape-wrapper">
                                <div
                                    className="diamond"
                                    style={{ background: colors.themeButton.default.bg }}
                                />
                            </div>
                            <div className="shape-wrapper">
                                <div
                                    className="square"
                                    style={{ background: colors.themeButton.default.bg }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {open &&
                    items.map((it, i) => (
                        <div  key={`item-${i}`}>
                            <div className="item-row" style={{ borderBottom: `0.5px solid ${colors.themeButton.default.bg}` }}>
                                <div
                                    className="swatch"
                                    style={{
                                        background: colors.themeButton.default.bg,
                                        width: '40px',
                                        height: '40px'
                                    }}
                                />
                                <div className="item-text">
                                    <strong className='name-text' style={{ color: mode === 'Dark' ? 'White' : 'black' }}>{it.name}</strong>
                                    <p style={{ color: mode === 'Dark' ? 'white' : 'black', marginTop: '0.5rem' }}>
                                        {it.mention ? (
                                            <>
                                                <a
                                                    href={'#'}
                                                    style={{
                                                        color: 'blue',
                                                        fontWeight: '700',
                                                        textDecoration: 'underline',
                                                    }}
                                                >
                                                    {it.mention}
                                                </a>{' '}
                                                <span>{it.text}</span>
                                            </>
                                        ) : (
                                            it.text
                                        )}
                                    </p>
                                    {(it.hasSquare || it.hasDiamond) && (
                                        <div className="shapes-row">
                                            {it.hasSquare && (
                                                <div className="shape-wrapper">
                                                    <div
                                                        className="square"
                                                        style={{ background: colors.themeButton.default.bg }}
                                                    />
                                                </div>
                                            )}
                                            {it.hasDiamond && (
                                                <div className="shape-wrapper">
                                                    <div
                                                        className="diamond"
                                                        style={{ background: colors.themeButton.default.bg }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* {i < items.length - 1 && (
                                // <hr  />
                            )} */}
                        </div>
                    ))}
            </div>

            <button
                className="toggle-btn"
                style={{ 

          alignItems: 'center',

          color: mode === 'Dark' ? 'White' : 'black'
        }}
                onClick={() => setOpen(!open)}
            >
                {open ? 'Close' : 'Open'}
            </button>
        </animated.div>
    );
}
