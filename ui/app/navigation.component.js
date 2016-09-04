
const template = `
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header" ui-sref-active=="active">
        <a href="/feed/top" class="navbar-brand">GitHunt</a>
      </div>

      <ul class="nav navbar-nav">
        <li ui-sref-active=="active">
          <a
            title="Top"
            ui-sref="feed({type:'top'})">
            Top
          </a>
        </li>
        <li ui-sref-active="active">
          <a
            title="New"
            ui-sref="feed({type:'new'})">
            New
          </a>
        </li>
      </ul>

      <profile></profile>
    </div>
  </nav>
  `;


const Navigation = {
    template,
    controller: class navigation {
        constructor() {}
    }
};

export default Navigation;