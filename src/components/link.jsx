import { linkTo } from "mettle-router";

// Mittle 官方 router 实在是太难用了（
export default function Link({href, text}) {
    return <a href={href.includes('://') ? href : '#' + text}>{text}</a>
}