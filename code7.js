gdjs.AncashCode = {};
gdjs.AncashCode.localVariables = [];
gdjs.AncashCode.GDNewTextObjects1= [];
gdjs.AncashCode.GDNewTextObjects2= [];
gdjs.AncashCode.GDFONDOObjects1= [];
gdjs.AncashCode.GDFONDOObjects2= [];
gdjs.AncashCode.GDGASEOSAObjects1= [];
gdjs.AncashCode.GDGASEOSAObjects2= [];
gdjs.AncashCode.GDAGUAObjects1= [];
gdjs.AncashCode.GDAGUAObjects2= [];
gdjs.AncashCode.GDJUGOObjects1= [];
gdjs.AncashCode.GDJUGOObjects2= [];
gdjs.AncashCode.GDBOTON_9595ATRASObjects1= [];
gdjs.AncashCode.GDBOTON_9595ATRASObjects2= [];
gdjs.AncashCode.GDBOTON_9595ADQUIRIRObjects1= [];
gdjs.AncashCode.GDBOTON_9595ADQUIRIRObjects2= [];


gdjs.AncashCode.mapOfGDgdjs_9546AncashCode_9546GDBOTON_95959595ATRASObjects1Objects = Hashtable.newFrom({"BOTON_ATRAS": gdjs.AncashCode.GDBOTON_9595ATRASObjects1});
gdjs.AncashCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BOTON_ATRAS"), gdjs.AncashCode.GDBOTON_9595ATRASObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.AncashCode.mapOfGDgdjs_9546AncashCode_9546GDBOTON_95959595ATRASObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE_NACIONAL", false);
}}

}


};

gdjs.AncashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AncashCode.GDNewTextObjects1.length = 0;
gdjs.AncashCode.GDNewTextObjects2.length = 0;
gdjs.AncashCode.GDFONDOObjects1.length = 0;
gdjs.AncashCode.GDFONDOObjects2.length = 0;
gdjs.AncashCode.GDGASEOSAObjects1.length = 0;
gdjs.AncashCode.GDGASEOSAObjects2.length = 0;
gdjs.AncashCode.GDAGUAObjects1.length = 0;
gdjs.AncashCode.GDAGUAObjects2.length = 0;
gdjs.AncashCode.GDJUGOObjects1.length = 0;
gdjs.AncashCode.GDJUGOObjects2.length = 0;
gdjs.AncashCode.GDBOTON_9595ATRASObjects1.length = 0;
gdjs.AncashCode.GDBOTON_9595ATRASObjects2.length = 0;
gdjs.AncashCode.GDBOTON_9595ADQUIRIRObjects1.length = 0;
gdjs.AncashCode.GDBOTON_9595ADQUIRIRObjects2.length = 0;

gdjs.AncashCode.eventsList0(runtimeScene);
gdjs.AncashCode.GDNewTextObjects1.length = 0;
gdjs.AncashCode.GDNewTextObjects2.length = 0;
gdjs.AncashCode.GDFONDOObjects1.length = 0;
gdjs.AncashCode.GDFONDOObjects2.length = 0;
gdjs.AncashCode.GDGASEOSAObjects1.length = 0;
gdjs.AncashCode.GDGASEOSAObjects2.length = 0;
gdjs.AncashCode.GDAGUAObjects1.length = 0;
gdjs.AncashCode.GDAGUAObjects2.length = 0;
gdjs.AncashCode.GDJUGOObjects1.length = 0;
gdjs.AncashCode.GDJUGOObjects2.length = 0;
gdjs.AncashCode.GDBOTON_9595ATRASObjects1.length = 0;
gdjs.AncashCode.GDBOTON_9595ATRASObjects2.length = 0;
gdjs.AncashCode.GDBOTON_9595ADQUIRIRObjects1.length = 0;
gdjs.AncashCode.GDBOTON_9595ADQUIRIRObjects2.length = 0;


return;

}

gdjs['AncashCode'] = gdjs.AncashCode;
