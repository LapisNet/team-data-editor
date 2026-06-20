import cat from '../libs/cat'
import MemberProfile from '../components/member'
import { effect } from 'mettle'
import { isMobile } from '../libs/utils'
import msg from '../libs/message'
import ToolBar from '../components/toolbar'
import { GITHUB_AGENT } from '../config'

export default function Members() {
    var members = $signal([])
    var loading = msg.loading('正在获取数据中...')
    cat.catRepo('src/members.json', GITHUB_AGENT)
      .then(data => {
        members = data
        loading.close()
        msg.success('数据获取成功')
      })
      .catch(error => {
        loading.close()
        msg.error('看起来出了一点小问题')
        console.error(error)
      })
    
    const emptyfunc = () => void 0
    const buttons = [
      {name: '增加成员信息', class: 'pseudo', icon: 'cloud-arrow-down', click: emptyfunc},
      {name: '保存修改到本地', class: 'pseudo', icon: 'save', click: emptyfunc},
      {name: '编辑JSON', class: 'pseudo', icon: 'filetype-json', click: emptyfunc},
      {name: '提交修改', class: 'pseudo', icon: 'cloud-arrow-up', click: emptyfunc},
    ]

    return <>
      <ToolBar length={members.length} buttons={buttons} />
      <h3><>成员列表 Members List </><span class='dark'>(点击编辑)</span></h3>
      <div class={isMobile() ? 'flex one' : 'flex four'}>
        {members.map(member => <div>{MemberProfile(member)()}</div>)}
      </div>
    </>
}