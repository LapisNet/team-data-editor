import cat from '../libs/cat'
import MemberProfile from '../components/member'
import { effect } from 'mettle'
import { isMobile } from '../libs/utils'
import msg from '@yaohaixiao/message.js/message.js'

export default function Members() {
    var members = $signal([])
    var loading = msg.info({message: '正在获取数据中...', customClass: 'top-layer', duration: 0})
    const agent = 'https://ghproxy.net/'
    cat.catRepo('src/members.json', agent)
      .then(data => {
        members = data
        loading.close()
        msg.success({message: '数据获取成功', customClass: 'top-layer'})
      })
      .catch(error => {
        loading.close()
        msg.error({message: '看起来出了一点小问题', customClass: 'top-layer'})
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
      <div class='flex four center'>
        {buttons.map(btn => (
          <button class={btn.class} data-tooltip={btn.name} onClick={btn.click}>
            <span class={'bi-' + btn.icon}></span>
            <span>{' ' + btn.name}</span>
          </button>
        ))}
      </div>
      <h3><>成员列表 Members List </><span class='dark'>(点击编辑)</span></h3>
      <div class={isMobile() ? 'flex one' : 'flex four'}>
        {members.map(member => <div>{MemberProfile(member)()}</div>)}
      </div>
    </>
}