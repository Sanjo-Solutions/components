import { StackedLayout1 } from "@/components/stacked-layouts/1"

export default function Page() {
  return <StackedLayout1
    menuItems={ [
      {
        label: 'Dashboard',
        href: '#',
      },
      {
        label: 'Team',
        href: '#',
      },
      {
        label: 'Projects',
        href: '#',
      },
      {
        label: 'Calendar',
        href: '#',
      },
      {
        label: 'Reports',
        href: '#',
      },
    ] } title="Dashboard"
  >
    <div className="border h-100 bg-body-tertiary"></div>
  </StackedLayout1>
}
