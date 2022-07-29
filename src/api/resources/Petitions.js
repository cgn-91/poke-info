import Resource from './Resource'

class PetitionsResource extends Resource {
  async getPokemon (id) {
    return this.axios.get('/pokemon/' + id).then(response => response.data).catch(error => error)
  }

  async getGenerations () {
    return this.axios.get('/generation').then(response => response.data).catch(error => error)
  }

  async getGeneration (id) {
    return this.axios.get('/generation/' + id).then(response => response.data).catch(error => error)
  }
}

export default new PetitionsResource()
