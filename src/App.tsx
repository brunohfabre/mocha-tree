import { useState } from 'react'
import { DndProvider } from 'react-dnd'

import {
  MultiBackend,
  getBackendOptions,
  Tree,
  NodeModel,
} from '@minoru/react-dnd-treeview'
import { CaretUpDown } from '@phosphor-icons/react'

import { CustomDragPreview } from './CustomDragPreview'
import { CustomNode } from './CustomNode'
import sampleData from './data.json'
import { Placeholder } from './Placeholder'

export type CustomData = {
  method: string
}

export function App() {
  const [treeData, setTreeData] = useState<NodeModel<CustomData>[]>(sampleData)

  function handleDrop(newTree: NodeModel<CustomData>[]) {
    setTreeData(newTree)
  }

  return (
    <div className="h-screen flex">
      <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <div className="bg-zinc-100 w-60 flex flex-col">
          <div className="bg-red-200 h-10 flex items-center px-4">
            <span className="text-sm">Collection name</span>
          </div>

          <div className="flex-1 flex flex-col py-2 pr-2">
            <Tree
              tree={treeData}
              rootId={0}
              render={(node, { isOpen, onToggle }) => (
                <CustomNode node={node} isOpen={isOpen} onToggle={onToggle} />
              )}
              classes={{
                container: 'flex-1 pl-2',
                draggingSource: 'opacity-30',
                placeholder: 'relative',
              }}
              dragPreviewRender={(monitorProps) => (
                <CustomDragPreview monitorProps={monitorProps} />
              )}
              onDrop={handleDrop}
              sort={false}
              insertDroppableFirst={false}
              canDrop={(_, { dragSource, dropTargetId }) => {
                if (dragSource?.parent === dropTargetId) {
                  return true
                }
              }}
              dropTargetOffset={10}
              placeholderRender={() => <Placeholder />}
            />
          </div>

          <div className="bg-blue-200 h-10 flex items-center justify-between pl-4 pr-3 mt-auto">
            <span className="text-sm">Environment</span>

            <CaretUpDown weight="bold" size={14} />
          </div>
        </div>
      </DndProvider>

      <main className="p-4">
        <span>main</span>
      </main>
    </div>
  )
}
