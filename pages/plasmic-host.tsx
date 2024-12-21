import * as React from 'react';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/react-web/lib/host';

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// registerComponent(...)

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}

import { registerComponent } from "@plasmicapp/react-web/lib/host";

/** Code plasmic au dessus */

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