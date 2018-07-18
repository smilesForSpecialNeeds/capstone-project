import React, { Component } from 'react'
import { Media } from 'reactstrap'
import {
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Row,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from 'reactstrap'
// import theImage from '../images/sos-communications.png'
import firstImage from '../images/Smiles for Special Needs.jpg'

class Contact extends Component {


	render() {

		return (
			<div style={{backgroundColor: 'rgba(0,151,201, .1)', marginBottom: '1em'}}>

				<Media>
					<Media
						style={{
							marginTop: '3em',
							marginLeft: '5em',
							fontSize: '16px',
							marginRight: '5em'
						}}
					>
						<Row>
							<Col xs="6" style={{marginBottom: '2em'}}>
								<div >
									<h3 style={{ color: '#0097C9' }}>
										<span class="company">Contact Us</span>
									</h3>
									<h4>
										Our mission at <strong>Smiles for Special Needs</strong> is to serve individuals who have special needs with commitment, respect and a passion to help them see their fullest potential.
									</h4>
									<p />

                  <div style={{marginTop: '2.5em'}}>
                  <h4>  <strong>Smiles for Special Needs</strong></h4>
                  <h5 style={{ marginTop: '1em', color: '#0097C9' }}><strong>2424 E Southern Ave.</strong></h5>
                  <h5 style={{color: '#0097C9' }}><strong>Mesa, Arizona 85204</strong></h5>
                  <h5 style={{color: '#0097C9'}}> <strong>Phone (480) 361-1972  Fax (866)579-0262</strong></h5>
                  <h5 style={{color: '#0097C9'}}><strong>Email: smilesforspecialneeds@gmail.com</strong></h5>
                  </div>
                  <div style={{marginTop: '5em'}}>
                  <img style={{height: '350px', width: '600px',border: 'solid', borderWidth: 'thin'}} src="https://lh3.googleusercontent.com/jHnZzalnm3qDLwL_GWtINUDuKTPaGPyQmmWUrGaYEoo5tM-FrvnuXwM8p3mfX3TbX5kcQoMtPxsL9dXmQzEaWQrNeWcyrZDHzt3u9B-ECAcDqOMLeZCBcx-1KkkSLMSkf6I7Rehw5RWHC9tE68KA67hrCCgSPwFfeEQlAELlcgxvoo97j9i3DnSGEaSnQeNq-JQSp36TfEXKwAgq2EfEzR2HqcNwhGgJY_C6lMkGA4sPOd0K2UpKMijST6ZmpW1JuxgOxXXx6p9qpCKLXqlbCyHHrRJuM6zbxJ0iB04xNzNBv0Vb7-1cGVYTRsQX540EZy2a1auZJxYoqMqbpHe3qjuLX_EOURuMDpsJhpSoYSUfztfYXjQnp-P5c-mU3iVfNrxNVs308RYRTZzZlmBe-jXtdS9LvmRm0dp1A-f2WkvNlkU7BED7geal-EUTy2wLDB6F-wioNDGGO5WTXSjaIt0bHomR_3Ld16S77I9vx2lYD5_KvU2N3FOhXnKNBaBaTum7w5KO5r-9U7pggETv__38tAg5Ds-VAZsvpzSUKriF0422AXZ28eQ8I7UNAHIq4g7bvP-_Mrew4jSMMspMcikSETN85m1dEJQB8VkATLyj7a_mjHqvTyfWgTFdZ1uO4gwgYQLHFc1e7dTo6dQ8OJy7bdg=w1083-h722-no"/>
                  </div>

								</div>

							</Col>

							<Col xs="6" style={{marginTop: '2em'}}>
								<h4>
									<strong>
										Please reach out to us with any questions you may have regarding our program and the services we offer!
									</strong>
								</h4>

								<Media>
									<Media
										className="hover-contact"
										img
										src="https://lh3.googleusercontent.com/5rXVKdecM0K7kfsxzlgySw9xyMfBKdhQRyynwOBFNjxsvFnHcsOaUQ_yEl_JrXIf_odQ-kW5Zrc1jOpbCSPLLpB5IOtpMm7YzCvsvQkLq51lDMlHubTUeELXJZ-KN-VBllUWIGu-Om2rFRcdfz5XozrNKeuxl3VA6XJAtfzPMx3YwbUbppaDUmPnHYA-9Si5CsN_-39BPHoxcpO200UwUeMX4azuBXUMKV0rFpc6pj0TFIiSJIO7OMEqUOdNNnfBlXXMdbcjO3ZvPBGah7CrNHqWTl_K9nWjOiPkBEQzVHuyJ2GyNS4HBD81DOwE9JM04g_GKk9RF6IRjyMoPeqejm9kJHiLx1wQ_PoE0Y3P7jNrnkWkNHTRiZ72HTLU2c_DJ_NISem2-9N1wIjk8p14G_SDec8VKsw8RguJax5bERA1zUbAXgIctrwMv28j-U5ahyNR-zJx1rxNoG8x60u0b4EgyE5KRrtawutzMTPP96-H46_VjVvBvJUXyzUf486dE0T8G-cCa4PnEdAaWhQ1CrhBKlpNpqZi4_vyDRfQmDBXiZ5K4idzqoqA9KiA5kXxcNmVNTzOs35j4sy29Py59kff0uff0PV2ZG_8Ea9hdJS3jj-NjNHZq4wKbkbwNFJlt6ds3ITT4ib8XHnER4GyNnM5ez0=w1083-h722-no"
										style={{
											maxHeight: '50vh',
											objectFit: 'cover',
											marginLeft: '50px',
											marginRight: '30px',
											marginTop: '30px',
											width: '80%',
											marginBottom: '3em',
                      border: 'solid', borderWidth: 'thin'
										}}
									/>
								</Media>
								<h4 style={{ color: '#1476AC' }}>
									<span class="company">Employment Opportunities</span>{' '}
								</h4>
								<h4>
									At <strong>Smiles for Special Needs</strong>, we believe that our employees are the best in the industry. We are always looking for individuals who have a desire to serve individuals with intellectual and developmental delays. Compensation is based on experience. Training is provided.</h4> <h4>Please contact us at <strong>Info@Smilesforspecialneeds.com</strong> if you are interested in applying.</h4>




								<div
									style={{
										verticalAlign: 'middle',
										display: 'inline',

										color: '#1476AC',
										marginBottom: '2em',
										fontSize: '20px'
									}}
								>

								</div>

                <h3><a href ="#"><img
									className="hover-contact"
									style={{
										verticalAlign: 'middle',
										height: '3em',
										marginBottom: '3em',
                    marginTop:'1em',
                    marginRight:'1em'

									}}
									src=""
								/></a>
                <div
                  style={{
                    verticalAlign: 'middle',
                    display: 'inline',
                    color: '#1476AC',
                    marginBottom: '3em',
                    fontSize: '18px',
                    marginTop:'1em'
                  }}
                >


								</div></h3>
							</Col>
						</Row>
					</Media>
				</Media>
			</div>
		)
	}
}


export default Contact
