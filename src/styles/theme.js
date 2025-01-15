// src/styles/theme.js
export const COLORS = {
  primary: '#FF640D',
  text: '#2F2E41',
  background: '#FFFFFF',
  backgroundLight: '#ECECEC',
};

export const FONTS = {
  heading2: { fontSize: 24, fontWeight: '700', color: COLORS.text },
  body1: { fontSize: 18, fontWeight: '500', color: COLORS.text },
  body2: { fontSize: 16, fontWeight: '400', color: COLORS.text }, // Ensure this exists
  body3: { fontSize: 14, color: COLORS.text },
};

export default { COLORS, FONTS };
