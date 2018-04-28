import app from 'apprun'
import {drag_horiz_resizer} from './../lib/utilities'
import './../styles/Resizers.css'

const LeftResizer = ({far_left_panel_width}) => {
  return (
    <div className="left-resizer"
         data-dragging="false"
         onmousedown={event => {
           event.target.dataset.dragging = "true"
           event.target.firstElementChild.style.display = "block"
         }}
    >
      <div className="left-resizer-mousepad"
           onmousemove={event => {
             if (event.target.parentElement.dataset.dragging === "true") {
               drag_horiz_resizer("left", event.clientX - far_left_panel_width, document.querySelector("main"))
             }
           }}
           onmouseup={event => {
             event.target.parentElement.dataset.dragging = "false"
             event.target.style.display = "none"
             app.run(
               "resize_panel",
               "left_panel_width",
               event.clientX - far_left_panel_width
             )
           }}
      />
    </div>
  )
}

export default LeftResizer
