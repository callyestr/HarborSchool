import { css } from "styled-components";
import { wem2 } from "ruucm-blocks/tools/mixins";
// hover
const style = css`
  .target {
    opacity: 0;
    transition: 0.32s all ease-in;
  }
  .trigger:hover {
    .target {
      opacity: 1;
      transition: 0.32s all ease-in;
    }
  }

  .work:hover {
    font-weight: 800 !important;
    fontsize: wem2(19) !important;
  }

  .about:hover {
    font-weight: 800 !important;
    fontsize: wem2(19) !important;
  }

  @media screen and (max-width: 600px) {
    .saran_logo {
      padding-left: 0 !important;
    }
  }

  @media screen and (max-width: 600px) {
    .gh_1 {
      font-size: 50px !important;
    }
  }

  @media screen and (max-width: 600px) {
    .pw_1 {
      font-size: 50px !important;
    }
  }
  @import url("https://fonts.googleapis.com/css?family=Karla");

  @import url("https://fonts.googleapis.com/css?family=Oleo+Script:400,700");
  font-family: "Oleo Script", cursive;

  @import url("https://fonts.googleapis.com/css?family=Allan:400,700");
  font-family: "Allan", cursive;

  @import url("https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i");
  font-family: "Roboto", sans-serif;
`;

export default style;
