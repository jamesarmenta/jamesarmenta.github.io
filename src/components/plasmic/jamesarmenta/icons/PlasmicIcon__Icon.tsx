// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 2000 2000"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M1750-.4H0v250h1000v1000h250v-1000h750V-.4z"}></path>

      <path
        d={
          "M250 499.6h250v250H250zm1250 0h250v250h-250zm-1000 500h250v250H500zm-500 250h250v250H0zm750 0h250v250H750zm750 0h250v250h-250zm-1250 250h250v250H250zm1000 0h250v250h-250zm-500 250H500v250h750v-250h-250z"
        }
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */