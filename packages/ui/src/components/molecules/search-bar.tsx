import * as React from "react";

import { cn } from "../../lib/utils";
import { Button } from "../atoms/button";
import { Input } from "../atoms/input";

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = "Buscar…",
  className,
}: SearchBarProps) {
  return (
    <form
      className={cn("flex gap-2", className)}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
    >
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <Button type="submit" variant="secondary">
        Buscar
      </Button>
    </form>
  );
}

