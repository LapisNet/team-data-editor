import { linkTo } from 'mettle-router';

export default function Home() {
  const editors = [
    {title: 'Members', description: 'LapisNet 成员数据', linkTo: '/members'},
    {title: 'Projects', description: 'LapisNet 项目数据', linkTo: '/projects'},
    {title: 'Github', description: 'LapisNet 官方Github', hrefTo: 'https://github.com/LapisNet'}
  ]
  return <>
   <h3>编辑 LapisNet 组织数据</h3>
   <div class='flex two'>
   {editors.map((editor) => (
      <div style='padding:0.5em'>
        <article class='card'>
          <header><h3 onClick={() => editor.hrefTo ? window.open(editor.hrefTo) : linkTo(editor.linkTo)}>{editor.title}</h3></header>
          <footer>{editor.description}</footer>
        </article>
      </div>
    ))}
    </div>
  </>
}
