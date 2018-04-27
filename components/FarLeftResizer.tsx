import app from 'apprun'
import {drag_horiz_resizer} from './../lib/utilities'

const FarLeftResizer = ({far_left_panel_width}) => {
  return (
    <div className="far-left-resizer"
         data-dragging="false"
         onmousedown={event => {
           const dragbar = event.target
           dragbar.dataset.dragging = "true"
           // dragbar.requestPointerLock = dragbar.requestPointerLock ||
           //                              dragbar.mozRequestPointerLock
           dragbar.requestPointerLock()
         }}
         onmousemove={event => {
           if (event.target.dataset.dragging === "true") {
             console.log(far_left_panel_width)
             console.log(event.movementX)
             // drag_horiz_resizer("far-left", event.clientX + event.movementX, document.querySelector("main"))
             app.run(
               "resize_panel",
               "far_left_panel_width",
               parseInt(far_left_panel_width) + event.movementX
             )
           }
         }}
         onmouseup={event => {
           event.target.dataset.dragging = "false"
           document.exitPointerLock()
           // app.run(
           //   "resize_panel",
           //   "far_left_panel_width",
           //   far_left_panel_width + event.movementX
           // )
         }}
    />
  )
}

export default FarLeftResizer
