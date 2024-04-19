const createFromIconfontCN = (icon: any) => {
  const { path, ...rest } = icon;
  return (props: any) => {
    return <>{path}</>;
  };
};

type IconProps = {
  viewBox: string;
  path: JSX.Element;
  displayName: string;
};

const createIcon = (props: IconProps) => {
  const { viewBox, path, ...rest } = props;
  const icon = {
    viewBox,
    path,
    defaultProps: {
      fill: 'currentColor'
    }
  };
  return createFromIconfontCN(icon);
};

export const MapMarker = ({
  width = '800px',
  height = '800px',
  fillColor = '#2b77e7'
}) => (
  <svg
    height={height}
    width={width}
    version='1.1'
    id='Layer_1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 0 512 512'
    xmlSpace='preserve'
  >
    <path
      fill={fillColor}
      d='M87.084,192c-0.456-5.272-0.688-10.6-0.688-16C86.404,78.8,162.34,0,256.004,0s169.6,78.8,169.6,176
   c0,5.392-0.232,10.728-0.688,16h0.688c0,96.184-169.6,320-169.6,320s-169.6-223.288-169.6-320H87.084z M256.004,224
   c36.392,1.024,66.744-27.608,67.84-64c-1.096-36.392-31.448-65.024-67.84-64c-36.392-1.024-66.744,27.608-67.84,64
   C189.26,196.392,219.612,225.024,256.004,224z'
    />
  </svg>
);

export const LegerWalletIcon = createIcon({
  displayName: 'LegerWalletIcon',
  viewBox: '0 0 19 19',
  path: (
    <svg
      width='19'
      height='19'
      viewBox='0 0 19 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M7 0H16C17.6569 0 19 1.34315 19 3V12H7V0Z' fill='#23f7dd' />
      <path d='M4 0H2C0.895431 0 0 0.895431 0 2V4H4V0Z' fill='#23f7dd' />
      <path
        d='M0 15L2.78142e-07 17C4.31755e-07 18.1046 0.895431 19 2 19L4 19L4 15L0 15Z'
        fill='#23f7dd'
      />
      <path
        d='M19 15L19 17C19 18.1046 18.1046 19 17 19L15 19L15 15L19 15Z'
        fill='#23f7dd'
      />
      <path d='M4 8H0V12H4V8Z' fill='#23f7dd' />
      <path d='M12 15H8V19H12V15Z' fill='#23f7dd' />
    </svg>
  )
});

export const MaiarAppIcon = createIcon({
  displayName: 'MaiarAppIcon',
  viewBox: '0 0 14 21',
  path: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='17.5'
      height='20'
      viewBox='0 0 17.5 28'
    >
      <defs>
        <style></style>
      </defs>
      <g transform='translate(11007 -18884.001)'>
        <path
          fill='#23f7dd'
          d='M14.875-21H2.625A2.626,2.626,0,0,0,0-18.375V4.375A2.626,2.626,0,0,0,2.625,7h12.25A2.626,2.626,0,0,0,17.5,4.375v-22.75A2.626,2.626,0,0,0,14.875-21Z'
          transform='translate(-11007 18905)'
        ></path>
        <g transform='translate(-11003 18892.168) scale(0.285)' fill='#fff'>
          <path d='M17.8956 12.0018L32.0458 4.52327L29.6668 0L16.7098 5.18441C16.3761 5.31809 16.0062 5.31809 15.6726 5.18441L2.71192 0L0.333008 4.52327L14.4832 12.0018L0.333008 19.4767L2.71192 24L15.669 18.8156C16.0027 18.6819 16.3725 18.6819 16.7061 18.8156L29.6632 24L32.0421 19.4767L17.8919 11.9982L17.8956 12.0018Z'></path>
        </g>
        <circle
          fill='#fff'
          cx='1.5'
          cy='1.5'
          r='1.5'
          transform='translate(-10999.75 18906.498)'
        ></circle>
      </g>
    </svg>
  )
});

export const MaiarDefiWalletIcon = createIcon({
  displayName: 'MaiarDefiWalletIcon',
  viewBox: '0 0 25 23',
  path: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='20'
      viewBox='0 0 24 21'
    >
      <defs>
        <style></style>
      </defs>
      <g transform='translate(11024 -18800.5)'>
        <path
          fill='#23f7dd'
          d='M21.619-15H3.75A.75.75,0,0,1,3-15.75a.75.75,0,0,1,.75-.75h18a.75.75,0,0,0,.75-.75,2.25,2.25,0,0,0-2.25-2.25H3a3,3,0,0,0-3,3v15a3,3,0,0,0,3,3H21.619A2.321,2.321,0,0,0,24-.75v-12A2.321,2.321,0,0,0,21.619-15Z'
          transform='translate(-11024 18820)'
        ></path>
        <g transform='translate(-11017.25 18810) scale(0.3)'>
          <path
            fill='#fff'
            d='M17.8956 12.0018L32.0458 4.52327L29.6668 0L16.7098 5.18441C16.3761 5.31809 16.0062 5.31809 15.6726 5.18441L2.71192 0L0.333008 4.52327L14.4832 12.0018L0.333008 19.4767L2.71192 24L15.669 18.8156C16.0027 18.6819 16.3725 18.6819 16.7061 18.8156L29.6632 24L32.0421 19.4767L17.8919 11.9982L17.8956 12.0018Z'
          ></path>
        </g>
        <circle
          fill='#fff'
          cx='1.314'
          cy='1.314'
          r='1.314'
          transform='translate(-11004.771 18812.314)'
        ></circle>
      </g>
    </svg>
  )
});

export const WebWalletIcon = createIcon({
  displayName: 'WebWalletIcon',
  viewBox: '0 0 27 24',
  path: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='27'
      height='24'
      viewBox='0 0 27 24'
    >
      <defs>
        <style></style>
      </defs>
      <g transform='translate(11028 -19030)'>
        <path
          fill='#23f7dd'
          d='M24.75-21H2.25A2.251,2.251,0,0,0,0-18.75v13.5A2.251,2.251,0,0,0,2.25-3h22.5A2.251,2.251,0,0,0,27-5.25v-13.5A2.251,2.251,0,0,0,24.75-21ZM22.5,1.875A1.122,1.122,0,0,0,21.375.75H16.753l-.872-2.616a.56.56,0,0,0-.534-.384H11.658a.56.56,0,0,0-.534.384L10.252.75H5.625a1.125,1.125,0,0,0,0,2.25h15.75A1.122,1.122,0,0,0,22.5,1.875Z'
          transform='translate(-11028 19051)'
        ></path>
        <g transform='translate(-11021 19034) scale(0.4)' fill='#fff'>
          <path d='M17.8956 12.0018L32.0458 4.52327L29.6668 0L16.7098 5.18441C16.3761 5.31809 16.0062 5.31809 15.6726 5.18441L2.71192 0L0.333008 4.52327L14.4832 12.0018L0.333008 19.4767L2.71192 24L15.669 18.8156C16.0027 18.6819 16.3725 18.6819 16.7061 18.8156L29.6632 24L32.0421 19.4767L17.8919 11.9982L17.8956 12.0018Z'></path>
        </g>
      </g>
    </svg>
  )
});

export const XAliasIcon = createIcon({
  displayName: 'XAlias',
  viewBox: '0 0 80 24',
  path: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='30'
      height='30'
      viewBox='0 0 48 48'
    >
      <path
        fill='#fbc02d'
        d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
      ></path>
      <path
        fill='#e53935'
        d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
      ></path>
      <path
        fill='#4caf50'
        d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
      ></path>
      <path
        fill='#1565c0'
        d='M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
      ></path>
    </svg>
  )
});
