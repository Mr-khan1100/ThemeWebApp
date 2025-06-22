import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Button.css';

export default function Button({ type, onClick, children }) {
  const { colors } = useTheme();
  const [state, setState] = useState('default'); // 'default'|'hover'|'clicked'
  const scheme = colors[type][state];

  return (
    <button
      className="themed-button"
      style={{
        backgroundColor: scheme.bg,
        color: scheme.text,
      }}
      onMouseDown={() => setState('clicked')}
      onMouseUp={()   => setState('hover')}
      onMouseEnter={()=> setState('hover')}
      onMouseLeave={()=> setState('default')}
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
}
