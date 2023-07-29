import AppContext from "@/components/AppContext";
import * as SvgIcons from "@/components/SvgIcons";
import { Icon } from "@rsuite/icons";
import React from "react";
import components from "./component.config.json";

interface Menu {
  id?: string;
  name?: string;
  icon?: any;
  title?: string;
  components?: string[];
  target?: string;
  group?: boolean;
  url?: string;
  apis?: string[];
  children?: Menu[];
  new?: boolean;
}

export default function usePages(): Menu[] {
  const { messages } = React.useContext(AppContext);
  return [
    {
      id: "guide",
      name: messages?.common?.guide,
      icon: <Icon as={() => <SvgIcons.Guide />} style={{ fontSize: 20 }} />,
      children: [
        {
          id: "introduction",
          name: messages?.common?.introduction,
        },
        {
          id: "usage",
          name: messages?.common?.usage,
        },
        {
          id: "v5-features",
          name: messages?.common?.v5Features,
          new: true,
        },
        {
          id: "logs",
          name: messages?.common?.changeLog,
          target: "_blank",
          url: "https://github.com/rsuite/rsuite/releases",
        },
      ],
    },
    {
      id: "components",
      name: messages?.common?.components,
      icon: <Icon as={() => <SvgIcons.Component />} style={{ fontSize: 20 }} />,
      children: components,
    },
    {
      id: "resources",
      name: messages?.common?.resources,
      icon: <Icon as={() => <SvgIcons.Ecology />} style={{ fontSize: 20 }} />,
      children: [
        {
          id: "icons",
          name: messages?.common?.icons,
        },
        {
          id: "design",
          name: messages?.common?.designResources,
        },
        {
          id: "palette",
          name: messages?.common?.palette,
        },
        {
          id: "extensions",
          name: messages?.common?.extension,
        },
      ],
    },
  ];
}
