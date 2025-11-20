

function Nav() {


  return (
    <>
     <nav>
        <div className="container">
  <h1 id="logo">Scholarsync</h1>

        <ul className="nav-links">
            <li><a href="#">Features</a></li>
             <li><a href="#">Pricing</a></li>
              <li><a href="#">Support</a></li>
        </ul>
      
        </div>
    
     </nav>
     <div id="CTA">
<h1 style={{color:'white',}}>Streamline Your School Management
</h1>
      <button style={{ position:'relative', bottom:'4rem'}} id="get-started-cta">
     Get Started
      </button>
     </div>
     <div id="who-are-we">
 <h1>Who Are We</h1>

 <div className="cont-about">
    <div className="text">
      <h2 style={{paddingLeft:"2rem", color:" #ff6b6b"}}>About ScholarSync </h2>
    <p> ScholarSync is a comprehensive school management platform trusted by 500+ <br /> educational institutions worldwide. Founded in 2020, we streamline administrative <br /> tasks, enhance student engagement, and strengthen parent-teacher communication through <br /> our all-in-one solution.
From student enrollment to grade tracking, attendance <br /> monitoring to fee management – we help schools focus on <br /> what matters most: quality education.
Serving 100,000+ students <br /> globally with 99.9% uptime reliability. but</p>
 <button id="read-more">Read more</button>
    </div>


<img 
  src="/elittle-boy.jpg" 
  alt="Little boy" 
  style={{
    borderRadius: 25,
    borderTop: "2px solid #ff6b6b",
    borderBottom: "2px solid #ff6b6b"
  }} 
  height={300}
/>
 </div>
     </div>
     <div id="newsection">
      <div className="comprehensive-text">
   <h1>Comprehensive Student <br /> Information System</h1>
   <p>Manage every aspect of student data from enrollment to graduation. Our <br /> system provides a complete 360-degree view of each student's academic journey.

</p>
<ul>
<li>Digital enrollment and registration</li>
<li>Academic progress tracking</li>
<li>Behavioral records management</li>
<li>Health and emergency information</li>
</ul>
      </div>
      <div className="img">
        <img id="before-pricing" src="/students-discussing-intently-stockcake.jpg" alt="" width={280}  height={28} />
      </div>
     </div>
  <div className="pricing">
     <h1>Choose Your Plan</h1>
     <p>Transform your school management with our comprehensive digital solution. Select the perfect plan for your institution's needs.</p>
    <div className="card-pricing-container">
     
      <div className="card-pricing">
        <h1>Starter</h1>
        <p>Perfect for small schools and educational centers starting their  digital transformation journey</p>
        <div className="priceamnt">
<h3>$29/month</h3>

        </div>
        <li>Digital enrollment and registration</li>
<li>Academic progress tracking</li>
<li>Behavioral records management</li>
<li>Health and emergency information</li>
             <button id="Pay-btn">Pay Now</button>
      </div>
      <div className="card-pricing">
        <h1>Proffesional</h1>
        <p>Perfect for small schools and educational centers starting their  digital transformation journey</p>
        <div className="priceamnt">
<h3>$29/month</h3>

        </div>
        <li>Digital enrollment and registration</li>
<li>Academic progress tracking</li>
<li>Behavioral records management</li>
<li>Health and emergency information</li>
              <button id="Pay-btn">Pay Now</button>
      </div>
      <div  className="card-pricing">
        <h1>Enterprise</h1>
        <p>Perfect for small schools and educational centers starting their  digital transformation journey</p>
        <div className="priceamnt">
<h3>$29/month</h3>

        </div>
        <li>Digital enrollment and registration</li>
<li>Academic progress tracking</li>
<li>Behavioral records management</li>
<li>Health and emergency information</li>
         <button id="Pay-btn">Pay Now</button>
      </div>
    </div>
  </div>
  <footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h2>ScholarSync</h2>
      <p>Streamline your school management with our all-in-one platform trusted by schools worldwide.</p>
    </div>
    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Contact</h3>
      <p>Email: support@scholarsync.com</p>
      <p>Phone: +234 800 123 4567</p>
      <p>Address: Abuja, Nigeria</p>
    </div>
  </div>
  <div className="footer-bottom">
    &copy; {new Date().getFullYear()} Scholarsync. All rights reserved.
  </div>
</footer>
    </>
  )
}

export default Nav
