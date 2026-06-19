
type projetTemplate = {
    titre: string,
    description: string,
    lien: string
}

export default function Projets({titre, description, lien}:projetTemplate) {

  return (
    <div>
        <p>{titre}</p>
        <p>{description}</p>
        <p>{lien}</p>
    </div>
  )
}
