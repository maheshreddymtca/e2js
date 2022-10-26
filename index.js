
function prepareDesigner() {

class TaskOutCome{
  constructor(OutcomeName, OutcomeExpression, NextTask){
    this.OutcomeName = OutcomeName;
    this.OutcomeExpression = OutcomeExpression;
    this.NextTask = NextTask;
  }
}


class TaskNode {
  /*  constructor(TaskName, TaskType, Description, nul)
    {
        this.TaskName = TaskName;
        this.TaskType = TaskType;
        this.Description = Description
    } */
    
	constructor(TaskName, TaskType, Description)
    {
        this.TaskName = TaskName;
        this.TaskType = TaskType;
        this.Description = Description;
		//this.TaskOutCome = TaskOutCome;
    }
	
    setTaskOutComes(TaskOutcomes){
        this.TaskOutcomes = TaskOutcomes;
    }
    setTaskData(TaskData){
    }
    setEligibilityRules(setEligibilityRules){
    }
    prepareBaseHTMLContent(content){
        content = content.children[0].outerHTML.replace("${TaskName}", this.TaskName).replace("${TaskOutcomes}", this.TaskOutCome);
        return content;
    }
}

class HumanTaskNode extends TaskNode {
    TEMPLATE_ID = "#human-task-template";
    constructor(TaskName, TaskType, Description){
        super(TaskName, TaskType, Description);    
    }
    setUIForm(uiform){
        this.UIForm = uiform;
    }
    getHTMLContent(){
        var content = super.prepareBaseHTMLContent($(this.TEMPLATE_ID)[0].content);
        // ... Do other task specific manipulation 
        //console.log(content);
        return content;
    }
}

class ParallelTaskNode extends TaskNode {
    TEMPLATE_ID = "#parall-task-template";

    constructor(TaskName, TaskType, Description){
        super(TaskName, TaskType, Description);
        
    }
    
    setUIForm(uiform){
        this.UIForm = uiform;
    }

    getHTMLContent(){
        var content = super.prepareBaseHTMLContent($(this.TEMPLATE_ID)[0].content);
        // ... Do other task specific manipulation 
        //console.log(content);
        return content;
    }
}


class TransactionTaskNode extends TaskNode {
    TEMPLATE_ID = "#transaction-task-template";

    constructor(TaskName, TaskType, Description)
    {
        super(TaskName, TaskType, Description);      
    }
    getHTMLContent() {
        var content = super.prepareBaseHTMLContent($(this.TEMPLATE_ID)[0].content);
        // .. DO Task specific manipulation
        //console.log(content);
        return content;
    }
}

class DecisionTaskNode extends TaskNode {
    TEMPLATE_ID = "#decisionTaskNode-task-template";
    constructor(TaskName, TaskType, Description)
    {
        super(TaskName, TaskType, Description);   
    }
    getHTMLContent() {
        var content = super.prepareBaseHTMLContent($(this.TEMPLATE_ID)[0].content);
        // .. DO Task specific manipulation
        //console.log(content);
        return content;
    }
}

function getTasks() {
	var bounds = document.getElementById('diagram').getBoundingClientRect();
    var centerX = bounds.width / 2;
    //Initializes the nodes for the diagram
    var tasks =  [] ;
	var results = {
		"WorkflowDefintion" : 
			[
				{
					"StartTask" : true,
					"TaskInfo":{
						"TaskName": "DataEntry",
						"TaskType" : "HumanTask",
						"TaskDescription" : "....",
						"AdditionalInfo": {
							"UIForm" : "" ,
							"TransactionName" : "",
							"EntityName" : " ",
							"EntityActionName" : "",
							"ComponentName" : " " ,
							"DecisionTableName" : " "
						}
					},
					"TaskEligibilityRules" : [
						{
							"Name": "xxxx",
							"Expresison": "...."
						}
					],
				   "Dependencies" :[
					  "task1", "task2" ],
				   "EntityRules" :[
					  {
						"FieldInputRules" : [ "Rule1","Rule2" ]
					  }
					],
					"TaskOutcomes" : [
					   {
						 "ActionName" : "Approve",
						 "NextTask" : "......" ,
						 "Expression" : ".....",
						 "MarkAsComplete" : true,
						 "TerminateProcess" : true
					   }
					]
				},
				{
					"StartTask" : true,
					"TaskInfo":{
						"TaskName": "SubmitForFinalApprovalParallel",
						"TaskType" : "ParallelTask",
						"TaskDescription" : "Submit For Final Approval",
						"AdditionalInfo": {
							"UIForm" : "" ,
							"TransactionName" : "",
							"EntityName" : " ",
							"EntityActionName" : "",
							"ComponentName" : " " ,
							"DecisionTableName" : " "
						}
					},
					"TaskEligibilityRules" : [
						{
							"Name": "xxxx",
							"Expresison": "...."
						}
					],
				   "Dependencies" :[
					  "task1", "task2" ],
				   "EntityRules" :[
					  {
						"FieldInputRules" : [ "Rule1","Rule2" ]
					  }
					],
					"TaskOutcomes" : [
					   {
						 "ActionName" : "Approve",
						 "NextTask" : "......" ,
						 "Expression" : ".....",
						 "MarkAsComplete" : true,
						 "TerminateProcess" : true
					   }
					]
				},
				{
					"StartTask" : true,
					"TaskInfo":{
						"TaskName": "GenerateDocumentDescisionFlow",
						"TaskType" : "DecisionTask",
						"TaskDescription" : "Generate Document Descision",
						"AdditionalInfo": {
							"UIForm" : "" ,
							"TransactionName" : "",
							"EntityName" : " ",
							"EntityActionName" : "",
							"ComponentName" : " " ,
							"DecisionTableName" : " "
						}
					},
					"TaskEligibilityRules" : [
						{
							"Name": "xxxx",
							"Expresison": "...."
						}
					],
				   "Dependencies" :[
					  "task1", "task2" ],
				   "EntityRules" :[
					  {
						"FieldInputRules" : [ "Rule1","Rule2" ]
					  }
					],
					"TaskOutcomes" : [
					   {
						 "ActionName" : "Approve",
						 "NextTask" : "......" ,
						 "Expression" : ".....",
						 "MarkAsComplete" : true,
						 "TerminateProcess" : true
					   }
					]
				}
			]
		}
	console.log('results',results.TaskConfigDetails)
	results.WorkflowDefintion.forEach((item, i) => {
		console.log('>>>',item);
		if(item.TaskType == "HumanTask"){
			//var TaskOutCome = new TaskOutCome();
			tasks.push(new HumanTaskNode(item.TaskInfo.TaskName, item.TaskInfo.TaskType, item.TaskInfo.TaskDescription)); 
			
		}else if(item.TaskType == "ParallelTask"){
			tasks.push(new ParallelTaskNode(item.TaskName, item.TaskType, item.Description, null)); 
		}else if(item.TaskType == "DecisionTask"){
			tasks.push(new DecisionTaskNode(item.TaskName, item.TaskType, item.Description, null)); 
		}
		
	})
    
    
    
    //tasks.push(new DecisionTaskNode("Create DecisionTask", "Some Description")); 
	 
	var x = -450;
	var y = 200;
	const allTaskdata = {};
	const Data = tasks.map((tasks, index) => {
		const data = [];
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
		data.TEMPLATE_ID = tasks.TEMPLATE_ID;
		data.Description = tasks.Description;
		data.TaskName = tasks.TaskName;
		data.TaskType = tasks.TaskType;
		const shape = {};
		shape.type= 'HTML';
		shape.content = tasks.getHTMLContent();
		//data.outcomes = taskOutComesArr;
		data.shape = shape;
		//nodes.node = data;
		return data;
	});
	allTaskdata.nodes = Data;
	return allTaskdata;    
}
var newData = getTasks();
console.log('newData',newData)

/* 
=============================================

class WorkflowTask {
    constructor(taskname, tasktype, taskdes, outcomes) {
        this.taskname = taskname;
        this.tasktype = tasktype;
        this.taskdesc = taskdes;
        this.outcomes = outcomes;
    }
   
}
function getworkflowtask() {
    var workflowtask = [];
    var creditRequest = new WorkflowTask('Credit Request', 'Human_Task', 'Task_des', 'Task Outcomes');
    var createCustomer = new WorkflowTask('Create Customer', 'Transaction_Task', 'Task_des', 'Task Outcomes');
    var autoCreditCheck = new WorkflowTask('Auto Credit Check', 'Business_Task', 'Task_des', 'Task Outcomes');
	var autoDecision = new WorkflowTask('Auto Decision', 'Business_Task', 'Task_des', 'Task Outcomes');
	var manualCreditAnalysis = new WorkflowTask('Manual Credit Analysis', 'Human_Task', 'Task_des', 'Task Outcomes');
	var createAsset = new WorkflowTask('Create Asset', 'Transaction_Task', 'Task_des', 'Task Outcomes');
	var createLoc = new WorkflowTask('Create LOC', 'Transaction_Task', 'Task_des', 'Task Outcomes');
    workflowtask.push(creditRequest, createCustomer, autoCreditCheck, autoDecision, manualCreditAnalysis, createAsset, createLoc);
    return workflowtask;
}
function Createnode(data) {
    var tasknodes = [];
    var node = {};
    for (var i = 0; i < data.length; i++) {
        var contents = '';
        if (data[i].tasktype == 'Human_Task') {
            var temp, item;
            item = document.querySelector('#human-task-template').innerHTML;
			item.replace(/\n|\r/g, "");
			contents = item.replace('${TaskName}', data[i].taskname).replace('${TaskOutcomes}', data[i].outcomes);
		}
        if (data[i].tasktype == 'Transaction_Task') {
            var temp, item;
			item = document.querySelector('#transaction-task-template').innerHTML;
			item.replace(/\n|\r/g, "");
			contents = item.replace('${TaskName}', data[i].taskname).replace('${TaskOutcomes}', data[i].outcomes);
        }
        if (data[i].tasktype == 'Business_Task') {
            var temp, item;
			item = document.querySelector('#business-rule-task-template').innerHTML;
			item.replace(/\n|\r/g, "");
			contents = item.replace('${TaskName}', data[i].taskname).replace('${TaskOutcomes}', data[i].outcomes);
        }

        node = {
            id: data[i].tasktype,
			offsetX:  - 450,
            //offsetX: 150, 
            offsetY: 250,
            shape: {
                type: 'HTML',
                content: contents
            }
        }
        tasknodes.push(node);
    }
	return tasknodes;
    
} */
   /*  var data = getworkflowtask();
    var newData = Createnode(data);
    console.log(newData); */
 

    ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo, ej.diagrams.LineRouting, ej.diagrams.ConnectorBridging);

    function getNodePorts(obj) {
        var ports = [
            { id: 'port1', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 1, y: 0.9 } },
            { id: 'port2', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 0, y: 0.1 } },
            { id: 'port3', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 1, y: 0.9 } },
            { id: 'port4', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 0, y: 0.1 } },
            { id: 'port5', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 0.3, y: 1 } },
            { id: 'port6', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 0.5, y: 0 } },
            { id: 'port7', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 0.8, y: 1 } },
            { id: 'port8', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 0, y: 0.1 } },
            { id: 'port9', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 0.3, y: 1 } },
            { id: 'port10', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 0.5, y: 0 } },
            { id: 'port11', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 0.8, y: 1 } },
            { id: 'port12', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 0.5, y: 0 } },
            { id: 'port13', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 0.3, y: 1 } },
            { id: 'port14', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 0, y: 0.1 } },
            { id: 'port15', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 0.8, y: 1 } },
            { id: 'port16', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 0, y: 0.5 } },
            { id: 'port17', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 1, y: 0.9 } },
            { id: 'port18', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 0, y: 0.1 } },
            { id: 'port19', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 0.3, y: 1 } },
            { id: 'port20', shape: 'Circle', style: { strokeColor: '', fill: '' }, offset: { x: 1, y: 0.5 } }
        ];
        return ports;
    }


   

    var bounds = document.getElementById('diagram').getBoundingClientRect();
    var centerX = bounds.width / 2;
    var data = [
        {
            id: 'Start',
            offsetX: (centerX - 50) - 450,
            //offsetX: 150, 
            offsetY: 250,
            shape: {
                type: 'HTML',
                content: '<div style="background:#f8e991;" class="box"><span class="start">Start</span><div class="heading hbg1"><span class="e-icons e-settings"></span> <span>CreditRequest</span></div><ul class="contentList"><li><span class="e-icons e-file"></span> Task Outcomes</div></li></ul><div class="btnGroup"><button type="button" class="btn">Submit</button></div></div>'
            }
        },
        {
            id: 'creatCustomer',
            offsetX: (centerX - 50) - 150,
            //offsetX: 450, 
            offsetY: 250,
            shape: {
                type: 'HTML',
                content: '<div style="background:#96e7f7;" class="box"><div class="heading hbg2"><span class="e-icons e-settings"></span> <span class="title">CreateCustomer</span></div><ul class="contentList"><li><span class="e-icons e-file"></span> CustomerDetailsParam<p style="text-align:right" id="box"><span class="tooltip">ViewAll</span></p><div class="viewAllTool tooltip-content"><ul><li><b>Task Name</b><span>CustomerCreated</span></li><li><b>Expression</b><span>e.CustomerID!=null && </br>e.CustomerStatus==CREATED</span></li><li><b>Invode</b><span>AutoCreditCheck</span></li></ul></div></li><li><span class="e-icons e-file"></span> Task Outcomes</li></ul><div class="btnGroup"><button type="button" class="btn">Customer Created</button></div></div>'
            }
        },
            {
                id: 'autoCreditCheck',
                offsetX: (centerX - 50) + 150,
                //offsetX: 750, 
                offsetY: 250,
                shape: {
                    type: 'HTML',
                    content: '<div style="background:#96f7c5;" class="box"><div class="heading hbg3"><span class="e-icons e-settings"></span> <span> Auto Credit Check</span></div><ul class="contentList"><li><span class="e-icons e-file"></span> 1: Amount<p style="text-align:right" id="box" class="tooltip"><span class="tooltip">ViewAll</span></p><div class="viewAllTool tooltip-content"><ul><li><b>Task Name</b><span>CustomerCreated</span></li><li><b>Expression</b><span>e.CustomerID!=null && </br>e.CustomerStatus==CREATED</span></li><li><b>Invode</b><span>AutoCreditCheck</span></li></ul></div></li><li><span class="e-icons e-file"></span> Task Outcomes</li></ul><div class="btnGroup"><button type="button" class="btn">Manual Credit Check</button><button type="button" class="btn">Approve</button></div></div>'
                }
            },
            {
                id: 'autoDecision',
                offsetX: (centerX - 50) + 450,
                //offsetX: 1050, 
                offsetY: 250,
                shape: {
                    type: 'HTML',
                    content: '<div style="background:#f6b79c;" class="box"><div class="heading hbg4"><span class="e-icons e-settings"></span> <span> Auto Decision</span></div><ul class="contentList"><li><span class="e-icons e-file"></span> 1: Amount<p style="text-align:right" id="box" class="tooltip"><span class="tooltip">ViewAll</span></p><div class="viewAllTool tooltip-content"><ul><li><b>Task Name</b><span>CustomerCreated</span></li><li><b>Expression</b><span>e.CustomerID!=null && </br>e.CustomerStatus==CREATED</span></li><li><b>Invode</b><span>AutoCreditCheck</span></li></ul></div></li><li><span class="e-icons e-file"></span> Task Outcomes</li></ul><div class="btnGroup"><button type="button" class="btn">Approve</button><button type="button" class="btn btn-danger">Decline</button></div></div>'
                }
            },
            {
                id: 'manualCreditAnalysis',
                offsetX: (centerX - 50) + 450,
                //offsetX: 550, 
                offsetY: 550,
                shape: {
                    type: 'HTML',
                    content: '<div style="background:#efbef4;" class="box"><div class="heading hbg5"><span class="e-icons e-settings"></span> <span>Manual Credit Analysis</span></div><ul class="contentList"><li><span class="e-icons e-file"></span>Rile 1: ManualCreditCheck<p style="text-align:right" id="box" class="tooltip"><span class="tooltip">ViewAll</span></p><div class="viewAllTool tooltip-content"><ul><li><b>Task Name</b><span>CustomerCreated</span></li><li><b>Expression</b><span>e.CustomerID!=null && </br>e.CustomerStatus==CREATED</span></li><li><b>Invode</b><span>AutoCreditCheck</span></li></ul></div></li><li><span class="e-icons e-file"></span> Task Outcomes</li></ul><div class="btnGroup"><button type="button" class="btn">Approve</button><button type="button" class="btn btn-danger">Decline</button></div></div>'
                }
            },
            {
                id: 'createAsset',
                offsetX: (centerX - 50) - 150,
                //offsetX: 870, 
                offsetY: 550,
                shape: {
                    shape: 'Process',
                    type: 'HTML',
                    content: '<div style="background:#f6f4ae;" class="box"><div class="heading hbg6"><span class="e-icons e-settings"></span> <span>CreateAsset</span></div><ul class="contentList"><li><span class="e-icons e-file"></span>1: AssetDetails<p style="text-align:right" id="box" class="tooltip"><span class="tooltip">ViewAll</span></p><div class="viewAllTool tooltip-content"><ul><li><b>Task Name</b><span>CustomerCreated</span></li><li><b>Expression</b><span>e.CustomerID!=null && </br>e.CustomerStatus==CREATED</span></li><li><b>Invode</b><span>AutoCreditCheck</span></li></ul></div></li><li><span class="e-icons e-file"></span> Task Outcomes</li></ul><div class="btnGroup"><button type="button" class="btn">AssetCreated</button></div></div>'
                }
            },
            {
                id: 'createLoc',
                offsetX: (centerX - 50) + 150,
                //offsetX: 1200, 
                offsetY: 550,
                shape: {
                    shape: 'Process',
                    type: 'HTML',
                    content: '<div style="background:#f7b5c9;" class="box"><div class="heading hbg7"><span class="e-icons e-settings"></span> <span>CreateLOC</span></div><ul class="contentList"><li><span class="e-icons e-file"></span>1: LineOfCreditDetails<p style="text-align:right" id="box" class="tooltip"><span class="tooltip">ViewAll</span></p><div class="viewAllTool tooltip-content"><ul><li><b>Task Name</b><span>CustomerCreated</span></li><li><b>Expression</b><span>e.CustomerID!=null && </br>e.CustomerStatus==CREATED</span></li><li><b>Invode</b><span>AutoCreditCheck</span></li></ul></div></li><li><span class="e-icons e-file"></span> Task Outcomes</li></ul><div class="btnGroup"></div></div>'
                }
            },
            {
                id: 'createLoc1',
                offsetX: (centerX - 50) + 150,
                //offsetX: 1200, 
                offsetY: 550,
                shape: {
                    shape: 'Process',
                    type: 'HTML',
                    content: '<div style="background:#f7b5c9;" class="box"><div class="heading hbg7"><span class="e-icons e-settings"></span> <span>CreateLOC</span></div><ul class="contentList"><li><span class="e-icons e-file"></span>1: LineOfCreditDetails<p style="text-align:right" id="box" class="tooltip"><span class="tooltip">ViewAll</span></p><div class="viewAllTool tooltip-content"><ul><li><b>Task Name</b><span>CustomerCreated</span></li><li><b>Expression</b><span>e.CustomerID!=null && </br>e.CustomerStatus==CREATED</span></li><li><b>Invode</b><span>AutoCreditCheck</span></li></ul></div></li><li><span class="e-icons e-file"></span> Task Outcomes</li></ul><div class="btnGroup"></div></div>'
                }
            }
            ,
            {
                id: 'createLoc2',
                offsetX: (centerX - 50) + 150,
                //offsetX: 1200, 
                offsetY: 550,
                shape: {
                    shape: 'Process',
                    type: 'HTML',
                    content: '<div style="background:#f7b5c9;" class="box"><div class="heading hbg7"><span class="e-icons e-settings"></span> <span>CreateLOC</span></div><ul class="contentList"><li><span class="e-icons e-file"></span>1: LineOfCreditDetails<p style="text-align:right" id="box" class="tooltip"><span class="tooltip">ViewAll</span></p><div class="viewAllTool tooltip-content"><ul><li><b>Task Name</b><span>CustomerCreated</span></li><li><b>Expression</b><span>e.CustomerID!=null && </br>e.CustomerStatus==CREATED</span></li><li><b>Invode</b><span>AutoCreditCheck</span></li></ul></div></li><li><span class="e-icons e-file"></span> Task Outcomes</li></ul><div class="btnGroup"></div></div>'
                }
            },
            {
                id: 'endProcess',
                offsetX: (centerX - 50) + 300,
                //offsetX: 1020, 
                offsetY: 850,
                width: 100,
                height: 100,
                shape: {
                    type: 'HTML',
                    content: '<div style="height: 100px;width: 100px;border: 2px solid red;border-radius: 100%;background-color: #fa0b0b;display: flex;justify-content: center;align-items: center;color: #fff;">End Process</div>'
                }
            }
    ]

    var connectors = [
        { id: "connector1", type: 'Orthogonal', sourceID: 'Start', targetID: 'creatCustomer', sourcePortID: 'port1', targetPortID: 'port2' },
        { id: "connector2", type: 'Orthogonal', sourceID: 'creatCustomer', targetID: 'autoCreditCheck', sourcePortID: 'port3', targetPortID: 'port4' },
        { id: "connector3", type: 'Orthogonal', sourceID: 'autoCreditCheck', targetID: 'manualCreditAnalysis', sourcePortID: 'port5', targetPortID: 'port6' },
        { id: "connector4", type: 'Orthogonal', sourceID: 'autoCreditCheck', targetID: 'autoDecision', sourcePortID: 'port7', targetPortID: 'port8' },
        { id: "connector5", type: 'Orthogonal', sourceID: 'autoDecision', targetID: 'createAsset', sourcePortID: 'port9', targetPortID: 'port10', segments: [{ type: 'Orthogonal', direction: 'Bottom', length: 40 }], },
        { id: "connector6", type: 'Orthogonal', sourceID: 'autoDecision', targetID: 'endProcess', sourcePortID: 'port11', targetPortID: 'port12', segments: [{ type: 'Orthogonal', direction: 'Bottom', length: 60 }], },
        { id: "connector7", type: 'Orthogonal', sourceID: 'manualCreditAnalysis', targetID: 'createAsset', sourcePortID: 'port13', targetPortID: 'port14', segments: [{ type: 'Orthogonal', direction: 'Bottom', length: 60 }], },
        { id: "connector8", type: 'Orthogonal', sourceID: 'manualCreditAnalysis', targetID: 'endProcess', sourcePortID: 'port15', targetPortID: 'port16' },
        { id: "connector9", type: 'Orthogonal', sourceID: 'createAsset', targetID: 'createLoc', sourcePortID: 'port17', targetPortID: 'port18' },
        { id: "connector10", type: 'Orthogonal', sourceID: 'createLoc', targetID: 'endProcess', sourcePortID: 'port19', targetPortID: 'port20' }
    ]

    
    
    var interval = [1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75];
    var gridlines = { lineColor: '#e0e0e0', lineIntervals: interval };
    //Initializes diagram control


    var diagram = new ej.diagrams.Diagram({
        width: '100%',
        height: '1000px',
        nodes: data,
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
            //node.constraints = ej.diagrams.NodeConstraints.Default &~ej.diagrams.NodeConstraints.Drag; 
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
            //obj.constraints = ej.diagrams.ConnectorConstraints.Default &~(ej.diagrams.ConnectorConstraints.DragSourceEnd | ej.diagrams.ConnectorConstraints.DragTargetEnd);
            
        },
        //enables the bridging constraints for the connector
        constraints: ej.diagrams.DiagramConstraints.Default | ej.diagrams.DiagramConstraints.Bridging,
        created: onCreated,

    }, '#diagram');
    //diagram.align('Left', diagram.selectedItems.nodes, 'Selector');
    function onCreated() {
        //diagram.fitToPage();
    }
}
prepareDesigner();
