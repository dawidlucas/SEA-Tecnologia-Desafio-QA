import { faker } from '@faker-js/faker'

export const usuario = () => ({
    nome: faker.person.firstName({ sex: 'male' })
})