package cs4620.ray2;

import egl.math.Color;
import egl.math.Colord;
import egl.math.Vector3d;

/**
 * This class represents a basic point light which is infinitely small and emits
 * a constant power in all directions. This is a useful idealization of a small
 * light emitter.
 *
 * @author ags
 */
public abstract class Light {
	
	
	/** How bright the light is. */
	public final Colord intensity = new Colord(Color.White);
	public void setIntensity(Colord intensity) { this.intensity.set(intensity); }
	
	/** Get direction from light to shaded point. */
	public abstract Vector3d getDirection(Vector3d point); 
	
	/**Get radius square from light to shaded point. */
	public abstract double getRSq(Vector3d point);
	
	public abstract double getShadowRayEnd(Vector3d point);
	
	/**
	 * Default constructor.  Produces a unit intensity light at the origin.
	 */
	public Light() { }
	
	/**
	 * @see Object#toString()
	 */
	public String toString() {
		
		return "light: " + intensity;
	}
}