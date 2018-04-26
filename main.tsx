import app from 'apprun';
import TeamSelector from './components/TeamSelector';

app.on('debug', p => console.log(p));

const model = {
  active_team: "Wordsearch",
  team_selector: {
    available_teams: [
      "Wordsearch",
      "PET",
    ],
    drop_down: {
      visibility: "hidden"
    }
  }
};

const view = state => (<div>
  <TeamSelector
    active_team={state.active_team}
    drop_down_visibility={state.team_selector.drop_down.visibility}
    available_teams={state.team_selector.available_teams}
  />
  <h1 onclick={() => app.run("say_hello")}>Hello World!</h1>
  <p>{state.message}</p>
</div>)

const update = {
  "say_hello": state => ({...state, message: "Hello to you!"}),
  "toggle_team_selector_drop_down": state => {
    if (state.team_selector.drop_down.visibility === "hidden") {
      return ({...state, team_selector: {...state.team_selector, drop_down: {visibility: "visible"}}})
    } else {
      return ({...state, team_selector: {...state.team_selector, drop_down: {visibility: "hidden"}}})
    }
  }
};

app.start('main', model, view, update)
