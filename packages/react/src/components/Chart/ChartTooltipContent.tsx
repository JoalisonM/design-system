import { forwardRef, useMemo } from "react";
import type { ComponentProps, HTMLAttributes } from "react";
import type * as RechartsPrimitive from "recharts";

import { useChart } from "./Root";
import {
	HideIndicatorContainer,
	PayloadContainer,
	TooltipContainer,
	TooltipContent,
	TooltipLabelContent,
	WithoutHideIndicatorContainer,
} from "./style";
import { getPayloadConfigFromPayload } from "./utils/getPayloadConfigFromPayload";

export type ChartTooltipContentProps = {
	hideLabel?: boolean;
	hideIndicator?: boolean;
	indicator?: "line" | "dot" | "dashed";
	nameKey?: string;
	labelKey?: string;
} & ComponentProps<typeof RechartsPrimitive.Tooltip> &
	HTMLAttributes<HTMLDivElement>;

export const ChartTooltipContent = forwardRef<
	HTMLDivElement,
	ChartTooltipContentProps
>(
	(
		{
			active,
			payload,
			indicator = "dot",
			hideLabel = false,
			hideIndicator = false,
			label,
			labelFormatter,
			labelClassName,
			formatter,
			color,
			nameKey,
			labelKey,
		},
		ref,
	) => {
		const { config } = useChart();

		const tooltipLabel = useMemo(() => {
			if (hideLabel || !payload?.length) {
				return null;
			}

			const [item] = payload;
			const key = `${labelKey || item.dataKey || item.name || "value"}`;
			const itemConfig = getPayloadConfigFromPayload(config, item, key);
			const value =
				!labelKey && typeof label === "string"
					? config[label as keyof typeof config]?.label || label
					: itemConfig?.label;

			if (labelFormatter) {
				return (
					<TooltipLabelContent>
						{labelFormatter(value, payload)}
					</TooltipLabelContent>
				);
			}

			if (!value) {
				return null;
			}

			return <TooltipLabelContent>{value}</TooltipLabelContent>;
		}, [
			label,
			labelFormatter,
			payload,
			hideLabel,
			labelClassName,
			config,
			labelKey,
		]);

		if (!active || !payload?.length) {
			return null;
		}

		const nestLabel = payload.length === 1 && indicator !== "dot";

		return (
			<TooltipContainer ref={ref}>
				{!nestLabel ? tooltipLabel : null}
				<TooltipContent>
					{payload.map((item, index) => {
						const key = `${nameKey || item.name || item.dataKey || "value"}`;
						const itemConfig = getPayloadConfigFromPayload(config, item, key);
						const indicatorColor = color || item.payload.fill || item.color;

						return (
							<PayloadContainer indicator={indicator} key={item.dataKey}>
								{formatter && item?.value !== undefined && item.name ? (
									formatter(item.value, item.name, item, index, item.payload)
								) : (
									<>
										{itemConfig?.icon ? (
											<itemConfig.icon />
										) : (
											!hideIndicator && (
												<WithoutHideIndicatorContainer
													indicator={indicator}
													nestLabel={nestLabel}
													indicatorColor={indicatorColor}
												/>
											)
										)}
										<HideIndicatorContainer nestLabel={nestLabel}>
											<div>
												{nestLabel ? tooltipLabel : null}
												<span>{itemConfig?.label || item.name}</span>
											</div>
											{item.value && <span>{item.value.toLocaleString()}</span>}
										</HideIndicatorContainer>
									</>
								)}
							</PayloadContainer>
						);
					})}
				</TooltipContent>
			</TooltipContainer>
		);
	},
);
ChartTooltipContent.displayName = "ChartTooltip";
