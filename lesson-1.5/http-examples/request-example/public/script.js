const xhrLi = document.querySelector('.xhr')
const axiosLi = document.querySelector('.axios')
const fetchLi = document.querySelector('.fetch')

/**
 * @type {XMLHttpRequest}
 * Использование стандартной библиотеки, громозкий способ, почти не используется
 * Не удобен, для http методов необходимо их указывать явно
 */
const xhr = new XMLHttpRequest()

xhr.open('GET', '/api/message')
xhr.send()

xhr.onload = () => {
    xhrLi.textContent = `XMLHttpRequest: ${JSON.parse(xhr.response).message}`
}

xhr.onerror = () => {
    xhrLi.textContent = 'XMLHttpRequest: fail'
}

/**
 * Использование библиотеки axios
 * Используются Promise'ы
 * Как по мне, самый удобный способ, для http методов используятся методы объекта axios
 */
axios.get('/api/message')
    .then(response => {
        axiosLi.textContent = `axios: ${response.data.message}`
    })
    .catch(error => {
        axiosLi.textContent = 'axios: fail'
    })

/**
 * Использование стандартной библиотеки, самый современный способ
 * Используются Promise'ы
 * для http методов также необходимо указывать их явно
 */
fetch('/api/message', { method: 'GET' })
    .then(response => {
        /**
         * На мое удивление, для получения тела ответа также используются Promise'ы
         */
        response.json()
            .then(body => {
                fetchLi.textContent = `fetch: ${body.message}`
            })
    })
    .catch(error => {
        fetchLi.textContent = 'fetch: fail'
    })