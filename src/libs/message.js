import msg from '@yaohaixiao/message.js/message'

const config = {
    customClass: 'top-layer',
    duration: 1
}

function loading(text) {
    return msg.info({...config, message: text, duration: 0})
}

function success(text) {
    return msg.success({...config, message: text})
}

function error(text) {
    return msg.error({...config, message: text})
}

function warn(text) {
    msg.warning({...config, message: text})
}

export default {config, loading, success, error, warn}