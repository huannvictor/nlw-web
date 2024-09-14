import logo from './assets/logo-in-orbit.svg'
import letsStart from './assets/lets-start-illustration.svg'

import { Plus, X } from 'lucide-react'
import { Button } from './components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './components/ui/dialog'
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './components/ui/radio-group'

import { weekTimes } from './utils/week-times'

export function App() {
  return (
    <Dialog>
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

      <DialogContent>
        <div className="flex flex-col h-full gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <DialogTitle>Cadastrar meta</DialogTitle>
              <DialogClose>
                <X className="size-5" />
              </DialogClose>
            </div>

            <DialogDescription>
              Adicione atividades que{' '}
              <span className="underline">te fazem bem</span> e que você quer
              continuar praticando toda semana.
            </DialogDescription>
          </div>

          <form action="" className="flex flex-col justify-between flex-1">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Qual a atividade?</Label>
                <Input
                  id="title"
                  autoFocus
                  placeholder="Praticar exercícios, meditar, etc..."
                />
                <div className="flex flex-col gap-2">
                  <Label>Quantas vezes na semana?</Label>
                  <RadioGroup>
                    {weekTimes.map(item => (
                      <RadioGroupItem value={item.value} key={item.value}>
                        <RadioGroupIndicator />
                        <span className="font-medium leading-none text-zinc-300">
                          {item.time}
                        </span>
                        <span className="text-lg leading-none">
                          {item.emoji}
                        </span>
                      </RadioGroupItem>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center gap-3">
              <DialogClose asChild>
                <Button variant="secondary" type="button" className="flex-1">
                  Fechar
                </Button>
              </DialogClose>
              <Button className="flex-1">Salvar</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
