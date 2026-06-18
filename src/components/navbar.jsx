import { linkTo } from "mettle-router"

export default function Navbar(){
    return <div style='height: 30px;'>
      <nav class='demo'>
        <a class='brand' onClick={() => linkTo('/')}>
          <span>Lapis Net Data Editor</span>
        </a>
        <input id="bmenub" type="checkbox" class="show" />
        <label for="bmenub" class="burger pseudo button">&#8801;</label>
        <div class='menu'>
            <a onClick={() => linkTo('/')}>Home</a>
        </div>
      </nav>
    </div>
}