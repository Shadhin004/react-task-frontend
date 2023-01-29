import React, { useContext, useEffect, useState } from 'react'
import '../assets/css/HomePage.css'
import Cookies from 'js-cookie'
import { UserContext } from '../contexts/UserContext'

function HomePage() {
  const [selectors, setSelectors] =useState([])
  const { userData} = useContext(UserContext)
  
  const [submitData, setSubmitData] = useState(userData)

  const [authenticated, setauthenticated] = useState(null);
  const loggedInUser = localStorage.getItem("authenticated");

useEffect(() => {
  if (loggedInUser) {
  setauthenticated(loggedInUser);
  }
  console.log(authenticated)
}, [])

  const handleChange = (name) =>(event)=>{
    setSubmitData({...submitData, [name]:event.target.value})
  }
  const handleChangeMultiSelect = (event)=>{
    const {
      target: { value },
    } = event;
    setSelectors(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  }
  const handleChangeCheckBox = (name) =>(event)=>{
    setSubmitData({...submitData, [name]: event.target.checked})
  }
  useEffect(()=>{
    setSubmitData({...submitData, selectors: selectors.toString()})
  },[selectors])

  const handleSave = (e) =>{
    // e.preventDefault();
    console.log('Clicked')
    Cookies.set('user_info', JSON.stringify(submitData), { secure: true, sameSite: 'strict' })
  }

  const defaultSelectSelecotr = (value) =>{
    if(value == userData.selectors){
      return 'selected'
    }else{
      return ''
    }
  }

  return (
    <header className="header">
    <div className="overlay"></div>
    <div className="header-content">
      <div className='row'>
        <div className='col-md-6 col-lg-6'>
        <h5 className="header-title mb-3">Please enter your name and pick the Sectors you are currently involved in.</h5>

          <div className='form-container'>
            <form onSubmit={(e) => [e.preventDefault(), handleSave()]}>
              <div className="form-group">
                <label htmlFor="nameField">Name</label>
                <input type="text" defaultValue={userData?.name} className="form-control homePage-InputFields" required id="nameField" placeholder="Enter name" onChange={handleChange('name')} />
              </div>
              <div className="form-group">
              <label id="demo-multiple-name-label">Selectors</label>          
                <select required className="form-control homePage-InputFields" onChange={handleChangeMultiSelect}>
                  <option value=''>Select Selectors</option>
                  <option selected={defaultSelectSelecotr('1')}  value="1">Manufacturing</option>
                  <option selected={defaultSelectSelecotr('19')}  value="19">&nbsp;&nbsp;&nbsp;&nbsp;Construction materials</option>
                  <option selected={defaultSelectSelecotr('18')}  value="18">&nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics</option>
                  <option selected={defaultSelectSelecotr('6')}  value="6">&nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage</option>
                  <option selected={defaultSelectSelecotr('342')}  value="342">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp; confectionery products</option>
                  <option selected={defaultSelectSelecotr('43')}  value="43">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages</option>
                  <option selected={defaultSelectSelecotr('42')}  value="42">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp; fish products </option>
                  <option selected={defaultSelectSelecotr('40')}  value="40">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp; meat products</option>
                  <option selected={defaultSelectSelecotr('39')}  value="39">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp; dairy products </option>
                  <option selected={defaultSelectSelecotr('437')}  value="437">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
                  <option selected={defaultSelectSelecotr('378')}  value="378">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp; snack food</option>
                  <option selected={defaultSelectSelecotr('13')}  value="13">&nbsp;&nbsp;&nbsp;&nbsp;Furniture</option>
                  <option selected={defaultSelectSelecotr('389')}  value="389">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna </option>
                  <option selected={defaultSelectSelecotr('385')}  value="385">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bedroom</option>
                  <option selected={defaultSelectSelecotr('390')}  value="390">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Children’s room </option>
                  <option selected={defaultSelectSelecotr('98')}  value="98">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kitchen </option>
                  <option selected={defaultSelectSelecotr('101')}  value="101">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Living room </option>
                  <option selected={defaultSelectSelecotr('392')}  value="392">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office</option>
                  <option selected={defaultSelectSelecotr('394')}  value="394">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Furniture)</option>
                  <option selected={defaultSelectSelecotr('341')}  value="341">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor </option>
                  <option selected={defaultSelectSelecotr('99')}  value="99">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project furniture</option>
                  <option selected={defaultSelectSelecotr('12')}  value="12">&nbsp;&nbsp;&nbsp;&nbsp;Machinery</option>
                  <option selected={defaultSelectSelecotr('94')}  value="94">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery components</option>
                  <option selected={defaultSelectSelecotr('91')}  value="91">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery equipment/tools</option>
                  <option selected={defaultSelectSelecotr('224')}  value="224">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacture of machinery </option>
                  <option selected={defaultSelectSelecotr('97')}  value="97">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maritime</option>
                  <option selected={defaultSelectSelecotr('271')}  value="271">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aluminium and steel workboats </option>
                  <option selected={defaultSelectSelecotr('269')}  value="269">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht building</option>
                  <option selected={defaultSelectSelecotr('230')}  value="230">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ship repair and conversion</option>
                  <option selected={defaultSelectSelecotr('93')}  value="93">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal structures</option>
                  <option selected={defaultSelectSelecotr('508')}  value="508">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
                  <option selected={defaultSelectSelecotr('227')}  value="227">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair and maintenance service</option>
                  <option selected={defaultSelectSelecotr('11')}  value="11">&nbsp;&nbsp;&nbsp;&nbsp;Metalworking</option>
                  <option selected={defaultSelectSelecotr('67')}  value="67">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction of metal structures</option>
                  <option selected={defaultSelectSelecotr('263')}  value="263">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and buildings</option>
                  <option selected={defaultSelectSelecotr('267')}  value="267">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal products</option>
                  <option selected={defaultSelectSelecotr('542')}  value="542">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal works</option>
                  <option selected={defaultSelectSelecotr('75')}  value="75">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining</option>
                  <option selected={defaultSelectSelecotr('62')}  value="62">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings, Fasteners </option>
                  <option selected={defaultSelectSelecotr('69')}  value="69">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas, Plasma, Laser cutting</option>
                  <option selected={defaultSelectSelecotr('66')}  value="66">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG, TIG, Aluminum welding</option>
                  <option selected={defaultSelectSelecotr('9')}  value="9">&nbsp;&nbsp;&nbsp;&nbsp;Plastic and Rubber</option>
                  <option selected={defaultSelectSelecotr('54')}  value="54">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging</option>
                  <option selected={defaultSelectSelecotr('556')}  value="556">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods</option>
                  <option selected={defaultSelectSelecotr('559')}  value="559">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic processing technology</option>
                  <option selected={defaultSelectSelecotr('55')}  value="55">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing</option>
                  <option selected={defaultSelectSelecotr('57')}  value="57">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding</option>
                  <option selected={defaultSelectSelecotr('53')}  value="53">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics welding and processing</option>
                  <option selected={defaultSelectSelecotr('560')}  value="560">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles</option>
                  <option selected={defaultSelectSelecotr('5')}  value="5">&nbsp;&nbsp;&nbsp;&nbsp;Printing </option>
                  <option selected={defaultSelectSelecotr('148')}  value="148">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising</option>
                  <option selected={defaultSelectSelecotr('150')}  value="150">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals printing</option>
                  <option selected={defaultSelectSelecotr('145')}  value="145">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling and packaging printing</option>
                  <option selected={defaultSelectSelecotr('7')}  value="7">&nbsp;&nbsp;&nbsp;&nbsp;Textile and Clothing</option>
                  <option selected={defaultSelectSelecotr('44')}  value="44">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing</option>
                  <option selected={defaultSelectSelecotr('45')}  value="45">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile</option>
                  <option selected={defaultSelectSelecotr('8')}  value="8">&nbsp;&nbsp;&nbsp;&nbsp;Wood</option>
                  <option selected={defaultSelectSelecotr('337')}  value="337">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)</option>
                  <option selected={defaultSelectSelecotr('51')}  value="51">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden building materials</option>
                  <option selected={defaultSelectSelecotr('47')}  value="47">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses</option>
                  <option selected={defaultSelectSelecotr('3')}  value="3">Other</option>
                  <option selected={defaultSelectSelecotr('37')}  value="37">&nbsp;&nbsp;&nbsp;&nbsp;Creative industries</option>
                  <option selected={defaultSelectSelecotr('29')}  value="29">&nbsp;&nbsp;&nbsp;&nbsp;Energy technology</option>
                  <option selected={defaultSelectSelecotr('33')}  value="33">&nbsp;&nbsp;&nbsp;&nbsp;Environment</option>
                  <option selected={defaultSelectSelecotr('2')}  value="2">Service</option>
                  <option selected={defaultSelectSelecotr('25')}  value="25">&nbsp;&nbsp;&nbsp;&nbsp;Business services</option>
                  <option selected={defaultSelectSelecotr('35')}  value="35">&nbsp;&nbsp;&nbsp;&nbsp;Engineering</option>
                  <option selected={defaultSelectSelecotr('28')}  value="28">&nbsp;&nbsp;&nbsp;&nbsp;Information Technology and Telecommunications</option>
                  <option selected={defaultSelectSelecotr('581')}  value="581">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data processing, Web portals, E-marketing</option>
                  <option selected={defaultSelectSelecotr('576')}  value="576">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming, Consultancy</option>
                  <option selected={defaultSelectSelecotr('121')}  value="121">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software, Hardware</option>
                  <option selected={defaultSelectSelecotr('122')}  value="122">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunications</option>
                  <option selected={defaultSelectSelecotr('22')}  value="22">&nbsp;&nbsp;&nbsp;&nbsp;Tourism</option>
                  <option selected={defaultSelectSelecotr('141')}  value="141">&nbsp;&nbsp;&nbsp;&nbsp;Translation services</option>
                  <option selected={defaultSelectSelecotr('21')}  value="21">&nbsp;&nbsp;&nbsp;&nbsp;Transport and Logistics</option>
                  <option selected={defaultSelectSelecotr('111')}  value="111">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air</option>
                  <option selected={defaultSelectSelecotr('114')}  value="114">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rail</option>
                  <option selected={defaultSelectSelecotr('112')}  value="112">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Road</option>
                  <option selected={defaultSelectSelecotr('113')}  value="113">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Water</option>
                </select>
              </div>
              <div className="form-check mb-4">
                <input type="checkbox" className="form-check-input" defaultChecked={userData?.agree_to_terms} id="exampleCheck1" onChange={handleChangeCheckBox('agree_to_terms')} />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
            </div>
        </div>
        <div className='col-md-6 col-lg-6'>
        <h1 className="header-title">Informations</h1>
        {
          userData?
          <div className='details'>
            <h5>Name : {userData.name}</h5>
            <h5>Email : {userData.email}</h5>
            <h5>Selector : {userData.selector}</h5>
            <h5>Agreed to terms and Conditions : {userData.agree_to_terms}</h5>
          </div>
          :
          <h5 style={{textAlign: 'left'}}>Not available</h5>
        }
        </div>
      </div>
    </div>
</header>
  )
}

export default HomePage