import React, {Component} from 'react'
import theImage1 from '../images/21593.jpeg'
import theImage3 from '../images/26457892_8rab.png'
import theImage2 from '../images/21599.jpeg'
import {
  Card,
  Button,
  CardTitle,
  FormGroup,
  Label,
  Input,
  FormText,
  Form,
  CardText,
  Row,
  Col,
  Modal,
  ModalBody
} from 'reactstrap';

class Home extends Component {
  render() {
    return (<div>
      <div style={{
          backgroundColor: 'rgba(0,151,201, 0.1)'
        }} className="photo-div">
        <div class="responsive" style={{
            marginTop: '20px'
          }}>
          <img style={{
              width: '350px',
              height: '350px',
              marginTop: '2em',
              objectFit: 'cover',
              border: 'solid',
              borderWidth: 'thin'
            }} src="https://lh3.googleusercontent.com/skPPQmxEE8fdm81xCVRx0IKw5laKJNRs49O9bQ0xFZiAszCAcH83dBpjNHJWZtQvCjoDfwY1FzG3pMy1bgDtz1qSFjNtNgwd5pQEfcIX9Zj0paSLDSX5CwbH244pW-cDnpWi_dnIlBaI9qL0OJ30hmVNATIJeaHMFgStdKmuGT9PwM_Il-gssizWg7ejuvMQ-Hjkf8IuspmA4rNsmCb7mKIBnp7fL09st8k1wsTDWBpcmdMyXIY_9f8pHFNb7g3Wf249iWL_hjv0X2FKAaXa_zzs-RwoxiVhYxdX3Yy-JcoWMY2QiUmpvGi0DIrZno67onJV7WeZmx8v1MHQvBYbp_uMdtp7-UhIjsj0QmzpzcwQmh4On7x50Nek_NBnpnXmZzApcpfxf9xcVnXE1eloVUHbhakc5d-f8CeHt8q_R-8p-wdegsfHOOpoNMcpEuAyZSHZzwHPnSaiYeVbA3R8jNTSWEKpV3knR5o6t7VEQ9UcjvaP4dxTIG1IaEdnUr5kjDNWOkO_3FU_Y-XrpwAd3oSXgnRvKZu0GgzLJVmAD8ZSiWrOUtD7jAyd4u9Rh6svNvNlOA-QZPyjrYB1ldTRbtFN02NY5vhB1ThDv4X8a9WRrmwwShjyXksuoJ4BPbqML86r9YBNPRuW4TRygnJuyp--rn0=w1083-h722-no" className="photobomb" alt="Trolltunga Norway"/>
        </div>
        <div class="responsive">
          <img style={{
              width: '350px',
              height: '350px',
              marginTop: '2em',
              objectFit: 'cover',
              border: 'solid',
              borderWidth: 'thin'
            }} src={theImage3} className="photobomb" alt="Forest"/>
        </div>
        <div class="responsive">
          <img style={{
              width: '350px',
              height: '350px',
              marginTop: '2em',
              objectFit: 'cover',
              border: 'solid',
              borderWidth: 'thin'
            }} src={theImage1} className="photobomb" alt="Forest"/>
        </div>
      </div>

      <div className="description" style={{
          padding: '5em',
          backgroundColor: '#0097C9'
        }}>
        <h4>Welcome to
          <strong>Smiles for Special Needs!</strong>
          We are so glad you found us. Our company provides services to individuals with intellectual and developmental delays. Our staff has over twenty years of combined experience in providing Respite, Habilitation and Attendant Care. Our goal at Smiles for Special Needs is to provide the best care possible with an emphasis on promoting independence. We are located in the East Valley, and currently serve all of Maricopa County.</h4>
        <div style={{
            marginLeft: '25em',
            marginTop: '2em'
          }}>
          <h5>
            <strong>"Peace begins with a smile." -Mother Teresa.</strong>
          </h5>
        </div>

      </div>
      <div className="photo-div style={{
          backgroundColor: 'rgba(0,151,201, 0.1)'
        }}>
        <div class="responsive">
          <img style={{
              width: '350px',
              height: '350px',
              marginTop: '1.40em',
              objectFit: 'cover',
              border: 'solid',
              borderWidth: 'thin'
            }} src="https://lh3.googleusercontent.com/nKkBMfbD1z5Nny36mQkKmxEGlnUBsDXYE9H7tDFC_VnnqSqXkH7H5m6776aZmQn1EELq67Y36O_sgsoN5wykbFKvgzU9FIUwAHEk7-LVE4v-5_VwQFcW7hy9HBw9ltWr0hIvMww5wKYJLt1K2rzVSNXxroPZtQxIxSFNE9dmiXy_BnoQZrDeMpqBoaqX5Bp31oksO3xXZY2bEc0bJ0bGpphFiLTycj6854kLUPKoiewNzbrJFa-DBZHmmi2o12N2QarGRaBfGhyhQFLoO2Fgun6IxdwTMgtMiTOvdRQxy4_bXwUf7S1Biuq7TeG_OgnQbdynl4A5GNJVDysgulNAto4OOwnaOCtK-surC-MP-A5xhG1sO7FhaaAAyz3xJa3Rq70JTF2BRy6JI_Vp85-Ec0JDFiW-F36IED4QbbmPjaMgAAgSga8fwuKWNwD3WxlQjT0-HJq3fVZHEAkeQi5ckbl1lA5lTd7OhMJ39xldRsmMrnNbMJYvK-U54U-wzynp-dFP94ExEN9j1Ltc_WUUUMcj0Dt0S4Dlg4MISZxDqyVRsQTnviExuq-7PYbUcluq5_fFrAd0lqrG52YswUcPX6_5nuJP8xbbIKSUY1_i4kMAjpvKMRbQSS3uW7i21tlLtpJeY7Nbw3LTmL-LoIBlt7HcBtk=w482-h722-no" className="photobomb" alt="Trolltunga Norway"/>
        </div>
        <div class="responsive">
          <img style={{
              width: '350px',
              height: '350px',
              marginTop: '2em',
              objectFit: 'cover',
              border: 'solid',
              borderWidth: 'thin'
            }} src="https://lh3.googleusercontent.com/FHb1gVZU-0sH-qvk6hbEslPRJn8Y2NsZU6LK1HBJ1IDKMk_jm6Z760Vm2fVv-0tHGqvHbVT1tEBvfrfg6d6APQdtbsRVlNemRpdMZBAN804EbaxYS-cSEiUl415taK-4xEzuhJslNFDXvqsZh0V93POdm6iPESlIKYqTHAf0fMGKABxYzTnIb1_Pv3i44SnpcJiMtMAsLRlsTFd_T7lS0VusY2fDdR8iCHj_gl2U48R3ZoZ98G7mrgkMFXzkjpu5C0rqautqv1eWEC9MA9P1WhX3zkG-Ey9Sr8tn7trag6z0-cHExRYaz0_MUIh7Wf4ADuxDKFJi-ZKKCLttcw4NGaX6JqjMFq5ootWie39QSYnKzY0RJYFJQIEGoe2kr5re0bE7eKn4kK4fQ9VqcCoQUkSV1eV6m59nEYW3bUCO_2MVYUDJMzvCpSQcqFsoEbkNeAJUlrZpWQMYRy9LrZqrNeKC1XG34h5zg2MZ-Sygvm9p1BYm4973jGmYQPWOJpR5Fu7VPGQorRNSBC5qOPUBQ6ECbACN14ExEejg7dXkQIlBHc_auevNNn7C36O0ICHn8JD5JahuDnjYVpeqPi8rCJmVIjL_WDO26QKRaJtjrRyHZhr-9QEl5tiCD0ofcYlGeYR5d_JYYXWSm1tXNPDQyfBBq4w=w1083-h722-no" className="photobomb" alt="Forest"/>
        </div>
        <div class="responsive">
          <img style={{
              width: '350px',
              height: '350px',
              marginTop: '2em',
              objectFit: 'cover',
              border: 'solid',
              borderWidth: 'thin'
            }} src="https://lh3.googleusercontent.com/r_yUS8cNOMQ9iY6HmPdvLwuNrR630LTUzs6JMV7_MwbhO-Fge2KhWG0aRB5n8XvHE3d3LIPEaziHK2M-PPRscZMor-SNhIbA8hEO9BIo_Ls3KMloP8A-ZNqsqREcFi8OG3c9q2N-qjwFd_bvHF7YZw_LTS9g4LDeFaM5fG_zqedIeW0al3B8aOUuoRKNARULAyAYbogdT49JjaIKuOjF041JGKuqOX1Be313AiuJZ2fBScjoJW-S96wMN6rvuo1N90iksDOzAz6xO5iJZSgGKHbQFDMkxr8LDIf28V2ot_vMHf34SCurbqvMUzDedgr8MX1WKinMxYOBHt74ZoNxyPpp5MgdJ0zbS9_FFjJXUbev9AOQHUkd6BFM8EN4vp2_hMomMmtSJtg9Mg0gWCpfNiiv1lep-aeGMUtVhEEHtk5Qjvaj7ZbXAqfkNXc0VwqLp3S9sag8yOYWhz27QyTGQSm_Xg2B8mD2awvV3Fv2YO8Ygb3NNw30GgYvAHz157QjBA7JRFkVjS1RehF_ZJTiM-pHyp2v1QSGKWlF9oUAcEx7EWhIJHWf3x5x3lUwpUWXOkqlt7sUHrOBKINc_V_n30Ij3xRGU0nKFe8rGapx0f--_rGLppmp-20URXfSYvNpzgagzzsVjAUoBInw1gzdfGH2A8c=w1083-h722-no" className="photobomb" alt="Forest"/>
        </div>
      </div>

    </div>)
  }
}
export default Home
