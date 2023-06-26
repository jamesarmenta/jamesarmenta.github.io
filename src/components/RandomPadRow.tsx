// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicRandomPadRow,
  DefaultRandomPadRowProps
} from "./plasmic/jamesarmenta/PlasmicRandomPadRow";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface RandomPadRowProps extends DefaultRandomPadRowProps {}

function RandomPadRow_(props: RandomPadRowProps, ref: HTMLElementRefOf<"div">) {

  const overrides = {
    root: {
      style: {
        paddingLeft: Math.floor(Math.random() * 30) + "%",
        paddingRight: Math.floor(Math.random() * 30) + "%"
      }
    }
  };

  return <PlasmicRandomPadRow root={{ ref }} {...props} overrides={overrides} />;
}

const RandomPadRow = React.forwardRef(RandomPadRow_);
export default RandomPadRow;
