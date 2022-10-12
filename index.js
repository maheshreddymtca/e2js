ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo, ej.diagrams.LineRouting, ej.diagrams.ConnectorBridging);

function getNodePorts(obj) {
    var ports = [
        { id: 'port1', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 1, y: 0.9 } },
        { id: 'port2', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 0, y: 0.1 } },
        { id: 'port3', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 1, y: 0.9 } },
        { id: 'port4', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 0, y: 0.1 } },
        { id: 'port5', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 0.3, y: 1 } },
        { id: 'port6', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 0.5, y: 0 } },
        { id: 'port7', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 0.8, y: 1 } },
        { id: 'port8', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 0, y: 0.1 } },
        { id: 'port9', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 0.3, y: 1 } },
        { id: 'port10', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 0.5, y: 0 } },
        { id: 'port11', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 0.8, y: 1 } },
        { id: 'port12', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 0.5, y: 0 } },
        { id: 'port13', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 0.3, y: 1 } },
        { id: 'port14', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 0, y: 0.1 } },
        { id: 'port15', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 0.8, y: 1 } },
        { id: 'port16', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 0, y: 0.5 } },
        { id: 'port17', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 1, y: 0.9 } },
        { id: 'port18', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 0, y: 0.1 } },
        { id: 'port19', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 0.3, y: 1 } },
        { id: 'port20', shape: 'Circle', style: {strokeColor: '',fill: ''},  offset: { x: 1, y: 0.5 } }
    ];
    return ports;
}


var bounds = document.getElementById('element').getBoundingClientRect();
var centerX = bounds.width / 2;
//Initializes the nodes for the diagram


var data = [
    { 
		id: 'Start',
		shape: {
			type: 'HTML',
			content: '<div style="background:#f8e991;" class="box"><span class="start">Start</span><div class="heading hbg1"><span class="e-icons e-settings"></span> <span>CreditRequest</span></div><ul class="contentList"><li><span class="e-icons e-file"></span> Task Outcomes</div></li></ul><div class="btnGroup"><button type="button" class="btn">Submit</button></div></div>'
        }
	},
	{ 
		id: 'creatCustomer', 
		shape: {
			type: 'HTML',
			content: '<div style="background:#96e7f7;" class="box"><div class="heading hbg2"><span class="e-icons e-settings"></span> <span class="title">CreateCustomer</span></div><ul class="contentList"><li><span class="e-icons e-file"></span> CustomerDetailsParam<p style="text-align:right" id="box"><span class="tooltip">ViewAll</span></p><div class="viewAllTool tooltip-content"><ul><li><b>Task Name</b><span>CustomerCreated</span></li><li><b>Expression</b><span>e.CustomerID!=null && </br>e.CustomerStatus==CREATED</span></li><li><b>Invode</b><span>AutoCreditCheck</span></li></ul></div></li><li><span class="e-icons e-file"></span> Task Outcomes</li></ul><div class="btnGroup"><button type="button" class="btn">Customer Created</button></div></div>'
        }
	},
	{ 
		id: 'autoCreditCheck', 
		shape: {
			type: 'HTML',
			content: '<div style="background:#96f7c5;" class="box"><div class="heading hbg3"><span class="e-icons e-settings"></span> <span> Auto Credit Check</span></div><ul class="contentList"><li><span class="e-icons e-file"></span> 1: Amount<p style="text-align:right" id="box" class="tooltip"><span class="tooltip">ViewAll</span></p><div class="viewAllTool tooltip-content"><ul><li><b>Task Name</b><span>CustomerCreated</span></li><li><b>Expression</b><span>e.CustomerID!=null && </br>e.CustomerStatus==CREATED</span></li><li><b>Invode</b><span>AutoCreditCheck</span></li></ul></div></li><li><span class="e-icons e-file"></span> Task Outcomes</li></ul><div class="btnGroup"><button type="button" class="btn">Manual Credit Check</button><button type="button" class="btn">Approve</button></div></div>'
        }
	},
	{ 
		id: 'autoDecision', 
		shape: {
			type: 'HTML',
			content: '<div style="background:#f6b79c;" class="box"><div class="heading hbg4"><span class="e-icons e-settings"></span> <span> Auto Decision</span></div><ul class="contentList"><li><span class="e-icons e-file"></span> 1: Amount<p style="text-align:right" id="box" class="tooltip"><span class="tooltip">ViewAll</span></p><div class="viewAllTool tooltip-content"><ul><li><b>Task Name</b><span>CustomerCreated</span></li><li><b>Expression</b><span>e.CustomerID!=null && </br>e.CustomerStatus==CREATED</span></li><li><b>Invode</b><span>AutoCreditCheck</span></li></ul></div></li><li><span class="e-icons e-file"></span> Task Outcomes</li></ul><div class="btnGroup"><button type="button" class="btn">Approve</button><button type="button" class="btn btn-danger">Decline</button></div></div>'
        }
	} ,
	{ 
		id: 'manualCreditAnalysis',
		shape: {
			type: 'HTML',
			content: '<div style="background:#efbef4;" class="box"><div class="heading hbg5"><span class="e-icons e-settings"></span> <span>Manual Credit Analysis</span></div><ul class="contentList"><li><span class="e-icons e-file"></span>Rile 1: ManualCreditCheck<p style="text-align:right" id="box" class="tooltip"><span class="tooltip">ViewAll</span></p><div class="viewAllTool tooltip-content"><ul><li><b>Task Name</b><span>CustomerCreated</span></li><li><b>Expression</b><span>e.CustomerID!=null && </br>e.CustomerStatus==CREATED</span></li><li><b>Invode</b><span>AutoCreditCheck</span></li></ul></div></li><li><span class="e-icons e-file"></span> Task Outcomes</li></ul><div class="btnGroup"><button type="button" class="btn">Approve</button><button type="button" class="btn btn-danger">Decline</button></div></div>'
        }
	},
	{ 
		id: 'createAsset',
		shape: {
			shape: 'Process',
			type: 'HTML',
			content: '<div style="background:#f6f4ae;" class="box"><div class="heading hbg6"><span class="e-icons e-settings"></span> <span>CreateAsset</span></div><ul class="contentList"><li><span class="e-icons e-file"></span>1: AssetDetails<p style="text-align:right" id="box" class="tooltip"><span class="tooltip">ViewAll</span></p><div class="viewAllTool tooltip-content"><ul><li><b>Task Name</b><span>CustomerCreated</span></li><li><b>Expression</b><span>e.CustomerID!=null && </br>e.CustomerStatus==CREATED</span></li><li><b>Invode</b><span>AutoCreditCheck</span></li></ul></div></li><li><span class="e-icons e-file"></span> Task Outcomes</li></ul><div class="btnGroup"><button type="button" class="btn">AssetCreated</button></div></div>'
        }
	},
	{ 
		id: 'createLoc',
		shape: {
			shape: 'Process',
			type: 'HTML',
			content: '<div style="background:#f7b5c9;" class="box"><div class="heading hbg7"><span class="e-icons e-settings"></span> <span>CreateLOC</span></div><ul class="contentList"><li><span class="e-icons e-file"></span>1: LineOfCreditDetails<p style="text-align:right" id="box" class="tooltip"><span class="tooltip">ViewAll</span></p><div class="viewAllTool tooltip-content"><ul><li><b>Task Name</b><span>CustomerCreated</span></li><li><b>Expression</b><span>e.CustomerID!=null && </br>e.CustomerStatus==CREATED</span></li><li><b>Invode</b><span>AutoCreditCheck</span></li></ul></div></li><li><span class="e-icons e-file"></span> Task Outcomes</li></ul><div class="btnGroup"></div></div>'
        }
	},
	{ 
		id: 'endProcess',
		width: 100,
		height: 100,
		shape: {
			type: 'HTML',
			content: '<div style="height: 100px;width: 100px;border: 2px solid red;border-radius: 100%;background-color: #fa0b0b;display: flex;justify-content: center;align-items: center;color: #fff;">End Process</div>'
        }
	}  
]

console.log("Actual Data --> " + data);

var x = -450;
var y = 250;
const formattedData = data.map((item, index) => {
	const data = {};
	data.id = item.id;
	var currentIndex = index;
	if (currentIndex % 4 != 0 || currentIndex == 0) {
		data.offsetX = (centerX - 50) + x;
		data.offsetY = y;
		x = x + 300;
	} else {
		x = -450;
		y = y + 300;
		data.offsetX = (centerX - 50) + x;
		x = x + 300;
		data.offsetY = y;
	}
	data.shape = item.shape;
	return data;
});
console.log("Formatted Data --> " + formattedData);


var connectors = [ 
{ id: "connector1", type: 'Orthogonal', sourceID: 'Start', targetID: 'creatCustomer', sourcePortID: 'port1', targetPortID: 'port2' }, 
{ id: "connector2", type: 'Orthogonal', sourceID: 'creatCustomer', targetID: 'autoCreditCheck', sourcePortID: 'port3', targetPortID: 'port4' }, 
{ id: "connector3", type: 'Orthogonal', sourceID: 'autoCreditCheck', targetID: 'manualCreditAnalysis', sourcePortID: 'port5', targetPortID: 'port6' }, 
{ id: "connector4", type: 'Orthogonal', sourceID: 'autoCreditCheck', targetID: 'autoDecision', sourcePortID: 'port7', targetPortID: 'port8' }, 
{ id: "connector5", type: 'Orthogonal', sourceID: 'autoDecision', targetID: 'createAsset', sourcePortID: 'port9', targetPortID: 'port10', segments: [{ type: 'Orthogonal', direction: 'Bottom', length: 40 }], } , 
{ id: "connector6", type: 'Orthogonal', sourceID: 'autoDecision', targetID: 'endProcess', sourcePortID: 'port11', targetPortID: 'port12', segments: [{ type: 'Orthogonal', direction: 'Bottom', length: 60 }], } , 
{ id: "connector7", type: 'Orthogonal', sourceID: 'manualCreditAnalysis', targetID: 'createAsset', sourcePortID: 'port13', targetPortID: 'port14', segments: [{ type: 'Orthogonal', direction: 'Bottom', length: 60 }], }, 
{ id: "connector8", type: 'Orthogonal', sourceID: 'manualCreditAnalysis', targetID: 'endProcess', sourcePortID: 'port15', targetPortID: 'port16' }, 
{ id: "connector9", type: 'Orthogonal', sourceID: 'createAsset', targetID: 'createLoc', sourcePortID: 'port17', targetPortID: 'port18' }, 
{ id: "connector10", type: 'Orthogonal', sourceID: 'createLoc', targetID: 'endProcess', sourcePortID: 'port19', targetPortID: 'port20' } 
]

/* var tooltip = new ej.popups.Tooltip({
    opensOn: 'Custom',
    content: 'Tooltip from custom mode'
});
tooltip.appendTo('#box');
document.getElementById('box').addEventListener("dblclick", function () {
    if (this.getAttribute("data-tooltip-id")) {
        tooltip.close();
    }
    else {
        tooltip.open(this);
    }
});
 */
	var interval = [1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75];
    var gridlines = { lineColor: '#e0e0e0', lineIntervals: interval };
    //Initializes diagram control
	
	var diagram = new ej.diagrams.Diagram({
		width: '100%', 
		height: '1000px', 
		nodes: formattedData, 
		connectors: connectors,
		constraints: ej.diagrams.DiagramConstraints.Default | (ej.diagrams.DiagramConstraints.Bridging | ej.diagrams.DiagramConstraints.LineRouting),
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
		snapSettings: { horizontalGridlines: gridlines, verticalGridlines: gridlines },
		layout: {
			//this prevents connector segments overlapping
			enableRouting: true,
			horizontalSpacing: 25,
			verticalSpacing: 30,
			horizontalAlignment: 'Left',
			verticalAlignment: 'Top'
		},
			//Sets the default values of a node
			getNodeDefaults: function (node) {
				// Disable dragging for node 
				node.constraints = ej.diagrams.NodeConstraints.Default &~ej.diagrams.NodeConstraints.Drag; 
				var obj = {};
				if (obj.width === undefined) {
					obj.width = 200;
					obj.height = 200;
				} else {
					var ratio = 100 / obj.width;
					obj.width = 100;
					obj.height *= ratio;
				}
				obj.style = { fill: 'red', strokeColor: 'red' };
				obj.annotations = [{ style: { color: 'green', fill: 'yellow' } }];
				obj.ports = getNodePorts(node);
				return obj;
			},
			//Sets the default values of a Connector.
			getConnectorDefaults: function (obj) {
				// Disable dragging for connector
				obj.constraints = ej.diagrams.ConnectorConstraints.Default &~(ej.diagrams.ConnectorConstraints.DragSourceEnd | ej.diagrams.ConnectorConstraints.DragTargetEnd);
				if (obj.id.indexOf('connector') !== -1) {
					obj.type = 'Orthogonal';
					obj.targetDecorator = { shape: 'Arrow', width: 10, height: 10 , style: {strokeColor: 'blue',fill: 'blue'}};
				}
			},
			//enables the bridging constraints for the connector
			constraints: ej.diagrams.DiagramConstraints.Default | ej.diagrams.DiagramConstraints.Bridging,
			created: onCreated,
		
		}, '#element');
		diagram.align('Left',diagram.selectedItems.nodes, 'Selector');
 function onCreated() {
        //diagram.fitToPage();
    }
