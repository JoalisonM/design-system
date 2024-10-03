import React, {
  ReactNode,
  ElementRef,
  forwardRef,
  ComponentPropsWithoutRef,
  HTMLAttributes,
} from "react";
import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

import {
  DrawerBodyContainer,
  DrawerFooterContainer,
  DrawerHeaderContainer,
  DrawerContentContainer,
  DrawerOverlayContainer,
} from "./style";

import { Heading } from "../Heading";

const DrawerRoot = Dialog.Root;

const DrawerTrigger = Dialog.Trigger;

const DrawerClose = Dialog.Close;

const DrawerPortal = Dialog.Portal;

type DrawerOverlayRef = ElementRef<typeof Dialog.Overlay>
type DrawerOverlayProps = ComponentPropsWithoutRef<typeof Dialog.Overlay>

const DrawerOverlay = forwardRef<DrawerOverlayRef, DrawerOverlayProps>((
  { ...props }, ref
) => {
  return (
    <DrawerOverlayContainer ref={ref} {...props} />
  );
});

DrawerOverlay.displayName = Dialog.Overlay.displayName;

type DrawerContentRef = ElementRef<typeof Dialog.Content>
type DrawerContentProps = ComponentPropsWithoutRef<typeof Dialog.Content> & {
  width?: number;
  children: ReactNode;
}

const DrawerContent = forwardRef<DrawerContentRef, DrawerContentProps>((
  { children, style, width = 600, ...props }, ref
) => {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerContentContainer
        ref={ref}
        style={{ width, ...style }}
        {...props}
      >
        {children}
      </DrawerContentContainer>
    </DrawerPortal>
  );
});

DrawerContent.displayName = Dialog.Content.displayName;

type DrawerBodyProps = HTMLAttributes<HTMLDivElement>

const DrawerBody = ({ ...props }: DrawerBodyProps) => {
  return <DrawerBodyContainer {...props} />;
};

type DrawerHeaderProps = HTMLAttributes<HTMLDivElement>

const DrawerHeader = ({ ...props }: DrawerHeaderProps) => {
  return <DrawerHeaderContainer {...props} />;
};

export type DrawerProps = Dialog.DialogProps & {
  title: string;
  width?: number;
  footer?: ReactNode;
}

export const Drawer = ({ title, children, footer, width, ...props }: DrawerProps) => {
  return (
    <DrawerRoot {...props}>
      <DrawerContent width={width}>
        <DrawerHeader>
          <Dialog.Title asChild>
            <Heading size="xl">{title}</Heading>
          </Dialog.Title>
        </DrawerHeader>

        <DrawerBody>{children}</DrawerBody>

        {footer && (
          <DrawerFooterContainer>
            {footer}
          </DrawerFooterContainer>
        )}
      </DrawerContent>
    </DrawerRoot>
  );
};
