export function SiteFooter(){
  return <footer className="site-footer">
    <div className="footer-word">WOLCO</div>
    <div className="footer-grid">
      <div><span className="footer-label">VISIT</span><p>9/28 Longford Road<br/>Epping VIC</p></div>
      <div><span className="footer-label">EXPLORE</span><a href="#designs">Home designs</a><a href="#wow">WOW Studio</a><a href="#journey">Build journey</a></div>
      <div><span className="footer-label">CONNECT</span><a href="tel:1300163666">1300 16 36 66</a><a href="#start">Start a conversation</a></div>
    </div>
    <div className="footer-base"><span>© {new Date().getFullYear()} WOLCO HOMES</span><span>FROM LINE TO LIFE.</span></div>
  </footer>;
}
