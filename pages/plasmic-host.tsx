import * as React from "react";
import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/react-web/lib/host";
// import TextInput from "@/components/text-input";
import Button from "@/components/Button";
// import TextLink from "@/components/text-link";
import Switch from "@/components/switch";
// import ProgressBar from "@/components/progress-bar";
// import Checkbox from "@/components/checkbox";

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}

// Register le composant Button
registerComponent(Button, {
  // Nom du composant côté Builder (CMS)
  name: "Button",
  // Propriétés du composant Button
  props: {
    onClick: {
      type: "eventHandler",
      argTypes: [],
    },
    text: {
      type: "string",
      defaultValue: "Text",
      required: true,
    },
    desctructive: {
      type: "boolean",
      defaultValue: false,
      required: false,
    },
  },
  importPath: "@/components/button",
});

registerComponent(Switch, {
  name: "Switch",
  props: {
    status: {
      type: "choice",
      options: ["Enabled", "Disabled"],
    },
    state: {
      type: "choice",
      options: ["Selected", "Unselected"],
    },
  },
  importPath: "@/components/switch",
});