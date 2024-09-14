import logo from '../assets/logo-in-orbit.svg'
import letsStart from '../assets/lets-start-illustration.svg'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

export function EmptyGoal() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <img src={logo} alt="logo in orbit" />
      <img
        src={letsStart}
        alt="illustration cartoon art of a woman starting a spaceship"
      />

      <p className="leading-relaxed text-center text-zinc-300 max-w-80">
        Você ainda não cadastrou nenhuma meta, que tal{' '}
        <span className="underline">cadastrar uma</span> agora mesmo?
      </p>

      <DialogTrigger>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
