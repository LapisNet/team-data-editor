import ProjectProfile from "../components/project"
import msg from "../libs/message"
import { isMobile } from "../libs/utils"
import cat from "../libs/cat"
import ToolBar from "../components/toolbar"
import { computed, domInfo } from "mettle"
import { GITHUB_AGENT } from "../config"

export default function Projects() {
    var projects = $signal([])
    const agent = GITHUB_AGENT
    var loading = msg.loading('正在获取数据...')
    cat.catRepo('src/projects2.jsonc', agent)
        .then(datas => {
            projects = datas
            loading.close()
            msg.success('数据获取成功')
        })
        .catch(error => {
            msg.error('看起来出了一点小问题')
        })
    
    const emptyfunc = () => void 0
    const buttons = [
      {name: '增加项目信息', class: 'pseudo', icon: 'cloud-arrow-down', click: emptyfunc},
      {name: '保存修改到本地', class: 'pseudo', icon: 'save', click: emptyfunc},
      {name: '编辑JSON', class: 'pseudo', icon: 'filetype-json', click: emptyfunc},
      {name: '提交修改', class: 'pseudo', icon: 'cloud-arrow-up', click: emptyfunc},
    ]

    return <>
        <ToolBar length={projects.length} buttons={buttons} />
        <h3 onClick={() => obj.push('Fuck')}>
            <>项目列表 ProjectList</>
            <span class='dark'>(点击编辑)</span>
        </h3>
        <div class={isMobile() ? 'flex one' : 'flex three'}>
            {projects.map(proj => ProjectProfile(proj)())}
        </div>
    </>
}