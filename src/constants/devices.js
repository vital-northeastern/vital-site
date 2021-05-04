export const size = {
  mobile: "320",
  tablet: "768",
  laptop: "1024",
  desktop: "1440",
  desktopMax: "1920",
}

export const devices = {
  mobile: `(min-width: ${size.mobile}px)`,
  mobileMax: `(max-width: ${size.tablet - 1}px)`,
  tabletMax: `(max-width: ${size.laptop - 1}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
}

export const padding = {
  mobile: "26px",
  tablet: "5.9%",
  laptop: "6.2%",
  desktop: "8.6%",
}
