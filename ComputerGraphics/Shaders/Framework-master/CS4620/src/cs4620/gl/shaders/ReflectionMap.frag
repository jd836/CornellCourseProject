#version 120

// You May Use The Following Functions As RenderMaterial Input
// vec4 getDiffuseColor(vec2 uv)
// vec4 getNormalColor(vec2 uv)
// vec4 getSpecularColor(vec2 uv)
// veck getEnvironmetLight(veck dir)

// Lighting Information
const int MAX_LIGHTS = 16;
uniform int numLights;
uniform vec3 lightIntensity[MAX_LIGHTS];
uniform vec3 lightPosition[MAX_LIGHTS];

// Camera Information
uniform vec3 worldCam;
uniform float exposure;

varying vec3 fN; // normal at the vertex
varying vec4 worldPos; // vertex position in world coordinates

void main() {
	// TODO A4: Implement reflection mapping fragment shader
	//vec3 reflection = reflect(worldCam - worldPos.xyz, normalize(fN));
	vec3 N = normalize(fN);
	vec3 C = worldCam - worldPos.xyz;
	vec3 reflection= -C + 2 * dot(C, N) * N / dot(N, N);
	vec4 finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    finalColor = textureCube(cubeMap, reflection);
    gl_FragColor = finalColor * exposure;	
}
