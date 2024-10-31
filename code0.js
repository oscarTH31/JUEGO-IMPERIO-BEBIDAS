gdjs.portadaCode = {};
gdjs.portadaCode.localVariables = [];
gdjs.portadaCode.GDFONDO_9595PORTADAObjects1= [];
gdjs.portadaCode.GDFONDO_9595PORTADAObjects2= [];
gdjs.portadaCode.GDBOTON_9595STARTObjects1= [];
gdjs.portadaCode.GDBOTON_9595STARTObjects2= [];
gdjs.portadaCode.GDGASEOSAObjects1= [];
gdjs.portadaCode.GDGASEOSAObjects2= [];
gdjs.portadaCode.GDAGUAObjects1= [];
gdjs.portadaCode.GDAGUAObjects2= [];
gdjs.portadaCode.GDJUGOObjects1= [];
gdjs.portadaCode.GDJUGOObjects2= [];
gdjs.portadaCode.GDBOTON_9595ATRASObjects1= [];
gdjs.portadaCode.GDBOTON_9595ATRASObjects2= [];
gdjs.portadaCode.GDBOTON_9595ADQUIRIRObjects1= [];
gdjs.portadaCode.GDBOTON_9595ADQUIRIRObjects2= [];


gdjs.portadaCode.mapOfGDgdjs_9546portadaCode_9546GDBOTON_95959595STARTObjects1Objects = Hashtable.newFrom({"BOTON_START": gdjs.portadaCode.GDBOTON_9595STARTObjects1});
gdjs.portadaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BOTON_START"), gdjs.portadaCode.GDBOTON_9595STARTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.portadaCode.mapOfGDgdjs_9546portadaCode_9546GDBOTON_95959595STARTObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "paginaPrincipal", false);
}}

}


};

gdjs.portadaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.portadaCode.GDFONDO_9595PORTADAObjects1.length = 0;
gdjs.portadaCode.GDFONDO_9595PORTADAObjects2.length = 0;
gdjs.portadaCode.GDBOTON_9595STARTObjects1.length = 0;
gdjs.portadaCode.GDBOTON_9595STARTObjects2.length = 0;
gdjs.portadaCode.GDGASEOSAObjects1.length = 0;
gdjs.portadaCode.GDGASEOSAObjects2.length = 0;
gdjs.portadaCode.GDAGUAObjects1.length = 0;
gdjs.portadaCode.GDAGUAObjects2.length = 0;
gdjs.portadaCode.GDJUGOObjects1.length = 0;
gdjs.portadaCode.GDJUGOObjects2.length = 0;
gdjs.portadaCode.GDBOTON_9595ATRASObjects1.length = 0;
gdjs.portadaCode.GDBOTON_9595ATRASObjects2.length = 0;
gdjs.portadaCode.GDBOTON_9595ADQUIRIRObjects1.length = 0;
gdjs.portadaCode.GDBOTON_9595ADQUIRIRObjects2.length = 0;

gdjs.portadaCode.eventsList0(runtimeScene);
gdjs.portadaCode.GDFONDO_9595PORTADAObjects1.length = 0;
gdjs.portadaCode.GDFONDO_9595PORTADAObjects2.length = 0;
gdjs.portadaCode.GDBOTON_9595STARTObjects1.length = 0;
gdjs.portadaCode.GDBOTON_9595STARTObjects2.length = 0;
gdjs.portadaCode.GDGASEOSAObjects1.length = 0;
gdjs.portadaCode.GDGASEOSAObjects2.length = 0;
gdjs.portadaCode.GDAGUAObjects1.length = 0;
gdjs.portadaCode.GDAGUAObjects2.length = 0;
gdjs.portadaCode.GDJUGOObjects1.length = 0;
gdjs.portadaCode.GDJUGOObjects2.length = 0;
gdjs.portadaCode.GDBOTON_9595ATRASObjects1.length = 0;
gdjs.portadaCode.GDBOTON_9595ATRASObjects2.length = 0;
gdjs.portadaCode.GDBOTON_9595ADQUIRIRObjects1.length = 0;
gdjs.portadaCode.GDBOTON_9595ADQUIRIRObjects2.length = 0;


return;

}

gdjs['portadaCode'] = gdjs.portadaCode;
