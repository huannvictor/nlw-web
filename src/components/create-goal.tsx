import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './ui/radio-group'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'

import { X } from 'lucide-react'

import { weekTimes } from '../utils/week-times'

export function CreateGoal() {
  return (
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
                      <span className="text-lg leading-none">{item.emoji}</span>
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
  )
}
