gdjs.ApurimacCode = {};
gdjs.ApurimacCode.localVariables = [];
gdjs.ApurimacCode.GDFONDOObjects1= [];
gdjs.ApurimacCode.GDFONDOObjects2= [];
gdjs.ApurimacCode.GDGASEOSAObjects1= [];
gdjs.ApurimacCode.GDGASEOSAObjects2= [];
gdjs.ApurimacCode.GDAGUAObjects1= [];
gdjs.ApurimacCode.GDAGUAObjects2= [];
gdjs.ApurimacCode.GDJUGOObjects1= [];
gdjs.ApurimacCode.GDJUGOObjects2= [];
gdjs.ApurimacCode.GDBOTON_9595ATRASObjects1= [];
gdjs.ApurimacCode.GDBOTON_9595ATRASObjects2= [];
gdjs.ApurimacCode.GDBOTON_9595ADQUIRIRObjects1= [];
gdjs.ApurimacCode.GDBOTON_9595ADQUIRIRObjects2= [];


gdjs.ApurimacCode.mapOfGDgdjs_9546ApurimacCode_9546GDBOTON_95959595ATRASObjects1Objects = Hashtable.newFrom({"BOTON_ATRAS": gdjs.ApurimacCode.GDBOTON_9595ATRASObjects1});
gdjs.ApurimacCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BOTON_ATRAS"), gdjs.ApurimacCode.GDBOTON_9595ATRASObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ApurimacCode.mapOfGDgdjs_9546ApurimacCode_9546GDBOTON_95959595ATRASObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE_NACIONAL", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.ApurimacCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ApurimacCode.GDFONDOObjects1.length = 0;
gdjs.ApurimacCode.GDFONDOObjects2.length = 0;
gdjs.ApurimacCode.GDGASEOSAObjects1.length = 0;
gdjs.ApurimacCode.GDGASEOSAObjects2.length = 0;
gdjs.ApurimacCode.GDAGUAObjects1.length = 0;
gdjs.ApurimacCode.GDAGUAObjects2.length = 0;
gdjs.ApurimacCode.GDJUGOObjects1.length = 0;
gdjs.ApurimacCode.GDJUGOObjects2.length = 0;
gdjs.ApurimacCode.GDBOTON_9595ATRASObjects1.length = 0;
gdjs.ApurimacCode.GDBOTON_9595ATRASObjects2.length = 0;
gdjs.ApurimacCode.GDBOTON_9595ADQUIRIRObjects1.length = 0;
gdjs.ApurimacCode.GDBOTON_9595ADQUIRIRObjects2.length = 0;

gdjs.ApurimacCode.eventsList0(runtimeScene);
gdjs.ApurimacCode.GDFONDOObjects1.length = 0;
gdjs.ApurimacCode.GDFONDOObjects2.length = 0;
gdjs.ApurimacCode.GDGASEOSAObjects1.length = 0;
gdjs.ApurimacCode.GDGASEOSAObjects2.length = 0;
gdjs.ApurimacCode.GDAGUAObjects1.length = 0;
gdjs.ApurimacCode.GDAGUAObjects2.length = 0;
gdjs.ApurimacCode.GDJUGOObjects1.length = 0;
gdjs.ApurimacCode.GDJUGOObjects2.length = 0;
gdjs.ApurimacCode.GDBOTON_9595ATRASObjects1.length = 0;
gdjs.ApurimacCode.GDBOTON_9595ATRASObjects2.length = 0;
gdjs.ApurimacCode.GDBOTON_9595ADQUIRIRObjects1.length = 0;
gdjs.ApurimacCode.GDBOTON_9595ADQUIRIRObjects2.length = 0;


return;

}

gdjs['ApurimacCode'] = gdjs.ApurimacCode;
