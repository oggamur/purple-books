const users = [
  { id: 1, name: 'Вася' },
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
]

const uniqIds = new Set()
const usersUniq = []

users.map(({ id }) => {
  if (!uniqIds.has(id)) {
    uniqIds.add(id)

    usersUniq.push(users.find((user) => user.id === id))
  }
})

console.log(usersUniq)
