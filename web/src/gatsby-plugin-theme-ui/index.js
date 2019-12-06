// import {redirectTo} from '@reach/router'

// import {relative} from 'path'

import SectionBorderTop from '../images/torn-bg-white-t.png'
import SectionBorderBottom from '../images/torn-bg-white-b.png'

const sharedButtonStyles = {
  'py': 3,
  'px': 3,
  'cursor': 'pointer',
  'lineHeight': 'inherit',
  'fontSize': '100%',
  textDecoration: 'none'
}

const sharedHeadingStyles = {
  'fontFamily': 'heading',
  'fontWeight': 'heading',
  'lineHeight': 'heading',
  'm': 0,
  'mb': 1
}

export default {
  'borderWidths': {
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px',
    'px': '1px'
  },
  // 'breakpoints': [
  //   '600px',
  //   '900px',
  //   '1200px',
  //   '1800px'
  // ],
  'breakpoints': [
    '640px',
    '769px',
    '1024px',
    '1280px',
    '1440px'
  ],
  // 'colors': {
  //   'text': '#6c6b73',
  //   'background': '#fbf8ef',
  //   'primary': '#5b9a42',
  //   'secondary': '#8bcb6f',
  //   'accent': '#f7db54',
  //   'accentDark': '#c1aa1d',
  //   'accentLight': '#ffff86',
  //   'muted': '#efe9d7',
  //   'primaryLight': '#8bcb6f',
  //   'primaryDark': '#2b6b15',
  //   'primaryHover': '#2b6b15',
  //   'textMuted': '#9da2a0', // #8b8a90
  //   // 'success': '#9ae6b4', // green
  //   // 'info': '#63b3ed', // blue
  //   // 'warning': '#faf089', //  yellow
  //   // 'danger': '#feb2b2', // red
  //   'white': '#fff',
  //   'light': '#f7fafc',
  //   'grayDark': '#2d3748',
  //   'dark': '#2d3748',
  //   'black': '#282828',
  //   'transparent': 'transparent',
  //   'gray': [
  //     null,
  //     '#f7fafc',
  //     '#edf2f7',
  //     '#e2e8f0',
  //     '#cbd5e0',
  //     '#a0aec0',
  //     '#718096',
  //     '#4a5568',
  //     '#2d3748',
  //     '#1a202c'
  //   ]
  // },
  'colors': {
    'text': '#6c6b73',
    'background': '#fbf8ef',
    'primary': '#008080',
    'secondary': '#4cb0af',
    'accent': '#f7db54',
    'accentDark': '#c1aa1d',
    'accentLight': '#ffff86',
    'muted': '#efe9d7',
    'primaryLight': '#4cb0af',
    'primaryDark': '#005354',
    'primaryHover': '#005354',
    'textMuted': '#9da2a0', // #8b8a90
    // 'success': '#9ae6b4', // green
    // 'info': '#63b3ed', // blue
    // 'warning': '#faf089', //  yellow
    // 'danger': '#feb2b2', // red
    'white': '#fff',
    'light': '#f7fafc',
    'grayDark': '#2d3748',
    'dark': '#2d3748',
    'black': '#282828',
    'transparent': 'transparent',
    'gray': [
      null,
      '#f7fafc',
      '#edf2f7',
      '#e2e8f0',
      '#cbd5e0',
      '#a0aec0',
      '#718096',
      '#4a5568',
      '#2d3748',
      '#1a202c'
    ]
  },
  'fonts': {
    // 'sans': '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    // 'serif': 'Georgia, Cambria, "Times New Roman", Times, serif',
    // 'mono': 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    'heading': '"Dosis", sans-serif',
    'body': '"Lato", sans-serif'
    // 'monospace': 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  'fontSizes': [
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2.25rem',
    '3rem',
    '4rem',
    '4.5rem'
  ],
  'fontWeights': {
    'hairline': '100',
    'thin': '200',
    'light': '300',
    'normal': '400',
    'medium': '500',
    'semibold': '600',
    'bold': '700',
    'extrabold': '800',
    'black': '900',
    'body': '400',
    'heading': '700'
  },
  'letterSpacings': {
    'tighter': '-0.05em',
    'tight': '-0.025em',
    'normal': '0',
    'wide': '0.025em',
    'wider': '0.05em',
    'widest': '0.1em'
  },
  'lineHeights': {
    'none': '1',
    'tight': '1.25',
    'snug': '1.375',
    'normal': '1.5',
    'relaxed': '1.625',
    'loose': '2',
    'body': '1.625',
    'heading': '1.25'
  },
  'sizes': {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
    'px': '1px',
    'xs': '20rem',
    'sm': '24rem',
    'md': '28rem',
    'lg': '32rem',
    'xl': '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    'full': '100%',
    'screenHeight': '100vh',
    'screenWidth': '100vw'
  },
  'shadows': {
    'default': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    'outline': '0 0 0 3px rgba(66, 153, 225, 0.5)',
    'none': 'none'
  },
  'space': [
    0,
    '0.25rem',
    '0.5rem',
    '1rem',
    '2rem',
    '4rem',
    '8rem',
    '16rem',
    '32rem',
    '1px'
  ],
  'radii': {
    'none': '0',
    'sm': '0.125rem',
    'default': '0.25rem',
    'lg': '0.5rem',
    'full': '9999px'
  },
  'zIndices': {
    '0': '0',
    '10': '10',
    '20': '20',
    '30': '30',
    '40': '40',
    '50': '50',
    'auto': 'auto'
  },
  'styles': {
    'root': {
      margin: 0,
      'fontFamily': 'body',
      'lineHeight': 'body',
      'fontWeight': 'body'
    },
    Header: {
      display: 'block',
      zIndex: '5',
      position: 'relative'
    },
    Layout: {
      color: 'text',
      fontFamily: 'body',
      fontSize: '2'
    },
    'a': {
      'color': 'secondary',
      'textDecoration': 'none',
      'fontWeight': 'bold',
      ':hover': {
        'textDecoration': 'underline',
        'color': 'primary'
      }
    },
    'p': {
      fontSize: 2,
      lineHeight: 'body'
    },
    'h1': {
      ...sharedHeadingStyles,
      'fontSize': 6,
      'mt': 2,
      'color': 'primary'
    },
    'h2': {
      ...sharedHeadingStyles,
      'fontSize': 5,
      'mt': 2,
      'color': 'primary'
    },
    'h3': {
      ...sharedHeadingStyles,
      'fontSize': 4,
      fontWeight: 'normal',
      'mt': 3,
      'color': 'primary'
    },
    'h4': {
      ...sharedHeadingStyles,
      'fontSize': 3,
      'color': 'primary'
    },
    'h5': {
      ...sharedHeadingStyles,
      'fontSize': 2,
      'color': 'primary'
    },
    'h6': {
      ...sharedHeadingStyles,
      'fontSize': 1
    },
    'code': {},
    'pre': {},
    'hr': {
      'bg': 'muted',
      'border': 0,
      'height': '1px',
      'm': 3
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading'
    },
    // display: {
    //   fontFamily: 'heading',
    //   fontWeight: 'heading',
    //   lineHeight: 'heading',
    //   letterSpacing: 'heading',
    //   fontSize: [ 5, 6, 7 ]
    // },
    caps: {
      textTransform: 'uppercase'
    }
  },
  'buttons': {
    'simple': {
      ...sharedButtonStyles,
      'backgroundColor': 'primary',
      'border': 'none',
      'color': 'white',
      'fontWeight': 'bold',
      'borderRadius': 'default',
      '&:hover': {
        'backgroundColor': 'primaryHover'
      }
    },
    'simpleAccent': {
      ...sharedButtonStyles,
      'backgroundColor': 'accent',
      'border': 'none',
      'color': 'primary',
      'fontWeight': 'bold',
      'borderRadius': 'default',
      '&:hover': {
        'backgroundColor': 'primary',
        color: 'white'
      }
    },
    'pill': {
      ...sharedButtonStyles,
      px: 3,
      'backgroundColor': 'primary',
      'border': 'none',
      'color': 'white',
      'fontWeight': 'bold',
      'borderRadius': 'full',
      '&:hover': {
        'backgroundColor': 'primaryHover'
      }
    },
    'outline': {
      ...sharedButtonStyles,
      'backgroundColor': 'transparent',
      'borderWidth': '1px',
      'borderStyle': 'solid',
      'borderColor': 'primary',
      'color': 'primary',
      'fontWeight': 'semibold',
      'borderRadius': 'default',
      '&:hover': {
        'backgroundColor': 'primary',
        'color': 'white',
        'borderColor': 'transparent'
      }
    },
    'bordered': {
      ...sharedButtonStyles,
      'backgroundColor': 'primary',
      'borderWidth': '1px',
      'borderStyle': 'solid',
      'borderColor': 'primaryHover',
      'color': 'white',
      'fontWeight': 'bold',
      'borderRadius': 'default',
      '&:hover': {
        'backgroundColor': 'primaryHover'
      }
    },
    'disabled': {
      ...sharedButtonStyles,
      'cursor': 'not-allowed',
      'backgroundColor': 'primary',
      'border': 'none',
      'opacity': 0.5,
      'color': 'white',
      'fontWeight': 'bold',
      'borderRadius': 'default'
    },
    '3D': {
      ...sharedButtonStyles,
      'backgroundColor': 'primary',
      'border': 'none',
      'borderBottomWidth': '4px',
      'borderBottomStyle': 'solid',
      'borderBottomColor': 'primaryHover',
      'color': 'white',
      'fontWeight': 'bold',
      'borderRadius': 'default',
      'transition': 'transform 0.3s ease-in-out',
      '&:hover': {
        'transform': 'translateY(-1px)'
      }
    },
    '3DAccent': {
      ...sharedButtonStyles,
      'backgroundColor': 'accent',
      'border': 'none',
      'borderBottomWidth': '4px',
      'borderBottomStyle': 'solid',
      'borderBottomColor': 'accentDark',
      'color': 'primaryDark',
      'fontWeight': 'bold',
      'borderRadius': 'default',
      'transition': 'transform 0.3s ease-in-out',
      '&:hover': {
        'transform': 'translateY(-1px)'
      }
    },
    'elevated': {
      ...sharedButtonStyles,
      'fontSize': '100%',
      'lineHeight': 'inherit',
      'backgroundColor': 'white',
      'borderWidth': '1px',
      'borderStyle': 'solid',
      'borderColor': 'gray.4',
      'color': 'text',
      'fontWeight': 'bold',
      'borderRadius': 'default',
      'boxShadow': 'default',
      '&:hover': {
        'backgroundColor': 'gray.1'
      }
    },
    'navToggle': {
      'display': [ 'inline', 'inline', 'none' ],
      'color': 'white',
      'bg': 'transparent',
      'outline': 'none',
      'padding': 'calc(14 / 17 / 2 * 1rem)',
      'appearance': 'none',
      'border': 'none',
      'm': 0,
      'fontSize': '3.2rem',
      '& svg': {
        'bg': 'primary',
        'display': 'block',
        'fill': 'inherit',
        'p': '2',
        'border': 'none',
        'borderBottomWidth': '4px',
        'borderBottomStyle': 'solid',
        'borderBottomColor': 'primaryHover'
      }
    },
    'mobileMenuExpand': {
      'pt': 2,
      'pb': 1,
      'width': '3rem',
      'cursor': 'pointer',
      'lineHeight': 'inherit',
      'fontSize': '100%',
      textDecoration: 'none',
      'backgroundColor': 'primary',
      'borderWidth': '0',
      'borderLeftWidth': '1px',
      'borderStyle': 'solid',
      'borderColor': 'primaryLight',
      'color': 'white',
      'fontWeight': 'bold',
      '&:hover': {
        'backgroundColor': 'primaryHover'
      }
    }
  },
  'inputs': {
    'shadow': {
      'py': 2,
      'px': 3,
      'fontSize': '100%',
      'borderRadius': 'default',
      'appearance': 'none',
      'lineHeight': 'tight',
      'border': 'none',
      'color': 'gray.7',
      'boxShadow': 'default',
      '&:focus': {
        'outline': 'none',
        'boxShadow': 'outline'
      }
    },
    'inline': {
      'py': 2,
      'px': 3,
      'fontSize': '100%',
      'borderRadius': 'default',
      'appearance': 'none',
      'lineHeight': 'tight',
      'backgroundColor': 'gray.2',
      'borderWidth': '2px',
      'borderStyle': 'solid',
      'borderColor': 'gray.2',
      'color': 'gray.7',
      '&:focus': {
        'outline': 'none',
        'borderColor': 'primary',
        'backgroundColor': 'white'
      }
    },
    'underline': {
      'py': 2,
      'px': 3,
      'fontSize': '100%',
      'borderRadius': '0px',
      'appearance': 'none',
      'lineHeight': 'tight',
      'backgroundColor': 'transparent',
      'border': 'none',
      'borderBottomWidth': '2px',
      'borderBottomStyle': 'solid',
      'borderBottomColor': 'primary',
      'color': 'gray.7',
      '&:focus': {
        'outline': 'none',
        'borderColor': 'primary',
        'backgroundColor': 'white'
      }
    }
  },
  links: {
    logoText: {
      'textDecoration': 'none',
      'fontWeight': 'bold',
      'color': 'primary',
      'cursor': 'pointer',
      'display': ['inline-block', 'inline-block', 'none']
    },
    topBar: {
      'display': 'inline-block',
      p: 2,
      'fontWeight': 'bold',
      'textTransform': 'uppercase',
      'color': 'primary',
      'textDecoration': 'none',
      fontSize: '13px',
      '&:hover': {
        color: 'accent',
        bg: 'primary'
      }
    },
    navMain: {
      color: 'black',
      letterSpacing: '0.05rem',
      fontSize: '17px',
      p: '10px',
      position: 'relative',
      overflow: 'hidden',
      display: 'inline-block',
      transition: '.3s ease-out .1s',
      textTransform: 'uppercase',
      textDecoration: 'none',
      fontWeight: 'bold',
      '& span': {
        '&::before': {
          width: '100%',
          height: '2px',
          background: '#4cb0af',
          content: '""',
          position: 'absolute',
          left: '0',
          top: '0',
          transition: '.3s',
          transform: 'translateX(-100%)'
        },
        '&::after': {
          width: '30px',
          height: '4px',
          borderRadius: '999px',
          background: '#4cb0af',
          content: '""',
          position: 'absolute',
          left: '50%',
          bottom: '0',
          transition: '.3s',
          transform: 'translateX(-50%)'
        }
      },
      '&::before': {
        width: '2px',
        height: '100%',
        background: '#4cb0af',
        content: '""',
        position: 'absolute',
        left: '0',
        top: '0',
        transition: '.3s',
        transform: 'translateY(-100%)'
      },
      '&::after': {
        width: '2px',
        height: '100%',
        background: '#4cb0af',
        content: '""',
        position: 'absolute',
        right: '0',
        bottom: '0',
        transition: '.3s',
        transform: 'translateY(100%)'
      },
      '&:hover': {
        '&::before, &::after': {
          transform: 'translateX(0)'
        },
        '& span': {
          '&::before': {
            transform: 'translateY(0)'
          },
          '&::after': {
            transform: 'translateY(0)',
            width: '100%',
            left: '0'
          }
        }
      }
    },
    'navSub': {
      color: 'light',
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: '1',
      letterSpacing: '0.01rem',
      '&:hover': {
        color: 'accent',
        textDecoration: 'underline'
      }
    },
    'navSub2': {
      color: 'gray.3',
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: '1',
      fontWeight: 'bold',
      '&:hover': {
        color: 'accent'
      }
    },
    'sidebarNav': {
      color: 'dark',
      textDecoration: 'none',
      // textTransform: 'uppercase',
      fontSize: '1',
      fontWeight: 'normal',
      display: 'block',
      py: 2,
      px: 2,
      '&.active': {
        color: 'primary',
        fontWeight: 'extrabold'
      },
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    'programListLink': {
      textDecoration: 'none',
      bg: 'white',
      pt: 3,
      pb: 2,
      px: 3,
      m: 2,
      color: 'primary',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      '& p': {
        color: 'text'
      }
    },
    footerLinks: {
      color: 'accent'
    }
  },
  lists: {
    reset: {
      listStyle: 'none',
      p: 0,
      m: 0
    }
  },
  sections: {
    hpSection: {
      py: [3, 4, 5, 6],
      bg: 'background'
    },
    hpSectionLight: {
      py: [3, 4, 4, 5],
      bg: 'white',
      position: 'relative',
      zIndex: '10',
      '&::before': {
        background: `url(${SectionBorderTop}) repeat-x top center`,
        content: '""',
        position: 'absolute',
        top: '-42px',
        left: 0,
        right: 0,
        height: '43px'
      },
      '&::after': {
        background: `url(${SectionBorderBottom}) repeat-x bottom center`,
        content: '""',
        position: 'absolute',
        bottom: '-40px',
        left: 0,
        right: 0,
        height: '43px'
      }
    },
    hpSectionLightNoBottom: {
      py: [3, 4, 4, 5],
      bg: 'white',
      position: 'relative',
      zIndex: '10',
      '&::before': {
        background: `url(${SectionBorderTop}) repeat-x top center`,
        content: '""',
        position: 'absolute',
        top: '-40px',
        left: 0,
        right: 0,
        height: '43px'
      }
    }
  }
}
