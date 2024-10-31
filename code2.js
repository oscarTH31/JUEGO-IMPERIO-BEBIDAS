gdjs.IntroduccionCode = {};
gdjs.IntroduccionCode.localVariables = [];
gdjs.IntroduccionCode.GDFONDOObjects1= [];
gdjs.IntroduccionCode.GDFONDOObjects2= [];
gdjs.IntroduccionCode.GDCUADROObjects1= [];
gdjs.IntroduccionCode.GDCUADROObjects2= [];
gdjs.IntroduccionCode.GDFASE1Objects1= [];
gdjs.IntroduccionCode.GDFASE1Objects2= [];
gdjs.IntroduccionCode.GDinstruccionesObjects1= [];
gdjs.IntroduccionCode.GDinstruccionesObjects2= [];
gdjs.IntroduccionCode.GDFASE2Objects1= [];
gdjs.IntroduccionCode.GDFASE2Objects2= [];
gdjs.IntroduccionCode.GDGASEOSAObjects1= [];
gdjs.IntroduccionCode.GDGASEOSAObjects2= [];
gdjs.IntroduccionCode.GDAGUAObjects1= [];
gdjs.IntroduccionCode.GDAGUAObjects2= [];
gdjs.IntroduccionCode.GDJUGOObjects1= [];
gdjs.IntroduccionCode.GDJUGOObjects2= [];
gdjs.IntroduccionCode.GDBOTON_9595ATRASObjects1= [];
gdjs.IntroduccionCode.GDBOTON_9595ATRASObjects2= [];
gdjs.IntroduccionCode.GDBOTON_9595ADQUIRIRObjects1= [];
gdjs.IntroduccionCode.GDBOTON_9595ADQUIRIRObjects2= [];


gdjs.IntroduccionCode.mapOfGDgdjs_9546IntroduccionCode_9546GDFASE1Objects1Objects = Hashtable.newFrom({"FASE1": gdjs.IntroduccionCode.GDFASE1Objects1});
gdjs.IntroduccionCode.mapOfGDgdjs_9546IntroduccionCode_9546GDinstruccionesObjects1Objects = Hashtable.newFrom({"instrucciones": gdjs.IntroduccionCode.GDinstruccionesObjects1});
gdjs.IntroduccionCode.mapOfGDgdjs_9546IntroduccionCode_9546GDFASE2Objects1Objects = Hashtable.newFrom({"FASE2": gdjs.IntroduccionCode.GDFASE2Objects1});
gdjs.IntroduccionCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FASE1"), gdjs.IntroduccionCode.GDFASE1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroduccionCode.mapOfGDgdjs_9546IntroduccionCode_9546GDFASE1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE_NACIONAL", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("instrucciones"), gdjs.IntroduccionCode.GDinstruccionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroduccionCode.mapOfGDgdjs_9546IntroduccionCode_9546GDinstruccionesObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "INSTRUCCIONES", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FASE2"), gdjs.IntroduccionCode.GDFASE2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroduccionCode.mapOfGDgdjs_9546IntroduccionCode_9546GDFASE2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE_INTERNACIONAL", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.IntroduccionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroduccionCode.GDFONDOObjects1.length = 0;
gdjs.IntroduccionCode.GDFONDOObjects2.length = 0;
gdjs.IntroduccionCode.GDCUADROObjects1.length = 0;
gdjs.IntroduccionCode.GDCUADROObjects2.length = 0;
gdjs.IntroduccionCode.GDFASE1Objects1.length = 0;
gdjs.IntroduccionCode.GDFASE1Objects2.length = 0;
gdjs.IntroduccionCode.GDinstruccionesObjects1.length = 0;
gdjs.IntroduccionCode.GDinstruccionesObjects2.length = 0;
gdjs.IntroduccionCode.GDFASE2Objects1.length = 0;
gdjs.IntroduccionCode.GDFASE2Objects2.length = 0;
gdjs.IntroduccionCode.GDGASEOSAObjects1.length = 0;
gdjs.IntroduccionCode.GDGASEOSAObjects2.length = 0;
gdjs.IntroduccionCode.GDAGUAObjects1.length = 0;
gdjs.IntroduccionCode.GDAGUAObjects2.length = 0;
gdjs.IntroduccionCode.GDJUGOObjects1.length = 0;
gdjs.IntroduccionCode.GDJUGOObjects2.length = 0;
gdjs.IntroduccionCode.GDBOTON_9595ATRASObjects1.length = 0;
gdjs.IntroduccionCode.GDBOTON_9595ATRASObjects2.length = 0;
gdjs.IntroduccionCode.GDBOTON_9595ADQUIRIRObjects1.length = 0;
gdjs.IntroduccionCode.GDBOTON_9595ADQUIRIRObjects2.length = 0;

gdjs.IntroduccionCode.eventsList0(runtimeScene);
gdjs.IntroduccionCode.GDFONDOObjects1.length = 0;
gdjs.IntroduccionCode.GDFONDOObjects2.length = 0;
gdjs.IntroduccionCode.GDCUADROObjects1.length = 0;
gdjs.IntroduccionCode.GDCUADROObjects2.length = 0;
gdjs.IntroduccionCode.GDFASE1Objects1.length = 0;
gdjs.IntroduccionCode.GDFASE1Objects2.length = 0;
gdjs.IntroduccionCode.GDinstruccionesObjects1.length = 0;
gdjs.IntroduccionCode.GDinstruccionesObjects2.length = 0;
gdjs.IntroduccionCode.GDFASE2Objects1.length = 0;
gdjs.IntroduccionCode.GDFASE2Objects2.length = 0;
gdjs.IntroduccionCode.GDGASEOSAObjects1.length = 0;
gdjs.IntroduccionCode.GDGASEOSAObjects2.length = 0;
gdjs.IntroduccionCode.GDAGUAObjects1.length = 0;
gdjs.IntroduccionCode.GDAGUAObjects2.length = 0;
gdjs.IntroduccionCode.GDJUGOObjects1.length = 0;
gdjs.IntroduccionCode.GDJUGOObjects2.length = 0;
gdjs.IntroduccionCode.GDBOTON_9595ATRASObjects1.length = 0;
gdjs.IntroduccionCode.GDBOTON_9595ATRASObjects2.length = 0;
gdjs.IntroduccionCode.GDBOTON_9595ADQUIRIRObjects1.length = 0;
gdjs.IntroduccionCode.GDBOTON_9595ADQUIRIRObjects2.length = 0;


return;

}

gdjs['IntroduccionCode'] = gdjs.IntroduccionCode;
