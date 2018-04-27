import app from 'apprun';
import TeamSelector from './components/TeamSelector';
import {toggle_visibility} from './lib/utilities'
import './styles/main.css'

app.on('debug', p => console.log(p));

const model = {
  active_team: "Wordsearch",
  available_teams: [
    "Wordsearch",
    "PET",
  ],
}

const view = state => (
  <main>
    <TeamSelector
      active_team={state.active_team}
      available_teams={state.available_teams}
    />
    <div className="far-left-panel">
    </div>
    <div className="chat-menu">
    </div>
    <div className="left-panel">
    </div>
    <div className="top-info">
    </div>
    <div className="workspace">
      <h1>Renew</h1>
    </div>
    <div className="user">
    </div>
    <div className="tools">
    </div>
    <div className="console">
    </div>
  </main>
)

const update = {
  "select_team": (state, team_selected, active_team_text, drop_down) => {
    active_team_text.style.color = "gainsboro"
    toggle_visibility(drop_down)
    return {...state, active_team: team_selected}
  }
}

app.start('app', model, view, update)
