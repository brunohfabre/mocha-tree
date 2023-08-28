import { DragLayerMonitorProps } from '@minoru/react-dnd-treeview'

import { CustomData } from './App'

interface CustomDragPreviewProps {
  monitorProps: DragLayerMonitorProps<CustomData>
}

export function CustomDragPreview({ monitorProps }: CustomDragPreviewProps) {
  const { item } = monitorProps

  return (
    <div>
      <span>{item.text}</span>
    </div>
  )
}
