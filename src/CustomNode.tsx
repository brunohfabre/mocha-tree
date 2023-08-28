import clsx from 'clsx'

import { NodeModel } from '@minoru/react-dnd-treeview'
import { CaretRight } from '@phosphor-icons/react'

import { CustomData } from './App'

interface CustomNodeProps {
  node: NodeModel<CustomData>
  isOpen: boolean
  onToggle: (id: NodeModel['id']) => void
}

export function CustomNode({ node, isOpen, onToggle }: CustomNodeProps) {
  function handleToggle(e: MouseEvent) {
    e.stopPropagation()

    onToggle(node.id)
  }

  return (
    <div
      className="flex-1 h-8 px-2 flex items-center gap-2 cursor-pointer hover:bg-zinc-200"
      onClick={(event: any) =>
        node.droppable ? handleToggle(event) : undefined
      }
    >
      {node.droppable && (
        <CaretRight
          size={12}
          weight="bold"
          className={isOpen ? 'rotate-90' : ''}
        />
      )}

      {node.data?.method && (
        <span
          className={clsx(
            'ml-1 w-8 text-[10px] font-bold leading-none',
            node.data?.method === 'GET' && 'text-blue-500',
            node.data?.method === 'PATCH' && 'text-amber-500',
          )}
        >
          {node.data?.method}
        </span>
      )}

      <span className="text-sm">{node.text}</span>
    </div>
  )
}
