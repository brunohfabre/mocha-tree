import clsx from 'clsx'

export function Placeholder() {
  return (
    <div
      className={clsx(
        'bg-violet-500 h-[2px] absolute left-0 top-0 right-0 translate-y-[-50%]',
      )}
    />
  )
}
