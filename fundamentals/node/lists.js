const { obterPessoas } = require('./service')

async function main() {
  try {
    const { results } = await obterPessoas('a')

    /*
        const familyLors = results.filter(element => {
          return element.name.toLowerCase().indexOf('lars') !== -1
        }).map(person =>
          person.name)
    
        const height = results.map(element => parseInt(element.height)).reduce((total, prev) => total + prev)
        console.log(height)
    */
    /*
    //const names = []
    
    console.time('for')
    for (let i = 0; i <= result.results.length - 1; i++) {
      const pessoa = result.results[i]
      names.push(pessoa.name)
    }
    console.timeEnd('for')

    console.time('forIn')
    for (let i in result.results) {
      const pessoa = result.results[i]
      names.push(pessoa.name)
    }
    console.timeEnd('forIn')

    console.time('forOf')
    for (pessoa of result.results) {
      names.push(pessoa.name)
    }
    console.timeEnd('forOf')
    
    console.time('map')
    const names = response.results.map(element => element.name)
    console.timeEnd('map')
    
    */

  } catch (err) {
    console.error("erro interno", err)
  }
}
main()