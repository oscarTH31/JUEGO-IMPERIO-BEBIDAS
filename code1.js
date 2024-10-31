gdjs.paginaPrincipalCode = {};
gdjs.paginaPrincipalCode.localVariables = [];
gdjs.paginaPrincipalCode.GDescenaObjects1= [];
gdjs.paginaPrincipalCode.GDescenaObjects2= [];
gdjs.paginaPrincipalCode.GDpersonajeObjects1= [];
gdjs.paginaPrincipalCode.GDpersonajeObjects2= [];
gdjs.paginaPrincipalCode.GDNewBitmapTextObjects1= [];
gdjs.paginaPrincipalCode.GDNewBitmapTextObjects2= [];
gdjs.paginaPrincipalCode.GDCUADRO_9595DIALOGOObjects1= [];
gdjs.paginaPrincipalCode.GDCUADRO_9595DIALOGOObjects2= [];
gdjs.paginaPrincipalCode.GDBOTON_9595NEXTObjects1= [];
gdjs.paginaPrincipalCode.GDBOTON_9595NEXTObjects2= [];
gdjs.paginaPrincipalCode.GDGASEOSAObjects1= [];
gdjs.paginaPrincipalCode.GDGASEOSAObjects2= [];
gdjs.paginaPrincipalCode.GDAGUAObjects1= [];
gdjs.paginaPrincipalCode.GDAGUAObjects2= [];
gdjs.paginaPrincipalCode.GDJUGOObjects1= [];
gdjs.paginaPrincipalCode.GDJUGOObjects2= [];
gdjs.paginaPrincipalCode.GDBOTON_9595ATRASObjects1= [];
gdjs.paginaPrincipalCode.GDBOTON_9595ATRASObjects2= [];
gdjs.paginaPrincipalCode.GDBOTON_9595ADQUIRIRObjects1= [];
gdjs.paginaPrincipalCode.GDBOTON_9595ADQUIRIRObjects2= [];


gdjs.paginaPrincipalCode.mapOfGDgdjs_9546paginaPrincipalCode_9546GDBOTON_95959595NEXTObjects1Objects = Hashtable.newFrom({"BOTON_NEXT": gdjs.paginaPrincipalCode.GDBOTON_9595NEXTObjects1});
gdjs.paginaPrincipalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewBitmapText"), gdjs.paginaPrincipalCode.GDNewBitmapTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.paginaPrincipalCode.GDNewBitmapTextObjects1.length;i<l;++i) {
    if ( gdjs.paginaPrincipalCode.GDNewBitmapTextObjects1[i].getTimerElapsedTimeInSecondsOrNaN("TemporizadorDialogo") >= 3 ) {
        isConditionTrue_0 = true;
        gdjs.paginaPrincipalCode.GDNewBitmapTextObjects1[k] = gdjs.paginaPrincipalCode.GDNewBitmapTextObjects1[i];
        ++k;
    }
}
gdjs.paginaPrincipalCode.GDNewBitmapTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.paginaPrincipalCode.GDNewBitmapTextObjects1 */
{for(var i = 0, len = gdjs.paginaPrincipalCode.GDNewBitmapTextObjects1.length ;i < len;++i) {
    gdjs.paginaPrincipalCode.GDNewBitmapTextObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BOTON_NEXT"), gdjs.paginaPrincipalCode.GDBOTON_9595NEXTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.paginaPrincipalCode.mapOfGDgdjs_9546paginaPrincipalCode_9546GDBOTON_95959595NEXTObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Introduccion", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BOTON_NEXT"), gdjs.paginaPrincipalCode.GDBOTON_9595NEXTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.paginaPrincipalCode.GDBOTON_9595NEXTObjects1.length;i<l;++i) {
    if ( gdjs.paginaPrincipalCode.GDBOTON_9595NEXTObjects1[i].getTimerElapsedTimeInSecondsOrNaN("iniciar") >= 6 ) {
        isConditionTrue_0 = true;
        gdjs.paginaPrincipalCode.GDBOTON_9595NEXTObjects1[k] = gdjs.paginaPrincipalCode.GDBOTON_9595NEXTObjects1[i];
        ++k;
    }
}
gdjs.paginaPrincipalCode.GDBOTON_9595NEXTObjects1.length = k;
if (isConditionTrue_0) {
}

}


};

gdjs.paginaPrincipalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.paginaPrincipalCode.GDescenaObjects1.length = 0;
gdjs.paginaPrincipalCode.GDescenaObjects2.length = 0;
gdjs.paginaPrincipalCode.GDpersonajeObjects1.length = 0;
gdjs.paginaPrincipalCode.GDpersonajeObjects2.length = 0;
gdjs.paginaPrincipalCode.GDNewBitmapTextObjects1.length = 0;
gdjs.paginaPrincipalCode.GDNewBitmapTextObjects2.length = 0;
gdjs.paginaPrincipalCode.GDCUADRO_9595DIALOGOObjects1.length = 0;
gdjs.paginaPrincipalCode.GDCUADRO_9595DIALOGOObjects2.length = 0;
gdjs.paginaPrincipalCode.GDBOTON_9595NEXTObjects1.length = 0;
gdjs.paginaPrincipalCode.GDBOTON_9595NEXTObjects2.length = 0;
gdjs.paginaPrincipalCode.GDGASEOSAObjects1.length = 0;
gdjs.paginaPrincipalCode.GDGASEOSAObjects2.length = 0;
gdjs.paginaPrincipalCode.GDAGUAObjects1.length = 0;
gdjs.paginaPrincipalCode.GDAGUAObjects2.length = 0;
gdjs.paginaPrincipalCode.GDJUGOObjects1.length = 0;
gdjs.paginaPrincipalCode.GDJUGOObjects2.length = 0;
gdjs.paginaPrincipalCode.GDBOTON_9595ATRASObjects1.length = 0;
gdjs.paginaPrincipalCode.GDBOTON_9595ATRASObjects2.length = 0;
gdjs.paginaPrincipalCode.GDBOTON_9595ADQUIRIRObjects1.length = 0;
gdjs.paginaPrincipalCode.GDBOTON_9595ADQUIRIRObjects2.length = 0;

gdjs.paginaPrincipalCode.eventsList0(runtimeScene);
gdjs.paginaPrincipalCode.GDescenaObjects1.length = 0;
gdjs.paginaPrincipalCode.GDescenaObjects2.length = 0;
gdjs.paginaPrincipalCode.GDpersonajeObjects1.length = 0;
gdjs.paginaPrincipalCode.GDpersonajeObjects2.length = 0;
gdjs.paginaPrincipalCode.GDNewBitmapTextObjects1.length = 0;
gdjs.paginaPrincipalCode.GDNewBitmapTextObjects2.length = 0;
gdjs.paginaPrincipalCode.GDCUADRO_9595DIALOGOObjects1.length = 0;
gdjs.paginaPrincipalCode.GDCUADRO_9595DIALOGOObjects2.length = 0;
gdjs.paginaPrincipalCode.GDBOTON_9595NEXTObjects1.length = 0;
gdjs.paginaPrincipalCode.GDBOTON_9595NEXTObjects2.length = 0;
gdjs.paginaPrincipalCode.GDGASEOSAObjects1.length = 0;
gdjs.paginaPrincipalCode.GDGASEOSAObjects2.length = 0;
gdjs.paginaPrincipalCode.GDAGUAObjects1.length = 0;
gdjs.paginaPrincipalCode.GDAGUAObjects2.length = 0;
gdjs.paginaPrincipalCode.GDJUGOObjects1.length = 0;
gdjs.paginaPrincipalCode.GDJUGOObjects2.length = 0;
gdjs.paginaPrincipalCode.GDBOTON_9595ATRASObjects1.length = 0;
gdjs.paginaPrincipalCode.GDBOTON_9595ATRASObjects2.length = 0;
gdjs.paginaPrincipalCode.GDBOTON_9595ADQUIRIRObjects1.length = 0;
gdjs.paginaPrincipalCode.GDBOTON_9595ADQUIRIRObjects2.length = 0;


return;

}

gdjs['paginaPrincipalCode'] = gdjs.paginaPrincipalCode;
