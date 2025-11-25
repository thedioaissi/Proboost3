import { Loader2Icon } from 'lucide-react'

import { cn } from '@/lib/utils'

// Spinner affiche l'icône Loader2 de Lucide avec une animation tournante.
function Spinner({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Loader2Icon>) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  )
}

export { Spinner }
