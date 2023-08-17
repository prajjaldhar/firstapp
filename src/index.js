import React from "react";
import ReactDOM from "react-dom";
import CardComp from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

let img1 =
  "https://th.bing.com/th?id=ORMS.2fadb3202d81e85d077b1ddb518f56b9&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0";

ReactDOM.render(
  <>
    <h1>Feature Card: </h1>
    <CardComp imgsrc={img1} title="The ex" desc="loremsjknajdafkajfbkajfbafj" />
    <CardComp imgsrc={img1} title="The ex" desc="loremsjknajdafkajfbkajfbafj" />
  </>,
  document.getElementById("root")
);
