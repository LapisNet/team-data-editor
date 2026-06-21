import { isMobile } from "../libs/utils"

export default function ToolBar({buttons, length}) {
    // 谁知道这里出了多么诡异的bug
    var len = `当前列表共有 ${length} 个项目`
    return <div>
        <article class='card'>
            <header>
                <h4>工具栏</h4>
            </header>
            <footer>
                <div class={isMobile() ? 'flex one' : 'flex five center'}>
                    {(buttons || []).map(btn => (
                        <button class={btn.class} data-tooltip={btn.name} onClick={btn.click}>
                            <span class={'bi-' + btn.icon}></span>
                            <span>{' ' + btn.name}</span>
                        </button>
                    ))}
                </div>
                <span>{len}</span>
            </footer>
        </article>
    </div>
}