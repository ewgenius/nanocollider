import * as THREE from 'three'
import {Scene, WebGLRenderer, PerspectiveCamera} from 'three'

function main() {
  const renderer = new WebGLRenderer({
    canvas: document.getElementById('canvas') as HTMLCanvasElement
  })
  const scene = new Scene
  const camera = new PerspectiveCamera(65, 800 / 600, 1, 10000)

  requestAnimationFrame(() => {
    renderer.render(scene, camera)
  })
}

main()