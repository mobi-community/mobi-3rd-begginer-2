const designTokens = {
  colors: {
    brandPrimary: '#5D1049', 
    brandSecondary: '#9C27B0',
    accent: '#FFC107',
    warning: '#FF5722', 
    success: '#4CAF50',
    info: '#2196F3', 
    background: '#F5F5F5', 
    textPrimary: '#212121', 
    textSecondary: '#757575',
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    baseFontSize: '16px',
    headingFontSize: '24px',
    subHeadingFontSize: '20px',
    textFontSize: '14px',
    fontWeightNormal: '400',
    fontWeightBold: '700',
    lineHeight: '1.5',
  },
  spacing: {
    xSmall: '4px',
    small: '8px',
    medium: '16px',
    large: '32px',
    xLarge: '64px',
    xxLarge: '128px',
  },
  borderRadius: {
    none: '0px',
    small: '4px',
    medium: '8px',
    large: '16px',
    circle: '50%',
  },
  shadows: {
    light: '0px 2px 4px rgba(0,0,0,0.1)',
    medium: '0px 4px 8px rgba(0,0,0,0.1)',
    heavy: '0px 8px 16px rgba(0,0,0,0.1)',
  },
  animations: {
    fadeIn: {
      duration: '0.5s',
      timingFunction: 'ease-in-out',
    },
    scaleUp: {
      duration: '0.3s',
      timingFunction: 'ease-in',
    },
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
  interactionStates: {
    button: {
      hover: {
        backgroundColor: '#f2f2f2',
      },
      active: {
        backgroundColor: '#e6e6e6',
      },
      focus: {
        borderColor: '#5D1049',
      },
    },
    input: {
      focus: {
        borderColor: '#5D1049',
      },
    },
  },
};