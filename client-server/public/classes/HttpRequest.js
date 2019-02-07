class HttpRequest {

    static get(url, params = {}) {// pasar el metodo

        return HttpRequest.request('GET', url, params);

    }

    static delete(url, params = {}) {// pasar el metodo

        return HttpRequest.request('DELETE', url, params);

    }

    static put(url, params = {}) {// pasar el metodo

        return HttpRequest.request('PUT', url, params);

    }

    static post(url, params = {}) {// pasar el metodo

        return HttpRequest.request('POST', url, params);

    }


    static request(method, url, param = {}) {

        return new Promise((resolve, reject) => { // promise que retorna

            let ajax = new XMLHttpRequest;

            ajax.open(method.toUpperCase(), url);

            ajax.onerror = event => {
    
                reject(e);

            };
    
            ajax.onload = event => { // configura evento de respuesta
    
                let obj = {};
    
                try { // validar si es JSON valido
    
                    obj = JSON.parse(ajax.responseText);
    
                } catch(e) {
    
                    reject(e);

                    console.error(e);
    
                }

                resolve(obj);
    
            };
    
            ajax.send(); // llama a la solicitud ajax

        });

    }

}