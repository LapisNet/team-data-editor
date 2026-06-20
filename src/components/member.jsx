import defaultAvatar from '../images/default-member-compressed.png'

export default function MemberProfile(member) {
    return <article class='card'>
        <div class='avatar'><img src={member.avatar || defaultAvatar} class='image' /></div>
        <footer>
            <h3 style='white-space: nowrap; overflow: auto'>
                <span class='role'>{member.role}</span>
                <span>
                    <span>{' ' + member.name}</span>
                    <span class='dark'>{' ' + (member.aka || '')}</span>
                </span>
            </h3>
            <div>
                <div>{member.bio || '一名不普通的LapisNet成员'}</div>
                <div>{member.url ? <a style='white-space: nowrap'>{member.url}</a> : <a>无个人URL</a>}</div>
            </div>
        </footer>
    </article>
}