import type { StorybookConfig } from "@storybook/react-vite";

import { dirname, join } from "node:path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

    addons: [
        getAbsolutePath("@storybook/addon-onboarding"),
        getAbsolutePath("@storybook/addon-links"),
        getAbsolutePath("@storybook/addon-essentials"),
        getAbsolutePath("@chromatic-com/storybook"),
        getAbsolutePath("@storybook/addon-interactions"),
        getAbsolutePath("@storybook/addon-a11y"),
        getAbsolutePath("@storybook/addon-themes")
    ],

    framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {},
	},

    docs: {},

    async viteFinal(config, options) {
		const { mergeConfig } = await import("vite");

		if (options.configType === "PRODUCTION") {
			config.base = "/design-system/";
		}

		return mergeConfig(config, {
			build: {
				minify: false,
			},
		});
	},

    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
};
export default config;
