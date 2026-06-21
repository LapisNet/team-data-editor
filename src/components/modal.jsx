export default function Modal({title, content, onSubmit, to}) {
    var id = 'modal' + parseInt(Math.random() * 1000)

    function toggle() {
        var checkbox = document.getElementById(id)
        checkbox.checked = !checkbox.checked
    }

    to = {toggle}

    return <div class='modal'>
        <input id={id} type='checkbox' />
        <label for={id} class='overlay'></label>
        <article>
            <header>
                <h3>{title}</h3>
                <label for={id} class="close">&times;</label>
            </header>
            <section class='content'>
                <content />
            </section>
            <footer>
                <button>确定</button>
                <label for={id} class="button dangerous">
                    关闭
                </label>
            </footer>
        </article>
    </div>
}