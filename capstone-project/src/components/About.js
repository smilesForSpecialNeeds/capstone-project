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
								<span class="company">About Smiles for Special Needs</span>
							</h3>
							<h5>
								<strong>
									Smiles for Special Needs </strong>was founded by Joseph Hughes, who has an amazing child with intellectual and cognitive delays. When Joseph started his journey as a parent of a child with special needs, he was ill prepared for what was to follow. Over the years, he has attended countless Individual Educational Plans, (IEPs), Individual Support Plans, (ISP’s), and subsequent appointments with doctors, and other professionals. Through it all he has learned that advocating for his child is paramount to seeing the successes his son has obtained. Starting an agency that provides services to individuals with special needs came out of a necessity to find compassionate and qualified providers.

							</h5>

							<h4 style={{ color: '#1476AC' }}>
								<span class="company">Our Mission</span>
							</h4>
							<h5>

							Our mission at <strong>Smiles for Special Needs</strong> is to serve individuals who have special needs with commitment, respect and a passion to help them see their fullest potential.
							</h5>
              <Media
                img
                className="aboutImage"
                src="http://smilesforspecialneeds.com/images/27534538_p4qq.jpg"
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
							<h3 style={{ color: '#1476AC' }}>
								<span class="company">Board Members</span>
							</h3>
							<h5>
								<strong>Smiles for Special Needs</strong> board members consist of individuals with a background in the Division of Developmental Disabilities, parents of individuals with special needs, social workers, a professor, and a president and CEO of a provider agency in the State of Colorado. These individuals guide our company, ensuring that we continually meet and exceed the industry standards in caring for individuals with intellectual and cognitive delays.
							</h5>


							<Media>
								<Media
									img
									className="aboutImage"
									src="http://smilesforspecialneeds.com/images/26543812.png"
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
              <h4 >
								<strong>Smiles for Special Needs</strong> is funded through the State of Arizona, with the Division of Developmental Disabilities.
							</h4>
						</Col>
					</Row>
				</Media>
			</Media>
      </div>
    )
  }
}
  export default TopNav
