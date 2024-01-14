type AddTaskFormErrorProps = { error?: null | string }

const AddTaskFormError = ({ error = null }: AddTaskFormErrorProps) => {
  return error ? <div className={'error-message'}>{error}</div> : null
}

export { AddTaskFormError }
