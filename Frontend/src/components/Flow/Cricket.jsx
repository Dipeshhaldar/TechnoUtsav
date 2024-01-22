import { useCallback } from 'react';
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 100, y: 50 }, data: { label: 'Team 1' }, isConnectable: false },
  { id: '2', position: { x: 100, y: 150 }, data: { label: 'Team 2' }, isConnectable: false },
  { id: '3', position: { x: 100, y: 250 }, data: { label: 'Team 3' }, isConnectable: false },
  { id: '4', position: { x: 100, y: 350 }, data: { label: 'Team 4' }, isConnectable: false },
  { id: '5', position: { x: 300, y: 50 }, data: { label: 'Team 5' }, isConnectable: false },
  { id: '6', position: { x: 300, y: 150 }, data: { label: 'Team 6' }, isConnectable: false },
  { id: '7', position: { x: 300, y: 250 }, data: { label: 'Team 7' }, isConnectable: false },
  { id: '8', position: { x: 300, y: 350 }, data: { label: 'Team 8' }, isConnectable: false },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-4', source: '3', target: '4' },
  { id: 'e3-6', source: '5', target: '6' },
  { id: 'e4-8', source: '7', target: '8' },
];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        elementsSelectable={false}
        elementsRemovable={false}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default Flow;
