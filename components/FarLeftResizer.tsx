import app from 'apprun'
import {drag_horiz_resizer} from './../lib/utilities'
import './../styles/FarLeftResizer.css'

const FarLeftResizer = () => {
  return (
    <div className="far-left-resizer"
         data-dragging="false"
         onmousedown={event => {
           event.target.dataset.dragging = "true"
           event.target.firstElementChild.style.display = "block"
         }}
    >
      <div className="far-left-resizer-mousepad"
           onmousemove={event => {
             if (event.target.parentElement.dataset.dragging === "true") {
               drag_horiz_resizer("far-left", event.clientX, document.querySelector("main"))
             }
           }}
           onmouseup={event => {
             event.target.parentElement.dataset.dragging = "false"
             event.target.style.display = "none"
             app.run(
               "resize_panel",
               "far_left_panel_width",
               event.clientX
             )
           }}
      />
    </div>
  )
}

export default FarLeftResizer
