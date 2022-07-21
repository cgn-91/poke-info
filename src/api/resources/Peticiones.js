import Resource from './Resource'

class PeticionesResource extends Resource {
  async getPokemon (id) {
    return this.axios.get('/pokemon/', id).then(response => response.data).catch(error => error)
  }
}

export default new PeticionesResource()
