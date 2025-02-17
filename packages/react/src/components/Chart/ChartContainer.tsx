import React from "react";
import * as RechartsPrimitive from "recharts";

import { ChartStyle } from "./ChartStyle";
import { type ChartConfig, ChartContext } from "./Root";
import { ChartContainerWrapper } from "./style";

export type ChartContainerProps = {
  config: ChartConfig;
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
} & React.HTMLAttributes<HTMLDivElement>;

export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  ChartContainerProps
>(({ id, children, config, ...props }, ref) => {
  const min = 1;
  const max = 100;
  const uniqueId = String(min + Math.random() * (max - min));
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <ChartContainerWrapper data-chart={chartId} ref={ref} {...props}>
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </ChartContainerWrapper>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";
