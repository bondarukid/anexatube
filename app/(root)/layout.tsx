import { AppShell } from "@/components/shell/app-shell"
import { ConsumerHeader } from "@/components/consumer/consumer-header"
import { ConsumerSidebar } from "@/components/consumer/consumer-sidebar"

export default function ConsumerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppShell sidebar={<ConsumerSidebar />} header={<ConsumerHeader />}>
      {children}
    </AppShell>
  )
}
