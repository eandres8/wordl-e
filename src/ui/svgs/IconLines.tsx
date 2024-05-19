type Props = {
  width?: number;
  height?: number;
  dark: boolean;
}

export const IconLines: React.FC<Props> = ({ width = 40, height=36, dark }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.93549" y="6" width="29.6129" height="24" rx="2" fill={dark ? '#FFFFFF' : '#818181'}  />
        <path d="M13.1613 15L13.1613 24" stroke={dark ? '#818181' : '#FFFFFF'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.7419 18V24" stroke={dark ? '#818181' : '#FFFFFF'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26.3226 12V24" stroke={dark ? '#818181' : '#FFFFFF'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
}
