export type LauchPreviewProps = {
  id: string,
  imageSource: string,
  launchDateTime: string,
  launchSite: string,
  missionName: string,
  isSelected: boolean,
  handleSelect: () => void,
}