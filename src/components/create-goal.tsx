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
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createGoal } from '../http/create-goal'
import { useQueryClient } from '@tanstack/react-query'

const createGoalForm = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja realizar'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

type createGoalForm = z.infer<typeof createGoalForm>

export function CreateGoal() {
  const queryClient = useQueryClient()

  const { register, control, handleSubmit, formState, reset } =
    useForm<createGoalForm>({
      resolver: zodResolver(createGoalForm),
    })

  async function handleCreateGoal(data: createGoalForm) {
    await createGoal({
      title: data.title,
      desiredWeeklyFrequency: data.desiredWeeklyFrequency,
    })
    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })

    reset()
  }

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

        <form
          onSubmit={handleSubmit(handleCreateGoal)}
          className="flex flex-col justify-between flex-1"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Qual a atividade?</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Praticar exercícios, meditar, etc..."
                {...register('title')}
              />
              {formState.errors.title && (
                <p className="text-sm text-red-400">
                  {formState.errors.title.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label>Quantas vezes na semana?</Label>
              <Controller
                control={control}
                name="desiredWeeklyFrequency"
                defaultValue={1}
                render={({ field }) => {
                  return (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={String(field.value)}
                    >
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
                  )
                }}
              />
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button variant="secondary" type="button" className="flex-1">
                Fechar
              </Button>
            </DialogClose>
            <Button type="submit" className="flex-1">
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}
