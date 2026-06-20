import Project2 from "../libs/project2"

export default function ProjectProfile(proj) {
    var project = new Project2(proj)
    var {data} = project
    return <div>
            <article class='card project'>
            <div class='avatar cover'>
                <img src={data.cover} class='image' />
            </div>
            <footer>
                <h3>
                    <span class='role kongge'>
                        <span class='bi-git kongge'></span>
                        <>{data.repo}</>
                    </span>
                    <>{project.getName().current}</>
                </h3>
                <div>
                    <span class='dark kongge'>
                        <> 旧称：</>
                        <>{project.getName().previous}</>
                    </span>
                    <br/>
                    <>{data.desc}</>
                    <div>
                        <>项目目标：</>
                        <>{data.target}</>
                    </div>
                    <div>
                    <span class='role'>
                            <>下次更新（预估）：</>
                            <>{data.next_release_at}</>
                        </span>
                    </div>
                </div>
            </footer>
        </article>
    </div>
}