export const size = {
  mobile: "320",
  mobileMax: "600",
  tablet: "768",
  laptop: "1024",
  desktop: "1440",
  desktopMax: "1600",
}

export const devices = {
  mobile: `(min-width: ${size.mobile}px)`,
  mobileMax: `(max-width: ${size.mobileMax}px)`,
  tabletMax: `(max-width: ${size.laptop}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
}

export const padding = {
  mobile: "28px",
  tablet: "45px",
  laptop: "80px",
  desktop: "155px",
}
