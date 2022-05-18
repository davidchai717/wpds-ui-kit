import * as React from "react";
import * as Separator from "@radix-ui/react-separator";
import type { SeparatorProps } from "@radix-ui/react-separator";
import * as Theme from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "Divider";

const StyledSeparator = Theme.styled(Separator.Root, {
  "&[data-orientation=horizontal]": { height: 1, width: "100%" },
  "&[data-orientation=vertical]": { height: "100%", width: 1 },
  variants: {
    variant: {
      default: {
        backgroundColor: Theme.theme.colors.gray300,
      },
      strong: {
        backgroundColor: Theme.theme.colors.gray0,
      },
    },
  },
});

interface DividerProps extends SeparatorProps {
  /** Override CSS */
  css?: WPDS.CSS;
  /** Sets the color of the divider
   * @default default
   */
  variant?: "default" | "strong";
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ css, variant = "default", ...props }, ref) => {
    return <StyledSeparator variant={variant} css={css} ref={ref} {...props} />;
  }
);

Divider.displayName = NAME;

export type { DividerProps };
