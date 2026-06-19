import { linkTo } from 'mettle-router';
import { isMobile } from '../libs/utils';

export default function Home() {
  const editors = [
    {title: 'Members', description: 'LapisNet 成员数据', linkTo: '/members', icon: 'people'},
    {title: 'Projects', description: 'LapisNet 项目数据', linkTo: '/projects', icon: 'box'},
    {title: 'Github', description: 'LapisNet 官方Github', hrefTo: 'https://github.com/LapisNet', icon: 'github'}
  ]
  return <>
   <h3>编辑 LapisNet 组织数据</h3>
   <div class={isMobile() ? 'flex two' : 'flex three'}>
   {editors.map((editor) => (
      <div class='padding-auto'>
        <article class='card'>
          <header>
            <h3 onClick={() => editor.hrefTo ? window.open(editor.hrefTo) : linkTo(editor.linkTo)}>
              <span class={'bi-' + editor.icon}></span>
              <>{' ' + editor.title}</>
            </h3>
          </header>
          <footer>{editor.description}</footer>
        </article>
      </div>
    ))}
    </div>
  </>
}
