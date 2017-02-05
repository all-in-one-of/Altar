import System.Collections.Generic;
class GeoPainterGroup extends MonoBehaviour
{
	var myLibraryBuiltIn : GameObject[] ;
	var rndSeed : int = 1;

	@SerializeField
	var myPointsList : List.<GeoPainterPoint> = new List.<GeoPainterPoint>();

	var objProb: List.<float> = new List.<float>([1.0f]);

	var objPosOff: List.<Vector3> = new List.<Vector3>([new Vector3(0.0f, 0.0f, 0.0f)]);
	var objPosNoise: List.<Vector3> = new List.<Vector3>([new Vector3(0.0f, 0.0f, 0.0f)]);
	var objRotOff: List.<Vector3> = new List.<Vector3>([new Vector3(0.0f, 0.0f, 0.0f)]);
	var objRotNoise: List.<Vector3> = new List.<Vector3>([new Vector3(0.0f, 0.0f, 0.0f)]);
	var objScaleOff: List.<Vector3> = new List.<Vector3>([new Vector3(0.0f, 0.0f, 0.0f)]);
	var objScaleNoise: List.<Vector3> = new List.<Vector3>([new Vector3(0.0f, 0.0f, 0.0f)]);
	var objScaleUniform: List.<boolean> = new List.<boolean>([false]);

	//Position
	var offPosX : float = 0.0;
	var offPosY : float = 0.0;
	var offPosZ : float = 0.0;
	var rndPosMinX : float = 0.0;
	var rndPosMinY : float = 0.0;
	var rndPosMinZ : float = 0.0;
	var rndPosMaxX : float = 0.0;
	var rndPosMaxY : float = 0.0;
	var rndPosMaxZ : float = 0.0;
	
	//Rotation
	var offRotX : float = 0.0;
	var offRotY : float = 0.0;
	var offRotZ : float = 0.0;
	var rndRotMinX : float = 0.0;
	var rndRotMinY : float = 0.0;
	var rndRotMinZ : float = 0.0;
	var rndRotMaxX : float = 0.0;
	var rndRotMaxY : float = 0.0;
	var rndRotMaxZ : float = 0.0;
	
	//Scale
	var scaleUniform = false;
	var offSclX : float = 0.0;
	var offSclY : float = 0.0;
	var offSclZ : float = 0.0;
	var rndSclMinX : float = 0.0;
	var rndSclMinY : float = 0.0;
	var rndSclMinZ : float = 0.0;
	var rndSclMaxX : float = 0.0;
	var rndSclMaxY : float = 0.0;
	var rndSclMaxZ : float = 0.0;
	
	
	function addObject(_go : GameObject, _pos : Vector3, _scale : Vector3, _normal : Vector3, _useNormal : boolean, objNum: int)
	{
		var myNewPoint : GeoPainterPoint = new GeoPainterPoint();
		myNewPoint.go = _go;
		myNewPoint.pos = _pos;
		myNewPoint.scale = _scale;
		myNewPoint.normal = _normal;
		myNewPoint.useNormal = _useNormal;
		myNewPoint.objNum = objNum;
		myPointsList.Add(myNewPoint);
	}
	
	
}