import * as React from 'react'
import {Component} from 'react'
require('../../../src/components/ThreeView/ThreeView.scss')

import * as THREE from 'three'
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Mesh,
  CubeGeometry,
  MeshNormalMaterial
} from 'three'

export default class ThreeView extends Component<{
  canvasId?: string
}, {}> {
  static defaultProps = {
    canvasId: 'canvas'
  }

  private canvas: HTMLCanvasElement
  private renderer: WebGLRenderer
  private scene: Scene
  private camera: PerspectiveCamera

  componentDidMount() {
    this.canvas = this.refs[this.props.canvasId] as HTMLCanvasElement
    this.initThree()
  }

  initThree() {
    this.renderer = new WebGLRenderer({
      canvas: this.canvas
    })
    this.scene = new Scene()
    this.camera = new PerspectiveCamera(65, this.canvas.clientWidth / this.canvas.clientHeight, 1, 10000)

    this.camera.position.y = 150
    this.camera.position.z = 350

    const cube = new Mesh(new CubeGeometry(100, 100, 100), new MeshNormalMaterial())
    this.scene.add(cube)

    requestAnimationFrame(() => this.renderScene())

    window.addEventListener('resize', () => this.resizeScene())
  }

  resizeScene() {
    //console.log(this)
    this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return <div className='three-view'>
      <canvas ref={this.props.canvasId}></canvas>
    </div>
  }
}