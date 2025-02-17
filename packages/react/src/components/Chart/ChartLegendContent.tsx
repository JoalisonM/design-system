import React from "react";
import type * as RechartsPrimitive from "recharts";

import { useChart } from "./Root";
import { LegendContainer, LegendContent, LegendItem } from "./style";
import { getPayloadConfigFromPayload } from "./utils/getPayloadConfigFromPayload";

export type ChartLegendContentProps = Pick<
  RechartsPrimitive.LegendProps,
  "payload" | "verticalAlign"
> & {
  hideIcon?: boolean;
  nameKey?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  ChartLegendContentProps
>(({ hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <LegendContainer va={verticalAlign} ref={ref}>
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <LegendContent key={item.value}>
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <LegendItem bg={item.color} />
            )}
            {itemConfig?.label}
          </LegendContent>
        );
      })}
    </LegendContainer>
  );
});
ChartLegendContent.displayName = "ChartLegend";
