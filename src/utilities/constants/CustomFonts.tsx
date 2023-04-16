import { Global } from '@emotion/react';

const Fonts = () => {
  <Global
    styles={`
      @font-face {
        font-family: "DMSans-Bold";
        src: local("DMSansBold"),
        url('/public/static/fonts/DMSans/DMSans-Bold.ttf')
        format("truetype");
      }

      @font-face {
        font-family: "DMSans-BoldItalic";
        src: local("DMSansBoldItalic"),
        url('/public/static/fonts/DMSans/DMSans-BoldItalic.ttf')
        format("truetype");
      }

      @font-face {
        font-family: "DMSans-Italic";
        src: local("DMSansItalic"),
        url('/public/static/fonts/DMSans/DMSans-Italic.ttf')
        format("truetype");
      }

      @font-face {
        font-family: "DMSans-Medium";
        src: local("DMSansMedium"),
        url('/public/static/fonts/DMSans/DMSans-Medium.ttf')
        format("truetype");
      }

      @font-face {
        font-family: "DMSans-MediumItalic";
        src: local("DMSansRegular"),
        url('/public/static/fonts/DMSans/DMSans-MediumItalic.ttf')
        format("truetype");
      }

      @font-face {
        font-family: "DMSans-Regular";
        src: local("DMSansRegular"),
        url('/public/static/fonts/DMSans/DMSans-Regular.ttf')
        format("truetype");
      }
    `}
  />;
};

export default Fonts;
