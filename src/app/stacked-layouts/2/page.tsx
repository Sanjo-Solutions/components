import { ComponentDemoPage } from "@/components/ComponentDemoPage"
import { StackedLayout1 } from "@/components/stacked-layouts/1"

export default function Page() {
  return (
    <ComponentDemoPage componentName="Stacked Layout 1">
      <StackedLayout1
        menuItems={[
          {
            label: "Dashboard",
            href: "#",
          },
          {
            label: "Team",
            href: "#",
          },
          {
            label: "Projects",
            href: "#",
          },
          {
            label: "Calendar",
            href: "#",
          },
          {
            label: "Reports",
            href: "#",
          },
        ]}
        title="Dashboard"
      >
        <div
          className="rounded border bg-body-tertiary"
          style={{ minHeight: "3rem" }}
        ></div>
      </StackedLayout1>
    </ComponentDemoPage>
  )
}
