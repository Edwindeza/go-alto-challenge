const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '576px',
  tablet: '768px',
  laptop: '992px',
  desktop: '1200px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};