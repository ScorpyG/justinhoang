import { useColorModeValue } from '@chakra-ui/react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448" {...props} fill={useColorModeValue('#000', '#FFF')}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0v448h448V0H0Zm98.224 243.04v-18.256l.336.112v-18.368l78.4-.336c43.12 0 78.624.112 78.624.448.448.224.448 8.4.448 18.48v17.92h-58.24V408.8h-41.328V243.04h-58.24Zm289.744-20.944c-7.84-8.176-16.576-13.328-28-16.016l.224-.224c-7.728-2.016-26.208-2.688-34.048-1.12-24.192 4.48-41.104 20.16-45.92 42.56-1.568 6.384-1.008 22.288.672 28.784 2.24 7.504 7.056 16.576 12.32 22.4 9.184 9.632 19.04 15.904 42.224 25.76 20.16 8.96 27.328 12.992 30.912 17.92 2.576 3.92 3.36 6.272 3.36 11.424 0 5.6-1.792 9.632-5.936 13.44-9.632 8.736-29.12 9.744-43.68 2.24-4.816-2.688-13.104-10.528-16.8-16.352l-2.912-3.92-12.656 7.392-16.8 9.744-4.256 2.688c-.448.784 7.504 12.768 11.648 17.248 10.528 11.536 27.664 20.496 45.584 23.856 8.4 1.456 26.32 1.68 34.16.336 24.976-4.144 42.448-16.8 49.616-35.504 6.384-17.136 4.256-39.984-5.264-54.544-8.4-12.992-22.288-22.064-54.32-35.84-17.36-7.616-22.96-11.312-25.984-17.472-1.344-2.912-2.016-4.928-2.016-8.512 0-11.76 8.96-18.816 22.4-17.92 9.296.672 15.232 4.256 21.056 12.544 1.792 2.912 3.584 4.816 4.032 4.48 11.76-7.28 31.136-20.384 31.136-21.056-.448-2.016-6.608-9.856-10.752-14.336Z"
    />
  </svg>
);

export default SvgComponent;
