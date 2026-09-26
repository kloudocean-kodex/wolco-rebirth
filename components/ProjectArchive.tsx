const projects=[
{id:"W / 001",place:"MELBOURNE NORTH",title:"Built around\nthe way you live.",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2200&q=85"},
{id:"W / 002",place:"VICTORIA",title:"Light, proportion,\nquiet confidence.",image:"https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=2200&q=85"}];
export function ProjectArchive(){
  return <section id="projects" className="projects surface-ivory">
    <div className="section-pad project-heading"><div className="eyebrow row-between"><span>05 / BUILT BY WOLCO</span><span>SELECTED PROJECTS</span></div><h2 className="display-lg">Homes as individual<br/>as the people inside them.</h2></div>
    {projects.map(p=><article className="project" key={p.id}><div className="project-image" style={{backgroundImage:`url("${p.image}")`}}/><div className="project-shade"/><div className="project-top"><span>{p.id}</span><span>{p.place}</span></div><h3>{p.title.split("\n").map(l=><span key={l}>{l}<br/></span>)}</h3><a href="#start" className="project-link">VIEW PROJECT <span>↗</span></a></article>)}
  </section>;
}
