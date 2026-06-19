import { linkTo } from "mettle-router"

export default function Navbar(){
    return <div style='height: 30px;'>
      <nav class='demo'>
        <a class='brand' onClick={() => linkTo('/')}>
          <span>
            <span class='bi-code-slash kongge'></span>
            <>Lapis Net Data Editor</>
          </span>
        </a>
        <input id="bmenub" type="checkbox" class="show" />
        <label for="bmenub" class="burger pseudo button">&#8801;</label>
        <div class='menu'>
            <button class='pseudo' onClick={() => window.open('https://github.com/LapisNet/team-data-editor')}>
              <span class='bi-github kongge'></span>
              <>Github</>
            </button>
            <button class='pseudo' onClick={() => linkTo('/')}>
              <span class='bi-house kongge'></span>
              <>Home</>
            </button>
        </div>
      </nav>
    </div>
}