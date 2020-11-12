function validate(name) {
  const arrayName = name.toLowerCase()
    .split(' ').join("").split("")

  const newName = arrayName.filter(elem => (
    elem !== 'a' && elem !== 'e' && elem !== 'i' && elem !== 'o' && elem !== 'u'
  ))

  console.log(newName.join(""))
}

validate('')

function captize(word) {
  const array = word.split(' ')

  const upperCase = array.map(word => {
    return word[0].toUpperCase() + word.substr(1)
  })
  console.log(upperCase.join(" "))

}
captize('douglas eduardo alcantara lourenco')