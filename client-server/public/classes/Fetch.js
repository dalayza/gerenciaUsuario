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

            let request;

            // verifica si es metodo GET no tiene body
            switch(method) {

                case 'GET':
                    request = url;
                    break;
                
                default: 
                    request = new Request(url, {
        
                        method: method,
                        body: JSON.stringify(params),
                        headers: new Headers({
        
                            'Content-Type': 'application/json'
        
                        })
        
                    });

            }


            return new Promise((resolve, reject) => { // promise que retorna

                fetch(request).then(response => {

                    response.json().then(json => {

                        resolve(json);

                    }).catch(e => {

                        reject(e);

                    });
                
                });

            }).catch(e => {

                reject(e);

            });

    }

}