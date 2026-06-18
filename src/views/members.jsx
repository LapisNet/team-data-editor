import cat from '../libs/cat'
import MemberProfile from '../components/member'
import { effect } from 'mettle'
import { isMobile } from '../libs/utils'

export default function Members() {
    var members = $signal([])
    const agent = 'https://ghproxy.net/'
    cat.catRepo('src/members.json', agent)
      .then(data => {
        members = data
      })
      .catch(error => {
        console.error(error)
      })

    return <>
      <h3>成员列表 Members （点击信息进行编辑，低技术力勿喷）</h3>
      <div class={isMobile() ? 'flex two' : 'flex three'}>
        {members.map(member => <div>{MemberProfile(member)()}</div>)}
      </div>
      <button class='success kongge'>保存修改到本地</button>
      <button class='warning'>提交修改 （需Github的ApiKey）</button>
    </>
}