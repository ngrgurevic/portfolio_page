import Pdf from '../images/documents/Nikola_Grgurević_CV.pdf';
import React,{Component} from 'react'

class Download extends Component {

    render() {
        return(
            <a href = {Pdf} target = "CV">Download my CV</a>
        )
    }
  }
  
  export default Download;