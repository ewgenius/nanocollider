import * as THREE from 'three'
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Mesh,
  CubeGeometry,
  MeshNormalMaterial
} from 'three'

console.log(THREE)

function main() {
  const renderer = new WebGLRenderer({
    canvas: document.getElementById('canvas') as HTMLCanvasElement
  })
  const scene = new Scene
  const camera = new PerspectiveCamera(65, 800 / 600, 1, 10000)
  camera.position.y = 150
	camera.position.z = 350

  const cube = new Mesh(new CubeGeometry(100, 100, 100), new MeshNormalMaterial())
  //const cube = new Mesh

  scene.add(cube)

  requestAnimationFrame(() => {
    renderer.render(scene, camera)
  })
}

main()