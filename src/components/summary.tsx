import { CheckCircle2, Plus } from 'lucide-react'
import { InOrbitIcon } from './in-orbit-icon'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">5 a 10 de Agosto</span>
        </div>

        <DialogTrigger>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: '58%' }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou <span className="text-zinc-100">8</span> de{' '}
            <span className="text-zinc-100">15</span> metas nessa semana.
          </span>
          <span>58%</span>
        </div>
      </div>

      <Separator />

      <div className="flex flex-wrap gap-3">
        <OutlineButton>
          <Plus className="gap-3 size-4" />
          Meditar
        </OutlineButton>
        <OutlineButton>
          <Plus className="gap-3 size-4" />
          Treinar
        </OutlineButton>
        <OutlineButton>
          <Plus className="gap-3 size-4" />
          Estudar
        </OutlineButton>
        <OutlineButton>
          <Plus className="gap-3 size-4" />
          Acordar cedo
        </OutlineButton>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Domingo{' '}
            <span className="text-xs text-zinc-400">(8 de Setembro)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-pink-500 size-4" />
              <span className="text-sm text-zinc-400">
                Você completou{' '}
                <span className="text-zinc-100">Acordar Cedo</span> às{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-pink-500 size-4" />
              <span className="text-sm text-zinc-400">
                Você completou <span className="text-zinc-100">Treinar</span> às{' '}
                <span className="text-zinc-100">10:33h</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Segunda-feira{' '}
            <span className="text-xs text-zinc-400">(9 de Setembro)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-pink-500 size-4" />
              <span className="text-sm text-zinc-400">
                Você completou{' '}
                <span className="text-zinc-100">Acordar Cedo</span> às{' '}
                <span className="text-zinc-100">06:25h</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
