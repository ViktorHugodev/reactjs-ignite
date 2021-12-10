import { ReactNode } from "react";
import { useCan } from "../hooks/useCan";

interface CanSeeProps {
  children: ReactNode
  permissions: string[]
  roles?: string[]
}

export function Can({ children, permissions, roles }: CanSeeProps) {
  const userCanSeeComponent = useCan({ permissions, roles })

  return (
    <>
      {children}
    </>
  )
}