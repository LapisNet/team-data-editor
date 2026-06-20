import json5 from "json5"

async function cat(url){
    return await (await fetch(url)).text()
}

async function catJson(url) {
    return json5.parse(await cat(url))
}

async function catRepo(file, agent = '') {
    const repo = 'LapisNet/.public_data/'
    const branch = 'main/'
    const raw = 'https://raw.githubusercontent.com/'
    return await catJson(new URL(file, agent + raw + repo + branch))
}

export default {cat, catJson, catRepo}