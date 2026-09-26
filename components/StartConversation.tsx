export function StartConversation(){
  return <section id="start" className="start surface-black section-pad">
    <div className="redline-start" aria-hidden="true"/><div className="eyebrow">08 / START</div><h2 className="display-xl">Your home starts<br/>with a <em>line.</em></h2>
    <form className="start-form" action="#" method="post">
      <label><span>Your name</span><input name="name" autoComplete="name" placeholder="Name"/></label>
      <label><span>Where are you planning to build?</span><input name="location" autoComplete="address-level2" placeholder="Suburb or area"/></label>
      <label><span>What are you considering?</span><select name="project" defaultValue=""><option value="" disabled>Select a path</option><option>Custom home</option><option>Knockdown rebuild</option><option>House & land</option><option>Extension / renovation</option><option>Not sure yet</option></select></label>
      <label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com"/></label>
      <button type="submit" className="submit-cta">START A CONVERSATION <span>↗</span></button>
    </form>
    <p className="form-note">Prototype form only — production submission will be connected to Wolco&apos;s chosen CRM/email workflow.</p>
  </section>;
}
