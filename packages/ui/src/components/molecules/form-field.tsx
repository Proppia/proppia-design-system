import * as React from "react";

import { cn } from "../../lib/utils";
import { Label } from "../atoms/label";
import { Text } from "../atoms/text";

export interface FormFieldProps {
  label: string;
  description?: string;
  error?: string;
  className?: string;
  children: React.ReactElement<any>;
}

export function FormField({
  label,
  description,
  error,
  className,
  children,
}: FormFieldProps) {
  const id = React.useId();
  const describedBy: string[] = [];
  const descriptionId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  if (descriptionId) describedBy.push(descriptionId);
  if (errorId) describedBy.push(errorId);

  const control = React.cloneElement(children, {
    id: children.props.id ?? id,
    "aria-describedby":
      describedBy.length > 0 ? describedBy.join(" ") : undefined,
    "aria-invalid": error ? true : children.props["aria-invalid"],
  });

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={children.props.id ?? id}>{label}</Label>
      {control}
      {description ? (
        <Text id={descriptionId} size="sm" variant="muted">
          {description}
        </Text>
      ) : null}
      {error ? (
        <Text id={errorId} size="sm" className="text-destructive">
          {error}
        </Text>
      ) : null}
    </div>
  );
}

