import styled from "styled-components";
import * as ScrollArea from "@radix-ui/react-scroll-area";

export const ScrollAreaRoot = styled(ScrollArea.Root)`
  position: relative;
  overflow: hidden;
`;

export const ScrollAreaViewport = styled(ScrollArea.Viewport)`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar)`
  display: flex;
  touch-action: none;
  user-select: none;

  transition: background 160ms ease-out;

  &[data-orientation="vertical"] {
    height: 100%;
    width: 8px;
  };

  &[data-orientation="horizontal"] {
    flex-direction: column;
    height: 10px;
  };
`;

export const ScrollAreaThumb = styled(ScrollArea.Thumb)`
  position: relative;
  flex: 1 1 0%;
  border-radius: ${({ theme }) => theme.radii.full};
  background: #ccc;
`;
