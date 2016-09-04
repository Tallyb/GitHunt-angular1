
const template  = `
    <div>
      <navigation></navigation>
      <div class="container">
        <ui-view></ui-view>
      </div>
    </div>
  `;


const GitHunt = {
    template,
    controller: class gitHunt {
        constructor(){

        }
    }
};

export default GitHunt;
