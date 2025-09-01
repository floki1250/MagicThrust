<template>
    <div
        class="shadow-xl border-1 border-base-300 py-2 px-4 rounded-lg w-full h-full bg-base-100/50 dark:bg-black/10 backdrop-blur-xl  ">
        <button @click="refreshDiagram"
            class="flex justify-start hover:shadow-lg w-fit rounded-full bg-base-100 dark:bg-gray-800  font-semibold text-base-content hover:text-blue-500 border-2 border-base-200  px-4 py-2  whitespace-nowrap transition-all duration-500 ease-in-out">
            <div class="flex gap-2 justify-center items-center">
                <Icon name="i-heroicons-arrow-path-solid" class="text-xl  pt-4" />
                <span>Refresh</span>
            </div>
        </button>

        <div ref="diagramDiv" class="flex justify-center content-center w-full h-96 bg-transparent"></div>
    </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import * as go from "gojs";

// Props
const props = defineProps({
    jsonData: {
        type: Object,
        required: true,
    },
    darkMode: {
        type: Boolean,
        default: false,
    },
});

// Refs
const diagramDiv = ref(null);
let diagram = null;

// Watch for changes to jsonData or darkMode and refresh the diagram
watch([() => props.jsonData, () => props.darkMode], () => {
    refreshDiagram();
});

// Create Diagram
const createDiagram = () => {
    const $ = go.GraphObject.make;

    diagram = $(go.Diagram, diagramDiv.value, {
        layout: $(go.TreeLayout, { angle: 90, layerSpacing: 40 }), // Vertical layout
        "undoManager.isEnabled": true, // Enable undo/redo
        //autoScale: go.Diagram.Uniform, // Automatically scale the diagram to fit
        allowZoom: true, // Enable zoom
        allowMove: true, // Enable panning/moving
        allowHorizontalScroll: true, // Allow scrolling horizontally
        allowVerticalScroll: true // Allow scrolling vertically
    });

    // Define node template with custom key-value style
    diagram.nodeTemplate = $(
        go.Node,
        "Auto",
        $(
            go.Shape,
            "RoundedRectangle",
            {
                fill: props.darkMode ? "#333" : "white", // Background based on dark mode
                stroke: "whitesmoke", // Whitesmoke border
                strokeWidth: 2,
            }
        ),
        $(
            go.Panel,
            "Vertical",
            { margin: 10, alignment: go.Spot.Left }, // Align text to the left
            $(
                go.Panel,
                "Table",
                { defaultAlignment: go.Spot.Left }, // Align all text to the left
                $(go.RowColumnDefinition, { column: 0, width: 80 }), // Column for keys (orange)
                $(go.RowColumnDefinition, { column: 1, width: 200 }), // Column for values

                // Create key-value pairs for each property
                new go.Binding("itemArray", "properties"),
                {
                    itemTemplate: $(
                        go.Panel,
                        "TableRow",
                        $(go.TextBlock, { column: 0, stroke: "#3730a3 ", font: "bold 12px sans-serif" }, new go.Binding("text", "key")),
                        $(go.TextBlock, { column: 1, stroke: props.darkMode ? "#fff" : "#1f2937  " }, new go.Binding("text", "value"))
                    )
                }
            )
        )
    );

    // Define root node template
    diagram.nodeTemplateMap.add("Root",
        $(
            go.Node,
            "Auto",
            $(
                go.Shape,
                "RoundedRectangle",
                {
                    fill: props.darkMode ? "#555" : "#f5f5f5", // Background for root node
                    stroke: "whitesmoke",
                    strokeWidth: 2,
                }
            ),
            $(
                go.TextBlock,
                { margin: 10, font: "bold 14px sans-serif", stroke: props.darkMode ? "white" : "black", alignment: go.Spot.Left }, // Align text left
                new go.Binding("text", "displayText")
            )
        )
    );

    // Set link (arrow) styling
    diagram.linkTemplate = $(
        go.Link,
        { routing: go.Link.Orthogonal, corner: 5 }, // Arrow appearance
        $(go.Shape, { strokeWidth: 2, stroke: "#6b7280 " }), // Blue arrow
        $(go.Shape, { toArrow: "Standard", fill: "#6b7280 ", stroke: null }) // Arrowhead in blue
    );

    updateDiagramModel();
};

// Refresh diagram when data or mode changes
const refreshDiagram = () => {
    if (diagram) {
        diagram.clear();
        updateDiagramModel();
    }
};

// Build data model for the diagram
const updateDiagramModel = () => {
    const nodeDataArray = [];
    const linkDataArray = [];

    // Check if jsonData has a 'jsonData' key, or treat it as an array
    const dataArray = props.jsonData.jsonData || props.jsonData;

    if (!Array.isArray(dataArray)) {
        console.error("Provided data is not an array or does not contain a 'jsonData' key.");
        return;
    }

    const rootKey = "jsonRoot";
    const rootNode = {
        key: rootKey,
        displayText: `Data (${dataArray.length})`,
        category: "Root", // Specify as root node
    };
    nodeDataArray.push(rootNode);

    dataArray.forEach((item, index) => {
        const uniqueKey = `data_${index}`;
        const properties = Object.entries(item).map(([key, value]) => ({
            key: key,
            value: JSON.stringify(value),
        }));

        const node = {
            key: uniqueKey,
            properties: properties, // Bind properties to the node template
        };

        nodeDataArray.push(node);
        linkDataArray.push({ from: rootKey, to: uniqueKey });
    });

    diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
};

// On component mount
onMounted(() => {
    createDiagram();
});
</script>
