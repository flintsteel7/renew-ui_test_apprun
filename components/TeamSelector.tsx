import app from 'apprun';
import './../styles/TeamSelector.css'

const TeamSelector = ({active_team, drop_down_visibility, available_teams}) => {
  const drop_down_style = {
    visibility: `${drop_down_visibility}`,
  }

  return (
    <div>
      <p className="team-selector" onclick={() => app.run("toggle_team_selector_drop_down")}>{active_team}</p>
      <ul className="team-selector-list" style={drop_down_style}>
        {available_teams.map(team => {
            return (
              <li onclick={event => console.log(event)}>{team}</li>
            )
          }
        )}
      </ul>
    </div>
  )
}


export default TeamSelector

