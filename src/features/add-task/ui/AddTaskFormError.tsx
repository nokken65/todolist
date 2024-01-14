import styles from './AddTaskFormError.module.css'

type AddTaskFormErrorProps = { error?: null | string }

const AddTaskFormError = ({ error = null }: AddTaskFormErrorProps) => {
  return error ? <div className={styles.error}>{error}</div> : null
}

export { AddTaskFormError }
