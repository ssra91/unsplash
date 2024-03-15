export const IconLogo = () => (
  <svg
    className="UP8CN"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    version="1.1"
    aria-labelledby="unsplash-home"
    aria-hidden="false"
    fill="currentColor"
  >
    <desc lang="en-US">Unsplash logo</desc>
    <title id="unsplash-home">Unsplash Home</title>
    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
  </svg>
);
export const IconSearch = () => (
  <svg
    className="DFW_E nT46U VETef"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    aria-hidden="false"
    fill="currentColor"
  >
    <desc lang="en-US">A magnifying glass</desc>
    <path d="M16.5 15c.9-1.2 1.5-2.8 1.5-4.5C18 6.4 14.6 3 10.5 3S3 6.4 3 10.5 6.4 18 10.5 18c1.7 0 3.2-.5 4.5-1.5l4.6 4.5 1.4-1.5-4.5-4.5zm-6 1c-3 0-5.5-2.5-5.5-5.5S7.5 5 10.5 5 16 7.5 16 10.5 13.5 16 10.5 16z" />
  </svg>
);

export const IconBell = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    aria-hidden="false"
    fill="currentColor"
  >
    <desc lang="en-US">Bell</desc>
    <path d="M14.345 21.15c-4.637 1.604-8.871.902-9.778-1.805-.303-1.002-.202-2.005.403-3.108.302-.5.302-1.303.1-1.905l-.705-2.306c-.605-1.604-.403-3.308.202-4.712.403-1.102 1.109-1.904 2.117-2.606l-.202-.602c-.302-.601.1-1.403.706-1.604l1.21-.401c.705-.3 1.41.1 1.612.802l.202.602c1.31-.1 2.52.2 3.629.902 1.21.802 2.117 1.905 2.62 3.409l.807 2.506c.202.501.706 1.203 1.31 1.404 1.11.4 1.916 1.103 2.218 2.105 1.008 2.507-1.814 5.715-6.451 7.319Zm4.536-6.717c-.403-1.103-3.226-1.705-7.056-.401-3.83 1.303-5.645 3.609-5.242 4.712.403 1.103 3.226 1.704 7.056.4 3.83-1.302 5.645-3.608 5.242-4.711Zm-7.56 4.11c-1.008 0-1.815-.501-2.42-1.203-.1-.1-.1-.3 0-.4.706-.602 1.714-1.204 3.327-1.806.605-.2 1.21-.4 1.814-.5.202 0 .303.1.303.2v.501c0 1.203-.706 2.306-1.714 2.807.1 0-.706.401-1.31.401Z" />
  </svg>
);

export const IconChevronRight = () => (
  <svg
    className="DG_Wq"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    aria-hidden="false"
    fill="currentColor"
  >
    <desc lang="en-US">Chevron right</desc>
    <path d="M8.5 5.5 10 4l8 8-8 8-1.5-1.5L15 12 8.5 5.5Z" />
  </svg>
);
export const IconChevronLeft = () => (
  <svg
    className="DG_Wq"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    aria-hidden="false"
    fill="currentColor"
  >
    <desc lang="en-US">Chevron left</desc>
    <path d="M15.5 18.5 14 20l-8-8 8-8 1.5 1.5L9 12l6.5 6.5Z" />
  </svg>
);

export const IconBars = () => (
  <svg
    className="BOTrp"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    aria-hidden="false"
    fill="currentColor"
  >
    <desc lang="en-US">navigation menu</desc>
    <path d="M3 16h18v2H3v-2ZM3 6v2h18V6H3Zm0 7h18v-2H3v2Z" />
  </svg>
);

export const IconX = () => (
  <svg
    className="FsJPV"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    aria-hidden="false"
    fill="currentColor"
  >
    <desc lang="en-US">An X shape</desc>
    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" />
  </svg>
);

export const IconCollections = () => (
  <svg
    className="Gdg38"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    aria-hidden="false"
    fill="currentColor"
  >
    <desc lang="en-US">A stack of photos</desc>
    <path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6Zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2ZM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7Z" />
  </svg>
);

export type IIconType = "logo" | "search" | "bell" | "collections";
export interface Props {
  icon: IIconType;
}

const Icon = function ({ icon }: Props) {
  switch (icon) {
    case "logo":
      return <IconLogo />;
    case "search":
      return <IconSearch />;
    case "bell":
      return <IconBell />;
    case "collections":
      return <IconCollections />;
    default:
      return null;
  }
};
export default Icon;
