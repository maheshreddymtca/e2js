var results = {
    "WorkflowDefintion": [
      {
        "StartTask": true,
        "TaskInfo": {
          "TaskName": "DataEntry",
          "TaskType": "HumanTask",
          "TaskDescription": "....",
          "AdditionalInfo": {
            "UIForm": "",
            "TransactionName": "",
            "EntityName": " ",
            "EntityActionName": "",
            "ComponentName": " ",
            "DecisionTableName": " "
          }
        },
        "TaskEligibilityRules": [
          {
            "Name": "xxxx",
            "Expresison": "...."
          }
        ],
        "Dependencies": [
          "task1",
          "task2"
        ],
        "EntityRules": [
          {
            "FieldInputRules": [
              "Rule1",
              "Rule2"
            ]
          }
        ],
        "TaskOutcomes": [
          {
            "ActionName": "Approve",
            "NextTask": "TransactionTask",
            "Expression": ".....",
            "MarkAsComplete": true,
            "TerminateProcess": true
          }
        ]
      },
      {
        "StartTask": false,
        "TaskInfo": {
          "TaskName": "Transaction",
          "TaskType": "TransactionTask",
          "TaskDescription": "Transaction Task Description",
          "AdditionalInfo": {
            "UIForm": "",
            "TransactionName": "",
            "EntityName": " ",
            "EntityActionName": "",
            "ComponentName": " ",
            "DecisionTableName": " "
          }
        },
        "TaskEligibilityRules": [
          {
            "Name": "xxxx",
            "Expresison": "...."
          }
        ],
        "Dependencies": [
          "task1",
          "task2"
        ],
        "EntityRules": [
          {
            "FieldInputRules": [
              "Rule1",
              "Rule2"
            ]
          }
        ],
        "TaskOutcomes": [
          {
            "ActionName": "Approve",
            "NextTask": "EntityApiTask",
            "Expression": ".....",
            "MarkAsComplete": true,
            "TerminateProcess": true
          },
          {
            "ActionName": "Decline",
            "NextTask": "EntityApiTask",
            "Expression": ".....",
            "MarkAsComplete": true,
            "TerminateProcess": true
          },
          {
            "ActionName": "Refer",
            "NextTask": "EntityApiTask",
            "Expression": ".....",
            "MarkAsComplete": true,
            "TerminateProcess": true
          },
          {
            "ActionName": "Other",
            "NextTask": "EntityApiTask",
            "Expression": ".....",
            "MarkAsComplete": true,
            "TerminateProcess": true
          }
        ]
      },
      {
        "StartTask": false,
        "TaskInfo": {
          "TaskName": "Entity API ",
          "TaskType": "EntityApiTask",
          "TaskDescription": "EntityApiTask Description",
          "AdditionalInfo": {
            "UIForm": "",
            "TransactionName": "",
            "EntityName": " ",
            "EntityActionName": "",
            "ComponentName": " ",
            "DecisionTableName": " "
          }
        },
        "TaskEligibilityRules": [
          {
            "Name": "xxxx",
            "Expresison": "...."
          }
        ],
        "Dependencies": [
          "task1",
          "task2"
        ],
        "EntityRules": [
          {
            "FieldInputRules": [
              "Rule1",
              "Rule2"
            ]
          }
        ],
        "TaskOutcomes": [
          {
            "ActionName": "Refer",
            "NextTask": "BusinessRuleTask",
            "Expression": ".....",
            "MarkAsComplete": true,
            "TerminateProcess": true
          },
          {
            "ActionName": "Other",
            "NextTask": "BusinessRuleTask",
            "Expression": ".....",
            "MarkAsComplete": true,
            "TerminateProcess": true
          }
        ]
      },
      {
        "StartTask": false,
        "TaskInfo": {
          "TaskName": "Business Rule",
          "TaskType": "BusinessRuleTask",
          "TaskDescription": "Business Rule Task Description",
          "AdditionalInfo": {
            "UIForm": "",
            "TransactionName": "",
            "EntityName": " ",
            "EntityActionName": "",
            "ComponentName": " ",
            "DecisionTableName": " "
          }
        },
        "TaskEligibilityRules": [
          {
            "Name": "xxxx",
            "Expresison": "...."
          }
        ],
        "Dependencies": [
          "task1",
          "task2"
        ],
        "EntityRules": [
          {
            "FieldInputRules": [
              "Rule1",
              "Rule2"
            ]
          }
        ],
        "TaskOutcomes": [
          {
            "ActionName": "Approve",
            "NextTask": "ParallelTask",
            "Expression": ".....",
            "MarkAsComplete": true,
            "TerminateProcess": true
          },
          {
            "ActionName": "Decline",
            "NextTask": "ParallelTask",
            "Expression": ".....",
            "MarkAsComplete": true,
            "TerminateProcess": true
          }
        ]
      },
      {
        "StartTask": false,
        "TaskInfo": {
          "TaskName": "Parallel",
          "TaskType": "ParallelTask",
          "TaskDescription": "Submit For Final Approval",
          "AdditionalInfo": {
            "UIForm": "",
            "TransactionName": "",
            "EntityName": " ",
            "EntityActionName": "",
            "ComponentName": " ",
            "DecisionTableName": " "
          }
        },
        "TaskEligibilityRules": [
          {
            "Name": "xxxx",
            "Expresison": "...."
          }
        ],
        "Dependencies": [
          "task1",
          "task2"
        ],
        "EntityRules": [
          {
            "FieldInputRules": [
              "Rule1",
              "Rule2"
            ]
          }
        ],
        "TaskOutcomes": [
          {
            "ActionName": "Approve",
            "NextTask": "ComponentTask",
            "Expression": ".....",
            "MarkAsComplete": true,
            "TerminateProcess": true
          },
          {
            "ActionName": "Reject",
            "NextTask": "ComponentTask",
            "Expression": ".....",
            "MarkAsComplete": true,
            "TerminateProcess": true
          }
        ]
      },
      {
        "StartTask": false,
        "TaskInfo": {
          "TaskName": "Component",
          "TaskType": "ComponentTask",
          "TaskDescription": "ComponentTask Description",
          "AdditionalInfo": {
            "UIForm": "",
            "TransactionName": "",
            "EntityName": " ",
            "EntityActionName": "",
            "ComponentName": " ",
            "DecisionTableName": " "
          }
        },
        "TaskEligibilityRules": [
          {
            "Name": "xxxx",
            "Expresison": "...."
          }
        ],
        "Dependencies": [
          "task1",
          "task2"
        ],
        "EntityRules": [
          {
            "FieldInputRules": [
              "Rule1",
              "Rule2"
            ]
          }
        ],
        "TaskOutcomes": [
          {
            "ActionName": "Approve",
            "NextTask": "DecisionTask",
            "Expression": ".....",
            "MarkAsComplete": true,
            "TerminateProcess": true
          }
        ]
      },
      {
        "StartTask": false,
        "TaskInfo": {
          "TaskName": "DescisionFlow",
          "TaskType": "DecisionTask",
          "TaskDescription": "Generate Document Descision",
          "AdditionalInfo": {
            "UIForm": "",
            "TransactionName": "",
            "EntityName": " ",
            "EntityActionName": "",
            "ComponentName": " ",
            "DecisionTableName": " "
          }
        },
        "TaskEligibilityRules": [
          {
            "Name": "xxxx",
            "Expresison": "...."
          }
        ],
        "Dependencies": [
          "task1",
          "task2"
        ],
        "EntityRules": [
          {
            "FieldInputRules": [
              "Rule1",
              "Rule2"
            ]
          }
        ],
        "TaskOutcomes": [
          {
            "ActionName": "Approve",
            "NextTask": "ComponentTask",
            "Expression": ".....",
            "MarkAsComplete": true,
            "TerminateProcess": true
          },
          
          {
            "ActionName": "Refer",
            "NextTask": "",
            "Expression": ".....",
            "MarkAsComplete": true,
            "TerminateProcess": true
          }
        ]
      }
    ]
}

function prepareDesigner() {
    class TaskOutCome{
        constructor(OutcomeName, OutcomeExpression, NextTask){
            this.OutcomeName = OutcomeName;
            this.OutcomeExpression = OutcomeExpression;
            this.NextTask = NextTask;
        }
    }
    class TaskNode {
        constructor(TaskName, TaskType, Description){
            this.TaskName = TaskName;
            this.TaskType = TaskType;
            this.Description = Description;
        }
        setTaskOutComes(TaskOutcomes){
            this.TaskOutcomes = TaskOutcomes;
        }
        setTaskData(TaskData){
        }
        setEligibilityRules(setEligibilityRules){
        }
        prepareBaseHTMLContent(content){
           $($(content).children()[0]).find('.btnGroup')[0].innerHTML = (this.TaskOutcomes == undefined ? ' ' : this.TaskOutcomes);
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
            var btnid = $('#human-task-actions');
            return content;
        }
    }

    class TransactionTaskNode extends TaskNode {
        TEMPLATE_ID = "#transaction-task-template";
        constructor(TaskName, TaskType, Description){
            super(TaskName, TaskType, Description);      
        }
        getHTMLContent() {
            var content = super.prepareBaseHTMLContent($(this.TEMPLATE_ID)[0].content);
            // .. DO Task specific manipulation
            //console.log(content);
            return content;
        }
    }

    class EntityApiTaskNode extends TaskNode {
        TEMPLATE_ID = "#entityapi-task-template";
        constructor(TaskName, TaskType, Description){
            super(TaskName, TaskType, Description);      
        }
        getHTMLContent() {
            var content = super.prepareBaseHTMLContent($(this.TEMPLATE_ID)[0].content);
            // .. DO Task specific manipulation
            //console.log(content);
            return content;
        }
    }

    class BusinessRuleTaskNode extends TaskNode {
        TEMPLATE_ID = "#businessrule-task-template";
        constructor(TaskName, TaskType, Description)        {
            super(TaskName, TaskType, Description);      
        }
        getHTMLContent() {
            var content = super.prepareBaseHTMLContent($(this.TEMPLATE_ID)[0].content);
            // .. DO Task specific manipulation
            //console.log(content);
            return content;
        }
    }

    class ParallelTaskNode extends TaskNode {
        TEMPLATE_ID = "#parallel-task-template";
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

    class ComponentTaskNode extends TaskNode {
        TEMPLATE_ID = "#component-task-template";
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

    class DecisionTaskNode extends TaskNode {
        TEMPLATE_ID = "#decision-task-template";
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
        console.log('results.WorkflowDefintion>>>>',results.WorkflowDefintion)
        results.WorkflowDefintion.forEach((item, i) => {
            if(item.TaskInfo.TaskType == "HumanTask"){
                //var TaskOutCome = new TaskOutCome();
                var HumanTask = new HumanTaskNode(item.TaskInfo.TaskName, item.TaskInfo.TaskType, item.TaskInfo.TaskDescription);
                var outcome = item.TaskOutcomes;
                if(outcome !== undefined){
                    var btns = '';
                    outcome.forEach(function(outComes){
                        
                        btns += '<span class="'+outComes.ActionName+' btn">'+outComes.ActionName+'</span>';
                    });
                    HumanTask.setTaskOutComes(btns);
                }
                tasks.push(HumanTask); 
                
            }else if(item.TaskInfo.TaskType == "TransactionTask"){
                var TransactionTask = new TransactionTaskNode(item.TaskInfo.TaskName, item.TaskInfo.TaskType, item.TaskInfo.TaskDescription);
                var outcome = item.TaskOutcomes;
                if(outcome !== undefined){
                    var btns = '';
                    outcome.forEach(function(outComes){
                        
                        btns += '<span class="'+outComes.ActionName+' btn">'+outComes.ActionName+'</span>';
                    });
                    TransactionTask.setTaskOutComes(btns);    
                }
                tasks.push(TransactionTask); 
            }else if(item.TaskInfo.TaskType == "EntityApiTask"){
                var outcome = item.TaskOutcomes;
                var btns = '';
                outcome.forEach(function(outComes){
                    
                    btns += '<span class="'+outComes.ActionName+' btn">'+outComes.ActionName+'</span>';
                });
                var EntityApiTask = new EntityApiTaskNode(item.TaskInfo.TaskName, item.TaskInfo.TaskType, item.TaskInfo.TaskDescription);
                EntityApiTask.setTaskOutComes(btns);
                tasks.push(EntityApiTask); 
            }else if(item.TaskInfo.TaskType == "BusinessRuleTask"){
                var outcome = item.TaskOutcomes;
                var btns = '';
                outcome.forEach(function(outComes){
                    
                    btns += '<span class="'+outComes.ActionName+' btn">'+outComes.ActionName+'</span>';
                });
                var BusinessRuleTask = new BusinessRuleTaskNode(item.TaskInfo.TaskName, item.TaskInfo.TaskType, item.TaskInfo.TaskDescription);
                BusinessRuleTask.setTaskOutComes(btns);
                tasks.push(BusinessRuleTask); 
            }else if(item.TaskInfo.TaskType == "ParallelTask"){
                var outcome = item.TaskOutcomes;
                var btns = '';
                outcome.forEach(function(outComes){
                    
                    btns += '<span class="'+outComes.ActionName+' btn">'+outComes.ActionName+'</span>';
                });
                var ParallelTask = new ParallelTaskNode(item.TaskInfo.TaskName, item.TaskInfo.TaskType, item.TaskInfo.TaskDescription);
                ParallelTask.setTaskOutComes(btns);
                tasks.push(ParallelTask); 
            }else if(item.TaskInfo.TaskType == "ComponentTask"){
                var outcome = item.TaskOutcomes;
                var btns = '';
            outcome.forEach(function(outComes){
                
                btns += '<span class="'+outComes.ActionName+' btn">'+outComes.ActionName+'</span>';
            });
            var ComponentTask = new ComponentTaskNode(item.TaskInfo.TaskName, item.TaskInfo.TaskType, item.TaskInfo.TaskDescription);
            ComponentTask.setTaskOutComes(btns);
                tasks.push(ComponentTask); 
            }else if(item.TaskInfo.TaskType == "DecisionTask"){
                var outcome = item.TaskOutcomes;
                var btns = '';
            outcome.forEach(function(outComes){
                
                btns += '<span class="'+outComes.ActionName+' btn">'+outComes.ActionName+'</span>';
            });
            var DecisionTask = new DecisionTaskNode(item.TaskInfo.TaskName, item.TaskInfo.TaskType, item.TaskInfo.TaskDescription);
            DecisionTask.setTaskOutComes(btns);
                tasks.push(DecisionTask); 
            }
            
        })

        var x = -450;
        var y = 200;
        const allTaskdata = {};
        const Data = tasks.map((tasks, index) => {
            const data = {};
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
            data.id = tasks.TaskType;
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
        //{ id: "connector1", type: 'Orthogonal', sourceID: 'Start', targetID: 'creatCustomer', sourcePortID: 'port1', targetPortID: 'port2' },
        const connectorsData = results.WorkflowDefintion.map((tasks, index) => {
            const data = {};
            data.id = 'connector'+(index+1);
            data.type = 'Orthogonal'; 
            data.sourceID = tasks.TaskInfo.TaskType;
            data.targetID = tasks.TaskOutcomes[0].NextTask; 
            data.sourcePortID = 'port'+(index+1);
            data.targetPortID = 'port'+(index+2);
            return data;
        });
        allTaskdata.connectors = connectorsData;
        return allTaskdata;    
    }
    var newData = getTasks();
    console.log('newData',newData)

    ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo, ej.diagrams.LineRouting, ej.diagrams.ConnectorBridging);
    function getNodePorts(obj) {
        const ports = results.WorkflowDefintion.map((tasks, index) => {
            const data = {};
            const style= {};
            const offset= {};
            data.id = 'port'+(index+1);
            data.shape = 'Circle';
           
            style.strokeColor = '', 
            style.fill ='';

            
          
    
        
    
            offset.x = 1, 
            offset.y =0.5;
           
            data.style = style;
            data.offset = offset;
            return data;
        });
        console.log('ports>>>>',ports);
        /*var ports = [
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
        ];*/
        return ports;
    }


   

    var bounds = document.getElementById('diagram').getBoundingClientRect();
    var centerX = bounds.width / 2;
    

    
    /*var connectors = [
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
    ]*/

    
    
    var interval = [1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75];
    var gridlines = { lineColor: '#e0e0e0', lineIntervals: interval };
    //Initializes diagram control


    var diagram = new ej.diagrams.Diagram({
        width: '100%',
        height: '1000px',
        nodes: newData.nodes,
        connectors: newData.connectors,
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
$('body').on('click','.ProcessDesignerAddPopup ul li a',function(e){
    $('#diagram').empty();
    // console.log('task Name>>>',e.currentTarget.textContent);
    // console.log('taskType>>>>',e.currentTarget.attributes['data-id'].value);
     const newObj = {
        "StartTask": true,
        "TaskInfo": {
            "TaskName": e.currentTarget.textContent,
            "TaskType": e.currentTarget.attributes['data-id'].value,
            "TaskDescription": "....",
            "AdditionalInfo": {
            "UIForm": "",
            "TransactionName": "",
            "EntityName": " ",
            "EntityActionName": "",
            "ComponentName": " ",
            "DecisionTableName": " "
            }
        }
    };
    console.log('newObj>>>',newObj);
    results.WorkflowDefintion.push(newObj);
    console.log('results.WorkflowDefintion>>>>',results.WorkflowDefintion);
    prepareDesigner();
})

