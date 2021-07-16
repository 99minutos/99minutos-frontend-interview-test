const getIsMobile = (): boolean => {
  const mobileResolutionInPX: number = 768;
  const viewportWidth: number = window.innerWidth;
  const isMobileDevice: boolean = viewportWidth <= mobileResolutionInPX;
  return isMobileDevice;
}

export default getIsMobile;