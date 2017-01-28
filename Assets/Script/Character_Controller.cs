using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Character_Controller : MonoBehaviour 
{
//	private Rigidbody rb;

	void Start () 
	{
//		rb = GetComponent<Rigidbody>();
	}
	
	// Update is called once per frame
	void FixedUpdate ()
	{
//		float moveVertical = Input.GetAxis("Vertical");
//		float moveHorizontal = Input.GetAxis ("Horizontal");

//		Vector3 movement = new Vector3 (moveHorizontal, 0.0f, moveVertical);


//		rb.AddForce (movement);

		GameObject BezierPath = GameObject.Find("BezierPath");
		//BezierPath.GetComponent<BezierPath>().BezierPath.GetPositionByDistance (Time.time/100);
		//Vector3 position = BezierScript.BezierPath.GetPositionByDistance (Time.time/100);

		transform.position = BezierPath.GetComponent<BezierPath>().GetPositionByDistance(Time.time*10);
	}
}
 