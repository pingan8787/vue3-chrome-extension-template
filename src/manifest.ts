import packageJson from "../package.json";
import type { ManifestType } from "./manifest-type";

const manifest: ManifestType = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  options_page: "src/options/index.html",
  background: { service_worker: "src/background/index.js" },
  action: {
    icons: {
      "16": "icon-34.png",
      "48": "icon-34.png",
      "128": "icon-128.png",
    }
  },
  icons: {
    "128": "icon-128.png",
  },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
      js: ["src/content/index.js"],
    },
  ],
  commands: {
    "my-template": {
      "suggested_key": {
        "default": "Ctrl+Shift+Z",
        "mac": "Command+Shift+Z"
      },
      "description": "Open my template"
    }
  },
  web_accessible_resources: [
    {
      resources: ["icon-128.png", "icon-34.png", "*.css"],
      matches: ["<all_urls>"],
    },
  ],
};

export default manifest;
