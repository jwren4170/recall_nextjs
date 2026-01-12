import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/items/$itemId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/items/$itemId"!</div>
}
