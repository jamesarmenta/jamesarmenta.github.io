// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uqLoCtoBYZiDt8D79DKGpo
// Component: KwQ1p6f9F4I

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { TabsContainer } from "@plasmicpkgs/plasmic-tabs"; // plasmic-import: qT-BBamUwNg/codeComponent
import ProjectTabItem from "../../ProjectTabItem"; // plasmic-import: JKE3W8Wul_/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_jamesarmenta.module.css"; // plasmic-import: uqLoCtoBYZiDt8D79DKGpo/projectcss
import sty from "./PlasmicProject.module.css"; // plasmic-import: KwQ1p6f9F4I/css

export type PlasmicProject__VariantMembers = {};
export type PlasmicProject__VariantsArgs = {};
type VariantPropType = keyof PlasmicProject__VariantsArgs;
export const PlasmicProject__VariantProps = new Array<VariantPropType>();

export type PlasmicProject__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicProject__ArgsType;
export const PlasmicProject__ArgProps = new Array<ArgPropType>("children");

export type PlasmicProject__OverridesType = {
  root?: p.Flex<typeof TabsContainer>;
  freeBox?: p.Flex<"div">;
};

export interface DefaultProjectProps {
  children?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProject__RenderFunc(props: {
  variants: PlasmicProject__VariantsArgs;
  args: PlasmicProject__ArgsType;
  overrides: PlasmicProject__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <TabsContainer
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      initialKey={"tab1" as const}
      previewAll={true}
      previewKey={"tab1" as const}
    >
      <ph.DataCtxReader>
        {$ctx => (
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <ProjectTabItem
                    className={classNames(
                      "__wab_instance",
                      sty.projectTabItem__iBeLp
                    )}
                    tabdestination={"tab2" as const}
                    tabname={"tab1" as const}
                  />

                  <ProjectTabItem
                    className={classNames(
                      "__wab_instance",
                      sty.projectTabItem___3OhRd
                    )}
                    img={
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__tbNAq)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"none" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"auto" as const}
                        loading={"eager" as const}
                      />
                    }
                    tabdestination={"tab3" as const}
                    tabname={"tab2" as const}
                    text={"two"}
                  />

                  <ProjectTabItem
                    className={classNames(
                      "__wab_instance",
                      sty.projectTabItem__ikJdZ
                    )}
                    img={
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__stXyP)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"none" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"auto" as const}
                        loading={"eager" as const}
                        src={{
                          src: "/plasmic/jamesarmenta/images/casajpg.jpg",
                          fullWidth: 721,
                          fullHeight: 1000,
                          aspectRatio: undefined
                        }}
                      />
                    }
                    tabdestination={"tab1" as const}
                    tabname={"tab3" as const}
                    text={"three"}
                  />
                </React.Fragment>
              ),
              value: args.children
            })}
          </div>
        )}
      </ph.DataCtxReader>
    </TabsContainer>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof TabsContainer;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProject__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProject__VariantsArgs;
    args?: PlasmicProject__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProject__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProject__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicProject__ArgProps,
          internalVariantPropNames: PlasmicProject__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProject__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProject";
  } else {
    func.displayName = `PlasmicProject.${nodeName}`;
  }
  return func;
}

export const PlasmicProject = Object.assign(
  // Top-level PlasmicProject renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicProject
    internalVariantProps: PlasmicProject__VariantProps,
    internalArgProps: PlasmicProject__ArgProps
  }
);

export default PlasmicProject;
/* prettier-ignore-end */