import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
import { EmptyGoal } from './components/empty-goal'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
  })

  return (
    <Dialog>
      {data?.total ? <Summary /> : <EmptyGoal />}
      <CreateGoal />
    </Dialog>
  )
}
