// import axios from '@nuxtjs/axios'

const HttpRequest =  {
    // post(resourceHttpRequest){
    //     const {url, data} = resourceHttpRequest
    //     return this.$axios.post(url, data)
    // }
    get() {
        return console.log(this.$axios)
    },
    put(resourceHttpRequest) {
        return console.log("put axios", resourceHttpRequest)
    },
    post(url, data) {
        // return $axios.post(url, data)
        return console.log(url, data)
    }
}

export default HttpRequest;

// function HttpRequest() {
//     const data = 'asdasd'
//     return console.log(data)
// }

// export default HttpRequest;