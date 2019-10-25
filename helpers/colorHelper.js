export const SOCIAL = {
    google: '#DB3236',
    dribble: '#EA4C89',
    twitter: '#5BC0DE',
    facebook: '#3B5998'
};

export const THEME = {
    info: '#1232FF',
    theme: '#FF3D00',
    danger: '#FE2472',
    primary: '#B23AFC',
    warning: '#FF9C09',
    success: '#45DF31',
};

export const COMPONENTS = {
    icon: '#000000',
    input: '#808080',
    block: '#808080',
    label: '#FE2472',
    navbar: '#F9F9F9',
    header: '#525F7F',
    border: '#CAD1D7',
    placeholder: '#9FA5AA'
};

const COLORS = {
    red: '#db3236',
    gray: '#898989',
    blue: '#2979FF',
    white: '#FFFFFF',
    black: '#000000',
    muted: '#9FA5AA',
    yellow: '#FEBE29',
    purple: '#D500F9',
    lightGray: '#8898AA',
    lightWhite: '#F4F5F7',
    transparent: 'transparent',
    ...THEME,
    ...SOCIAL,
    ...COMPONENTS
};

export default COLORS