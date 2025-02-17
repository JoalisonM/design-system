import * as RechartsPrimitive from "recharts";

import { ChartContainer, type ChartContainerProps } from "./ChartContainer";
import {
	ChartLegendContent,
	type ChartLegendContentProps,
} from "./ChartLegendContent";
import {
	ChartTooltipContent,
	type ChartTooltipContentProps,
} from "./ChartTooltipContent";
import type { ChartConfig } from "./Root";

const ChartTooltip = RechartsPrimitive.Tooltip;
const ChartLegend = RechartsPrimitive.Legend;

export {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	ChartLegend,
	ChartLegendContent,
};
export type {
	ChartConfig,
	ChartContainerProps,
	ChartLegendContentProps,
	ChartTooltipContentProps,
};
