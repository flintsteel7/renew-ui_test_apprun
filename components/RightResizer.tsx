import app from 'apprun'
import {drag_horiz_resizer} from './../lib/utilities'
import './../styles/Resizers.css'

const RightResizer = () => {
  return (
    <div className="right-resizer"
         data-dragging="false"
         onmousedown={event => {
           event.target.dataset.dragging = "true"
           event.target.firstElementChild.style.display = "block"
         }}
    >
      <div className="right-resizer-mousepad"
           onmousemove={event => {
             if (event.target.parentElement.dataset.dragging === "true") {
               drag_horiz_resizer("right", window.innerWidth - event.clientX, document.querySelector("main"))
             }
           }}
           onmouseup={event => {
             event.target.parentElement.dataset.dragging = "false"
             event.target.style.display = "none"
             app.run(
               "resize_panel",
               "right_panel_width",
               window.innerWidth - event.clientX
             )
           }}
      />
    </div>
  )
}

export default RightResizer
