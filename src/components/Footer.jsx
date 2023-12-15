import FooterLogo from "./Footer.logo"
import FooterMenu from "./Footer.Menu"
import FooterCopyright from "./FooterCopyright";
function footer() {
    return (
      <div className="footer">
        <FooterLogo/>
        <FooterMenu/>
        <FooterCopyright/>
      </div>
    );
  }
  
  export default footer;