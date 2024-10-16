import React, { useRef, useEffect, useState } from 'react';
import '../../Stylesheets/Dijkstra.module.css' // Ensure you have your styles imported

const DijkstraVisualization = () => {
    const canvasRef = useRef(null);
    const [resetVisible, setResetVisible] = useState(false);
    const [visualizeDisabled, setVisualizeDisabled] = useState(false);
    const ctxRef = useRef(null);

    const graph = {
        a: { b: 22, d: 8 },
        b: { a: 22, c: 20, e: 2 },
        c: { b: 20, d: 10, e: 4, f: 7 },
        d: { a: 8, c: 10, f: 6 },
        e: { b: 2, c: 4, z: 4 },
        f: { c: 7, d: 6, z: 9 },
        z: { e: 4, f: 9 },
    };

    const nodePositions = {
        a: { x: 50, y: 200 },
        b: { x: 150, y: 100 },
        c: { x: 300, y: 200 },
        d: { x: 150, y: 300 },
        e: { x: 450, y: 100 },
        f: { x: 450, y: 300 },
        z: { x: 550, y: 200 },
    };

    let visitedNodes = new Set();
    let visitedEdges = new Set();
    let finalPath = [];

    useEffect(() => {
        ctxRef.current = canvasRef.current.getContext('2d');
        drawGraph();
    }, []);

    const drawGraph = () => {
        const ctx = ctxRef.current;
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        for (const [node, neighbors] of Object.entries(graph)) {
            for (const [neighbor, weight] of Object.entries(neighbors)) {
                drawEdge(node, neighbor, weight);
            }
        }

        for (const [node, position] of Object.entries(nodePositions)) {
            drawNode(node, position);
        }
    };

    const drawNode = (node, position) => {
        const ctx = ctxRef.current;
        ctx.beginPath();
        ctx.arc(position.x, position.y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = finalPath.includes(node) ? 'green' : 'white';
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '16px Arial';
        ctx.fillText(node, position.x, position.y);
    };

    const drawEdge = (node1, node2, weight) => {
        const ctx = ctxRef.current;
        const pos1 = nodePositions[node1];
        const pos2 = nodePositions[node2];
        ctx.beginPath();
        ctx.moveTo(pos1.x, pos1.y);
        ctx.lineTo(pos2.x, pos2.y);

        if (isEdgeInFinalPath(node1, node2)) {
            ctx.strokeStyle = 'blue';
            ctx.lineWidth = 3;
        } else if (visitedEdges.has(`${node1}-${node2}`) || visitedEdges.has(`${node2}-${node1}`)) {
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 2;
        } else {
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
        }

        ctx.stroke();
        ctx.lineWidth = 1;

        const midX = (pos1.x + pos2.x) / 2;
        const midY = (pos1.y + pos2.y) / 2;
        ctx.fillStyle = 'black';
        ctx.font = '14px Arial';
        ctx.fillText(weight.toString(), midX, midY);
    };

    const isEdgeInFinalPath = (node1, node2) => {
        for (let i = 0; i < finalPath.length - 1; i++) {
            if (
                (finalPath[i] === node1 && finalPath[i + 1] === node2) ||
                (finalPath[i] === node2 && finalPath[i + 1] === node1)
            ) {
                return true;
            }
        }
        return false;
    };

    const dijkstra = (start, end) => {
        const distances = {};
        const previous = {};
        const unvisited = new Set(Object.keys(graph));

        for (const node of unvisited) {
            distances[node] = Infinity;
        }
        distances[start] = 0;
        visitedNodes.add(start);

        const getMinDistanceNode = () => {
            return [...unvisited].reduce((min, node) =>
                distances[node] < distances[min] ? node : min
            );
        };

        const step = () => {
            if (unvisited.size === 0) {
                finishVisualization(previous, start, end);
                return;
            }

            const current = getMinDistanceNode();
            unvisited.delete(current);
            visitedNodes.add(current);

            if (current === end) {
                finishVisualization(previous, start, end);
                return;
            }

            for (const [neighbor, weight] of Object.entries(graph[current])) {
                if (unvisited.has(neighbor)) {
                    const alt = distances[current] + weight;
                    if (alt < distances[neighbor]) {
                        distances[neighbor] = alt;
                        previous[neighbor] = current;
                        visitedEdges.add(`${current}-${neighbor}`);
                    }
                }
            }

            drawGraph();
            setTimeout(step, 1000);
        };

        step();
    };

    const finishVisualization = (previous, start, end) => {
        console.log('Visualization complete');
        finalPath = getPath(previous, start, end);
        console.log('Shortest path:', finalPath);
        drawGraph(); // Redraw to show the final path
        setResetVisible(true);
        setVisualizeDisabled(true);
    };

    const getPath = (previous, start, end) => {
        const path = [];
        let current = end;
        while (current !== undefined && current !== start) {
            path.unshift(current);
            current = previous[current];
        }
        if (current === undefined) {
            console.error('No path found');
            return [];
        }
        path.unshift(start);
        return path;
    };

    const visualizeAlgorithm = () => {
        visitedNodes.clear();
        visitedEdges.clear();
        finalPath = [];
        dijkstra('a', 'z');
    };

    const reset = () => {
        visitedNodes.clear();
        visitedEdges.clear();
        finalPath = [];
        drawGraph();
        setResetVisible(false);
        setVisualizeDisabled(false);
    };

    return (
        <div>
            <h1>Dijkstra's Algorithm Visualization</h1>
            <section id="graph-container">
                <h2>Graph</h2>
                <canvas ref={canvasRef} width="600" height="400" style={{ border: '1px solid black' }}></canvas>
            </section>

            <button id="visualizeBtn" onClick={visualizeAlgorithm} disabled={visualizeDisabled}>
                Visualize Algorithm
            </button>

            {resetVisible && (
                <button id="resetBtn" onClick={reset}>
                    Reset
                </button>
            )}
        </div>
    );
};

export default DijkstraVisualization;
