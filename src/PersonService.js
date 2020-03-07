import Configuration from './Configuration';
class PersonService
{
    constructor() {
        this.config = new Configuration();
    }

    async getAllPeople() {
        try {            
            const response = await fetch(this.config.ITEM_COLLECTION_URL);
            const peopleJson = await response.json();
            console.log("People: ",peopleJson);
            return peopleJson;
      
          } catch (err) {            
            console.error(err);
          }

        /*return fetch(this.config.ITEM_COLLECTION_URL)
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                console.log("JSON: ",response.json());
                return response.json();
            })            
            .catch(error => {
                this.handleError(error);
            });*/
    }

    async getPerson(id) 
    {        
        return fetch(this.config.ITEM_COLLECTION_URL+id,{
            method:'GET'
        })
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    async createPerson(person)
     {
        return fetch(this.config.ITEM_COLLECTION_URL+'create', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(person)
        })
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    async deletePerson(id)
    {        
        return fetch(this.config.ITEM_COLLECTION_URL+id, {
            method: "DELETE",            
        })
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    async updatePerson(item) 
    {        
        return fetch(item.link, {
            method: "PUT",            
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    handleResponseError(response) {
        throw new Error("HTTP error, status = " + response.status);
    }

    handleError(error) {
        console.log(error.message);
    }
}
export default PersonService;