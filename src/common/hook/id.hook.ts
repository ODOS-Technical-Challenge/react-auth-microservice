import { nanoid } from "nanoid";
import { useState } from "react";

export function useId(id?: string) {
  const [data] = useState<string>(id || nanoid());

  return [data];
}
