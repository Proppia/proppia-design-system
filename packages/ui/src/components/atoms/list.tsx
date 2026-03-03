import * as React from "react";

import { cn } from "../../lib/utils";

const List = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "flex flex-col divide-y divide-border rounded-md border border-border bg-card",
      className,
    )}
    {...props}
  />
));
List.displayName = "List";

const ListItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(
      "flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-muted/50",
      className,
    )}
    {...props}
  />
));
ListItem.displayName = "ListItem";

export { List, ListItem };
