import * as React from "react";
import { theme, styled } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { Box } from "@washingtonpost/wpds-box";

import {
  sharedInputStyles,
  sharedInputVariants,
} from "@washingtonpost/wpds-input-shared";

const Container = styled(Box, {
  ...sharedInputStyles,
  alignItems: "center",
  display: "flex",

  "&:focus-within": {
    borderColor: theme.colors.signal,
  },

  variants: {
    ...sharedInputVariants,
    isDisabled: {
      true: {
        ...sharedInputVariants.isDisabled.true,
        "&:focus-within": {
          borderColor: theme.colors.disabled,
        },
      },
    },
    isInvalid: {
      true: {
        ...sharedInputVariants.isInvalid.true,
        "&:focus-within": {
          borderColor: theme.colors.error,
        },
      },
    },
    isSuccessful: {
      true: {
        borderColor: theme.colors.success,
      },
    },
  },
});

export type StyledContainerProps = {
  /**  used to override the container styles */
  css?: WPDS.CSS;
  /** Used to pass in the rest of the input*/
  children?: React.ReactNode;
} & React.ComponentPropsWithRef<typeof Container>;

export const StyledContainer = React.forwardRef<
  HTMLDivElement,
  StyledContainerProps
>(({ children, ...props }, ref) => (
  <Container {...props} ref={ref}>
    {children}
  </Container>
));

StyledContainer.displayName = "InputTextStyledContainer";
