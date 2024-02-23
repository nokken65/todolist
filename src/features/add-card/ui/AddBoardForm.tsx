import { zodResolver } from '@hookform/resolvers/zod'
import { Add as AddIcon } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'

import { useAppDispatch } from '@/app/model/store'
import { localStorageApi } from '@/shared/api'

import { AddBoardValues } from '../model/models'
import { addBoardSchema } from '../validation'

type AddBoardFormProps = {
  onSubmit?: VoidFunction
}

const AddBoardForm = (props: AddBoardFormProps) => {
  const { onSubmit } = props

  const { handleSubmit, control } = useForm<AddBoardValues>({
    defaultValues: {
      title: ''
    },
    resolver: zodResolver(addBoardSchema)
  })

  const dispatch = useAppDispatch()

  return (
    <form
      onSubmit={handleSubmit((data) => {
        dispatch(localStorageApi.addBoard(data))
        onSubmit && onSubmit()
      })}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'flex-end'
      }}
    >
      <Controller
        name="title"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            fullWidth
            label="Title"
            size="small"
            placeholder="In progress"
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
            {...field}
          />
        )}
      />
      <Button
        sx={{ borderRadius: '0.2rem' }}
        type="submit"
        startIcon={<AddIcon />}
      >
        Create
      </Button>
    </form>
  )
}

export { AddBoardForm }
