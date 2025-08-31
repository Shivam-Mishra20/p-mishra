import type { ReactNode } from "react"
import { SiteHeader } from "./_components/header"
import { SiteFooter } from "@/components/footer"

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      {/* Footer also added in home for demo; wrapper ensures it appears on all routes */}
      <SiteFooter />
    </>
  )
}
