import AOS from "aos";
 
import "aos/dist/aos.css";
 
export default ({ app }) => {
  app.AOS = AOS.init({
    once: false,
  })

  window.addEventListener('load', function() {
    AOS.refresh();
  });
  
}