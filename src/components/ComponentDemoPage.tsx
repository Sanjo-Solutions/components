export function ComponentDemoPage({
  componentName,
  children,
}: {
  componentName: string
  children: React.ReactNode
}) {
  return (
    <>
      <h1 className="mb-3">{componentName}</h1>

      <div className="rounded border h-100">{children}</div>
    </>
  )
}
