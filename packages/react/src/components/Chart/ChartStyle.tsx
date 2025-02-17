import React from "react";

import { type ChartConfig, THEMES } from "./Root";

type ChartStyleProps = {
	id: string;
	config: ChartConfig;
};

export const ChartStyle = ({ id, config }: ChartStyleProps) => {
	const colorConfig = Object.entries(config).filter(
		([, config]) => config.theme || config.color,
	);

	if (!colorConfig.length) {
		return null;
	}

	return (
		<style
			dangerouslySetInnerHTML={{
				__html: Object.entries(THEMES)
					.map(
						([theme, prefix]) => `
            ${prefix} [data-chart=${id}] {
            ${colorConfig
							.map(([key, itemConfig]) => {
								const color =
									itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
									itemConfig.color;

								return color ? `  --color-${key}: ${color};` : null;
							})
							.join("\n")}
            }`,
					)
					.join("\n"),
			}}
		/>
	);
};
