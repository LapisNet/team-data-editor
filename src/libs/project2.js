import defaultCover from '../images/default-project-compressed.png';

export default class Project2 {
    data = {
        _status: '',
        _show: true,
        name: '该项目未被命名',
        desc: '该项目无介绍',
        cover: defaultCover,
        link: 'https://github.com/LapisNet/',
        repo: 'LapisNet/暂无',
        target: 'N/A',
        next_release_at: 'N/A', 
        leader: {
            name: '无leader'
        }
    }
    constructor(data) {
        Object.assign(this.data, data)
    }
    hasRepo() {
        return this.data.repo !== 'LapisNet/'
    }
    getName() {
        var name = {}
        if(typeof this.data.name !== 'Object') {
            name.current = this.data.name
            name.previous = '无'
        } else name = this.data.name
        return name
    }
}