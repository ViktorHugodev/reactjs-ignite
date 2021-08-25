import { RepositoryItem } from "./RepositoryItem"
const repository = {
  name: 'Repo',
  description: 'forms in React',
  link: 'https://github.com/ViktorHugodev/reactjs-ignite'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      
      <h1>Lista de repositórios</h1>
      
      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
      
    </section>
  )
}