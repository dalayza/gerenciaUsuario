class Fetch {

    static get(url, params = {}) {// pasar el metodo

        return Fetch.request('GET', url, params);

    }

    static delete(url, params = {}) {// pasar el metodo

        return Fetch.request('DELETE', url, params);

    }

    static put(url, params = {}) {// pasar el metodo

        return Fetch.request('PUT', url, params);

    }

    static post(url, params = {}) {// pasar el metodo

        return Fetch.request('POST', url, params);

    }


    static request(method, url, params = {}) {

        return new Promise((resolve, reject) => { // promise que retorna

            let request;

            // verifica si es metodo GET no tiene body
            switch(method.ToLowerCase()) {

                case 'GET':
                    request = url;
                    break;
                
                default: 
                    request = new Request(url, {
        
                        method,
                        body: JSON.stringify(params),
                        headers: new Headers({
        
                            'COntent-Type': 'application/json'
        
                        })
        
                    });

            }

            fetch(request).then(response => {

                response.json().then(json => {

                    resolve(json);

                }).catch(e => {

                    reject(e);

                });

            }).catch(e => {

                reject(e);

            });;

        });

    }

}