import styled, { css } from "styled-components";

export const ChartContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fonts.default};
  aspect-ratio: 16 / 9;

  .recharts-cartesian-axis-tick text {
    fill: ${({ theme }) => theme.colors.zinc500};
  }

  .recharts-cartesian-axis.recharts-yAxis.yAxis line {
    stroke: ${({ theme }) => theme.colors.zinc300};
  }

  .recharts-cartesian-grid-vertical line[stroke="#ccc"] {
    stroke: ${({ theme }) => theme.colors.zinc200};
    stroke-opacity: 0.5;
  }

  .recharts-cartesian-grid-horizontal line[stroke="#ccc"] {
    stroke: ${({ theme }) => theme.colors.zinc200};
    stroke-opacity: 0.5;
  }

  .recharts-curve.recharts-tooltip-cursor {
    stroke: ${({ theme }) => theme.colors.slate100};
  }

  .recharts-dot[stroke="#fff"] {
    stroke: transparent;
  }

  .recharts-layer {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  .recharts-polar-grid [stroke="#ccc"] {
    stroke: ${({ theme }) => theme.colors.error500};
  }

  .recharts-radial-bar-background-sector {
    fill: ${({ theme }) => theme.colors.zinc50};
  }

  .recharts-rectangle.recharts-tooltip-cursor {
    fill: ${({ theme }) => theme.colors.zinc50};
  }

  .recharts-reference-line [stroke="#ccc"] {
    stroke: ${({ theme }) => theme.colors.error500};
  }

  .recharts-sector[stroke="#fff"] {
    stroke: transparent;
  }

  .recharts-sector {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  .recharts-surface {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

export const TooltipLabelContent = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const TooltipContainer = styled.div`
  display: grid;
  align-items: flex-start;
  gap: 0.375rem /* 6px */;
  min-width: 8rem /* 128px */;
  border-radius: ${({ theme }) => theme.radii.md};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.zinc100};
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: 0.625rem /* 10px */;
  padding-right: 0.625rem /* 10px */;
  padding-top: 0.375rem /* 6px */;
  padding-bottom: 0.375rem /* 6px */;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
`;

export const TooltipContent = styled.div`
  display: grid;
  gap: 0.375rem /* 6px */;
`;

type PayloadContainerProps = {
	indicator: string;
};

export const PayloadContainer = styled.div<PayloadContainerProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: ${({ theme }) => theme.space[2]};

  &>svg {
    width: 0.625rem /* 10px */;
    color: ${({ theme }) => theme.colors.zinc100};
  }

  ${({ indicator }) =>
		indicator === "dot" &&
		css`
    align-items: center;
  `}
`;

type WithoutHideIndicatorContainerProps = {
	indicator: string;
	nestLabel: boolean;
	indicatorColor: string;
};

export const WithoutHideIndicatorContainer = styled.div<WithoutHideIndicatorContainerProps>`
  flex-shrink: 0;
  border-radius: 2px;
  border-color: ${(props) => props.indicatorColor};
  background-color: ${(props) => props.indicatorColor};

  ${({ indicator }) =>
		indicator === "dot" &&
		css`
    height: 0.625rem /* 10px */;
    width: 0.625rem /* 10px */;
  `}

  ${({ indicator }) =>
		indicator === "line" &&
		css`
    width: 0.25rem /* 4px */;
  `}

  ${({ indicator }) =>
		indicator === "dashed" &&
		css`
    width: 0px;
    border-width: 1.5px;
    border-style: dashed;
    background-color: transparent;
  `}

  ${({ indicator, nestLabel }) =>
		nestLabel &&
		indicator === "dashed" &&
		css`
    margin-top: 0.125rem /* 2px */;
    margin-bottom: 0.125rem /* 2px */;
  `}
`;

type HideIndicatorContainerProps = {
	nestLabel: boolean;
};

export const HideIndicatorContainer = styled.div<HideIndicatorContainerProps>`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.nestLabel ? "flex-end" : "center")};
  line-height: 1;

  div {
    display: grid;
    gap: 0.375rem /* 6px */;

    span {
      color: ${({ theme }) => theme.colors.zinc500};
    }
  }

  span {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.zinc900};
  }
`;

type LegendContainerProps = {
	va: string; // vertical align
};

export const LegendContainer = styled.div<LegendContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[4]};

  ${({ va }) =>
		va === "top" &&
		css`
    padding-bottom: 0.75rem /* 12px */;
  `}

  ${({ va }) =>
		va !== "top" &&
		css`
    padding-top: 0.75rem /* 12px */;
  `}
`;

export const LegendContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem /* 6px */;

  &>svg {
    height: 0.75rem /* 12px */;
    width: 0.75rem /* 12px */;
    color: ${({ theme }) => theme.colors.zinc500};
  }
`;

type LegendItemProps = {
	bg?: string;
};

export const LegendItem = styled.div<LegendItemProps>`
  height: 0.5rem /* 8px */;
  width: 0.5rem /* 8px */;
  flex-shrink: 0;
  border-radius: 2px;
  background-color: ${(props) => props.bg};
`;
