import { decode, encode } from "js-base64"
import { catJson } from '../libs/cat'
import { GITHUB_TOKEN } from "../config"

// A Virtue FileSystem Writen By LoveKogasa
class VirtueFS {
    key = 'fs'
    content = new Map()
    base = 'vfs://localhost:114514/'
    github = 'https://api.github.com/repos/'
    constructor() {
        this.load()
    }
    load() {
        this.content = new Map(localStorage.getItem(this.key))
        return this
    }
    save() {
        localStorage.setItem(this.key, Array.from(this.content))
        return this
    }
    write(path, data) {
        this.content.set(new URL(path, this.base).href, encode(data))
        return this
    }
    read(path, base64 = false) {
        var content = this.content.get(new URL(path, this.base))
        return base64 ? content : decode(content)
    }
    async upload(repo, local, target) {
        var content = this.read(local, true)
        var api = new URL(target, this.github + repo + '/contents')
        var {sha} = await catJson(api)
        var message = 'File Change From Data Editor'
        var res = await fetch(api, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GITHUB_TOKEN
            },
            method: 'PUT',
            body: JSON.stringify({sha, content, message})
        })
        var body = await res.json()
        if(res.status >= 300) {
            throw new Error(res.status + ' : ' + res.statusText)
        }
        return body
    }
}