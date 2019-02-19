import { css } from "styled-components";

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

  body {
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
