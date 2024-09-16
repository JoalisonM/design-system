import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const DrawerOverlayContainer = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.45);

  backdrop-filter: blur(1px);

  &[data-state="open"] {
    animation: ${fadeIn} 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &[data-state="closed"] {
    animation: ${fadeOut} 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const DrawerContentContainer = styled(Dialog.Content)`
  position: fixed;
  z-index: 40;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  overflow-y: auto;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  &[data-state="open"] {
    animation: ${slideIn} 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &[data-state="closed"] {
    animation: ${slideOut} 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (max-width: 640px) {
    max-width: 24rem;
  }
`;

export const DrawerBodyContainer = styled.div`
  flex: 1;
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  padding: 0 ${({ theme }) => theme.space[6]};
`;

export const DrawerHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0 1.5rem;
`;

export const DrawerFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  border-top: 1px solid ${({ theme }) => theme.colors.zinc200};
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
`;
