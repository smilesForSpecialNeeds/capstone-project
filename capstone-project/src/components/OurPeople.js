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




class TopNav extends Component {
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
								<span class="company">Jessie Marshall</span>
							</h3>
							<h5>

									Jessie Marshall graduated from the University of Arizona with a Bachelor’s in Psychology while working as a preschool teacher. After completing her undergrad, she moved back to her hometown of Gilbert, accepted a Research Technician position on the Arizona Developmental Disabilities Surveillance Program that is a partnering of the U of A Pediatrics Department and Center for Disease Control and Prevention.  She travels throughout Maricopa County working with numerous Special Education departments, Children’s Hospitals and Developmental Pediatricians researching the prevalence of both Autism and Intellectual Disability.  She is currently pursuing her Master’s degree in Infant Family Practice at Arizona State University, spending time with some very special kids with Autism through Smiles for Special Needs and hanging out with her husband and two very needy Labradors.

							</h5>


              <Media style={{marginLeft: '6em'}}
                img
                className="aboutImage"
                src="http://smilesforspecialneeds.com/images/748e45bd21ab07bd7d1f273d1e78d5d4_qkys.jpg"
                style={{
                  maxHeight: '60vh',
                  objectFit: 'cover',
                  paddingBottom: '0',
                  marginLeft: '60px',
                  marginTop: '40px',
                  width: '50%',
                  marginBottom: '10em',
                  border: 'solid', borderWidth: 'thin'
                }}
              />

						</Col>

						<Col xs="6" >
            <Media style={{marginLeft: '5em', marginTop: '1em'}}>
              <Media
                img
                className="aboutImage"
                src="http://smilesforspecialneeds.com/images/9035c4ce2a8ac666998c701e71af8a0c.jpg"
                style={{
                  maxHeight: '50vh',
                  objectFit: 'cover',
                  paddingBottom: '0',
                  marginLeft: '50px',
                  marginTop: '10px',
                  width: '60%',
                  marginBottom: '3em',
                  border: 'solid', borderWidth: 'thin'
                }}
              />
            </Media>

							<h3 style={{ color: '#1476AC' }}>
								<span class="company">Dorothy Sliva</span>
							</h3>
							<h5>
								Dorothy Sliva moved from northern Nevada out to Arizona five years ago in order to attend ASU and does not miss the snow at all. She earned her bachelor’s degree in Global Studies with a minor in Chinese. During her undergraduate career she had the exciting opportunity to teach English in Beijing, China. She joined the wonderful Smiles team in fall 2012. She is now working towards earning her master’s degree and certification in elementary and special education at ASU.
							</h5>



						</Col>
					</Row>
				</Media>
			</Media>
      </div>
    )
  }
}
  export default TopNav
