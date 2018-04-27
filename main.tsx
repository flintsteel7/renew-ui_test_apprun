import app from 'apprun';
import TeamSelector from './components/TeamSelector';
import FarLeftPanel from './components/FarLeftPanel';
import FarLeftResizer from './components/FarLeftResizer';
import {toggle_visibility} from './lib/utilities'
import './styles/main.css'

app.on('debug', p => console.log(p));

const model = {
  active_team: "Wordsearch",
  available_teams: [
    "Wordsearch",
    "PET",
  ],
  app_layout: {
    far_left_panel_width: "197",
    far_left_chat_menu_height: "297px",
    left_panel_width: "297px",
    right_panel_width: "297px",
    right_console_height: "347px",
  }
}

const view = state => {
  const style = {
    "grid-template-columns": `${state.app_layout.far_left_panel_width}px 3px ${state.app_layout.left_panel_width} 3px auto 3px ${state.app_layout.right_panel_width}`,
  }

  return (
    <main style={style}>
      <TeamSelector
        active_team={state.active_team}
        available_teams={state.available_teams}
      />
      <FarLeftPanel />
      <FarLeftResizer
        far_left_panel_width={state.app_layout.far_left_panel_width}
      />
      <div className="left-panel">
      </div>
      <div className="left-resizer">
      </div>
      <div className="top-info">
      </div>
      <div className="workspace">
        <h1>Renew</h1>
      </div>
      <div className="right-resizer">
      </div>
      <div className="user">
      </div>
      <div className="right-panel">
      </div>
    </main>
  )
}

const update = {
  "select_team": (state, team_selected: string, active_team_text: HTMLElement, drop_down: HTMLElement) => {
    active_team_text.style.color = "gainsboro"
    toggle_visibility(drop_down)
    return {...state, active_team: team_selected}
  },
  "resize_panel": (state, panel: string, x: number) => {
    let new_app_layout = state.app_layout
    new_app_layout[panel] = x.toString()
    return {...state, app_layout: new_app_layout}
  }
}

app.start('app', model, view, update)
