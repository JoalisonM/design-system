import {
  Box,
  Card,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  Heading,
  Text,
} from "@nefex-ui/react";
import type { ChartConfig, ChartContainerProps } from "@nefex-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 10 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default {
  title: "Chart/Bar",
  component: ChartContainer,
  args: {
    config: chartConfig,
    style: { maxHeight: "300px", width: "100%" },
  },
  decorators: [
    (Story) => {
      return (
        <Box>
          <Card.Root>
            <Card.Header>
              <Heading size="sm">Bar chart</Heading>
              <Text size="xxs">Chart description</Text>
            </Card.Header>
            <Card.Content>{Story()}</Card.Content>
          </Card.Root>
        </Box>
      );
    },
  ],
} as Meta<ChartContainerProps>;

export const Primary: StoryObj<ChartContainerProps> = {
  args: {
    children: (
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />
        <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />
      </BarChart>
    ),
  },
};

export const AddAGrid: StoryObj<ChartContainerProps> = {
  args: {
    children: (
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />
        <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />
      </BarChart>
    ),
  },
};

export const AddAnAxis: StoryObj<ChartContainerProps> = {
  args: {
    children: (
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />
        <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />
      </BarChart>
    ),
  },
};

export const AddTooltip: StoryObj<ChartContainerProps> = {
  args: {
    children: (
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid />
        <YAxis />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />
        <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />
      </BarChart>
    ),
  },
};

export const AddLegend: StoryObj<ChartContainerProps> = {
  args: {
    children: (
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />
        <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />
      </BarChart>
    ),
  },
};
