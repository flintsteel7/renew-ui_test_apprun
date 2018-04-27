import app from 'apprun'
import {toggle_visibility} from './../lib/utilities'
import './../styles/TeamSelector.css'

const TeamSelector = ({active_team, available_teams}) => {
  return (
    <div className="team-selector">
      <p className="active-team"
         onclick={(event) => show_team_selector_list(event.srcElement)}
         title="Active Team">
        {active_team}
      </p>
      <ul className="team-selector-list">
        {available_teams.map(team => {
            return (
              <li className="team-option" onclick={event => app.run(
                "select_team",
                event.srcElement.innerHTML,
                document.querySelector(".active-team"),
                document.querySelector(".team-selector-list")
              )}>{team}</li>
            )
          }
        )}
      </ul>
    </div>
  )
}

const show_team_selector_list = (active_team) => {
  active_team.innerHTML = "Select Team"
  active_team.style.color = "#4B4F61"
  toggle_visibility(document.querySelector(".team-selector-list"))
}

export default TeamSelector

