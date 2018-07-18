import React, { Component } from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Container,
	Row,
	Col,
	Media
} from 'reactstrap'
import theImage14 from '../images/19095.jpg'





class Services extends Component {
  render(){
    return(
      <div style={{backgroundColor: 'rgba(0,151,201, .1)'}} >
      <Media >
				<Media
					style={{
						marginTop: '3em',
						marginLeft: '5em',
						fontSize: '16px',
						marginRight: '5em'
					}}
				>
					<Row >
						<Col xs="6" >
							<h3 style={{ color: '#1476AC' }}>
								<span class="company">Services Offered</span>
							</h3>
							<h5>

									At <strong>Smiles for Special Needs</strong>, we strive to match families and their child/adult with providers who are a "good fit" for them. Our intake process is designed with a dual purpose-to allow the family/care giver the opportunity to interview a prospective provider, while gathering any information we may need to serve your child/adult in order to help them live life to their fullest potential.

							</h5>


              <h4 style={{ color: '#1476AC' }}>
                <span class="company">Habilitation</span>
              </h4>
              <h5>


              <h5>

              This service provides relief (respite) to the family, or caregiver(s). This is a great opportunity for your child/adult to go out into the community and participate in an activity, or give the parent/care giver a chance to run errands or just have time for themselves. This service can be provided at home, in the community or in the certified home of a provider. Respite can be used daily, or occasionally, depending on the needs of the family/caregiver.
              </h5>
              </h5>
              <Media
                img
                className="aboutImage"
                src="https://lh3.googleusercontent.com/Xh_9ee1zEKt9IjITH8IeIcd73q1um9NeykrJoJZzmIUvjyXqn8XRjM7WcJyFnx9UWSDYflFHNrtTmUaa69XMgbci1tuVqzf3L_VHc4PaAE2AfILrYQFfoJXT0i-qbmC42byjhjfkrCABa2ZCRgRmL2uMag1yA01ZX98SqGFg0tWarh4BJyY2klujZC_mcftIUjNip_dyUVCJWMb_MHG-6d0BCjVDyFiNGidw8g2po0orwrmcvaa4Br65inric2AN8zwgFQChqtM6l5hMI1vU_c1_FNFAsa2ZTGLCVODO2kNdNdfas334utI5wJcoIif3lkag-oUGIbD2I1Ef8vGiyhuPAm4Os0OF354ltAS9UKXd8z5KBk5KLHHNRjzwOpzDLfmeaGHo0QdWHmfyBKtHcCeov1dcjmQ3b9hnsU2Y99aMH56Sp_bvdWla1QBKtUh838gSSNLHNlS92kU47G4rwjopfRslag0Fm3AZ7M-97FNm0hmGqfyOT3GXs6ipWg9R7Zhu4w5FKhET6akrNjkHJR9oPHnWmmbGto7MlBqimi0wlaZc19SkNaMCHUnYBHlwj-kZf7gNgy2ALYdk_lsIi79iKuf3cc--Gxd-Z6_QYY_zPIWAkKrDEKS-M28Ri83wd_0qhNXlnGqhMw4Z8PhlsXSwIYE=w505-h756-no"
                style={{
                  maxHeight: '50vh',
                  objectFit: 'cover',
                  paddingBottom: '0',
                  marginLeft: '20px',
                  marginTop: '30px',
                  width: '90%',
                  marginBottom: '10em',
                  border: 'solid', borderWidth: 'thin'
                }}
              />

						</Col>

						<Col xs="6">
							<h4 style={{ color: '#1476AC' }}>
								<span class="company">Attendant Care</span>
							</h4>
							<h5>
								This service is designed to assist the family/caregiver(s) with the individual being served. Our providers can provide assistance with bathing, feeding, dressing, personal care, light housekeeping and running errands.
							</h5>


							<Media>
								<Media
									img
									className="aboutImage"
									src={theImage14}
									style={{
										maxHeight: '50vh',
										objectFit: 'cover',
										paddingBottom: '0',
										marginLeft: '20px',
										marginTop: '30px',
										width: '90%',
										marginBottom: '3em',
                    border: 'solid', borderWidth: 'thin'
									}}
								/>
							</Media>
              <h4 style={{ color: '#1476AC' }}>
                <span class="company">Respite</span>
              </h4>
              <h5>

              This service provides relief (respite) to the family, or caregiver(s). This is a great opportunity for your child/adult to go out into the community and participate in an activity, or give the parent/care giver a chance to run errands or just have time for themselves. This service can be provided at home, in the community or in the certified home of a provider. Respite can be used daily, or occasionally, depending on the needs of the family/caregiver.
              </h5>
						</Col>
					</Row>
				</Media>
			</Media>
      </div>
    )
  }
}
  export default Services
