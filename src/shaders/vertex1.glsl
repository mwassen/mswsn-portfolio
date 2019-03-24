precision highp float;

attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;

uniform float time;
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;


varying vec2 vUv;
varying vec3 nposition;
varying vec3 vNormal;

void main () {
	vUv = uv;

	vNormal = normal;

	vec3 offset = position;
	float dist =  (sin(time / 5.0) + 1.0) * 0.0002;

	offset.xyz += normal * dist;


	nposition = position;

	gl_Position = projectionMatrix * modelViewMatrix * vec4(offset, 1.0);
}