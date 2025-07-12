import React from 'react'
import '../homepage/crimeabout.css'

const Crimeabout = () => {

  
  const testimonials = [
    {
      quote:
        "Reporting my cyber fraud incident here gave me peace of mind. Authorities responded quickly and guided me through the recovery process.",
      name: "Samantha R.",
      role: "Cybercrime Victim",
      image: "https://mahwengkwai.com/wp-content/uploads/2020/05/Criminal.jpg",
    },
    {
      quote:
        "Platforms like this help bring awareness and encourage people to take digital safety more seriously. Great initiative!",
      name: "Officer Jake Miles",
      role: "Cybersecurity Division",
      image: "https://media.freemalaysiatoday.com/wp-content/uploads/2018/08/tangkap-bersalah-mahkamah-bernama-3108181.jpg",
    },
    {
      quote:
        "Thanks to the timely updates, I was able to identify a scam before falling victim to it. This platform is a lifesaver.",
      name: "Priya Kapoor",
      role: "Freelancer & Web User",
      image: "https://cdn-akgpo.nitrocdn.com/uneXnZmsoJbWakmKSyToOSWGWTWcoCVu/assets/images/optimized/rev-2b8a7e1/intermountainlegal.net/wp-content/uploads/2025/03/shutterstock_2461343927-2-1-e1742406428965.png",
    },
  ];
  

  return (
    <div className="container-fluid about-maincontainer text-white py-5">
    <div className="container">
      {/* Hero Section */}
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-5 fw-bold">Trusted By Thousands</h1>
          <p className="fs-5">
            Delivering excellence and results you can count on. With years of
            expertise and a proven track record, we are here to guide you every
            step of the way.
          </p>
          <button className="btn btn-warning btn-lg mt-3">Learn More</button>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
  
      {/* Tabs Section */}
      <div className="row mt-5">
        <div className="col-12">
          <ul className="nav nav-tabs justify-content-center" id="simpleTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="services-tab"
                data-bs-toggle="tab"
                data-bs-target="#services"
                type="button"
                role="tab"
                aria-controls="services"
                aria-selected="true"
              >
                Services
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="testimonials-tab"
                data-bs-toggle="tab"
                data-bs-target="#testimonials"
                type="button"
                role="tab"
                aria-controls="testimonials"
                aria-selected="false"
              >
                Testimonials
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Contact
              </button>
            </li>
          </ul>
          <div className="tab-content mt-4" id="simpleTabsContent">
            <div
              className="tab-pane fade show active"
              id="services"
              role="tabpanel"
              aria-labelledby="services-tab"
            >
              <h5>Our Services</h5>
              <div>
              <div>
              <p>
                Explore the wide range of services we provide to make your life
                easier and more successful.
              </p>
              </div>
              <div className="container py-5">
      <div className="bg-white rounded-4 shadow p-4 row align-items-start">
        {/* Sidebar */}
        <div className="col-lg-4">
          <h2 className="text-muted">(Crime News)</h2>
          <h3 className="fw-bold mt-2 text-black">Latest Crime Reports & Updates</h3>
          <p className="text-black">
            Stay informed with real-time coverage of local and global crime reports. From cyber threats to street crimes,
            we provide credible insights into criminal activity and public safety issues.
          </p>

            <h4 className="fw-bold border-bottom pb-1 mb-2 text-dark">Cybercrime</h4>
          <ul className="list-unstyled mt-4 crime-services-inner-cyber">
            <li className="text-black mb-2">Theft</li>
            <li className="text-black mb-2">Assault</li>
            <li className="text-black mb-2">Drug Offenses</li>
            <li className="text-black mb-2">Fraud</li>
            <li className="text-black mb-2">Human Trafficking</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-lg-8">
          <div className="rounded-4 overflow-hidden mb-3">
            <img
              src='https://www.spydetectiveagency.com/img/cyber-investigation.jpg'
              alt="Cybercrime"
              className="img-fluid w-100"
              style={{ height: '250px', objectFit: 'cover' }}
            />
          </div>
          <h4 className="fw-bold">Cybercrime Surge in Major Cities</h4>
          <p className="text-muted">
            A recent spike in cybercrime has affected several metropolitan areas. Authorities have reported a rise in phishing scams,
            ransomware attacks, and identity theft. Law enforcement agencies urge citizens to remain vigilant, secure personal data,
            and report any suspicious activity immediately. Investigations are underway to trace the origins of the coordinated attacks.
          </p>

          <div className="d-flex gap-2 fullstory-data">
            <button className="btn btn-dark">Read Full Story</button>
            <button className="btn btn-outline-dark text-white">Report Incident</button>
          </div>
        </div>
      </div>
    </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="testimonials"
              role="tabpanel"
              aria-labelledby="testimonials-tab"
            >

<div className="container py-5">
      <h3 className="text-center fw-bold mb-5">What People Are Saying</h3>
      <div className="row g-4">
        {testimonials.map((t, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="position-relative text-center bg-white rounded-4 shadow p-4 pt-5">
              {/* Avatar */}
              <div
                className="position-absolute top-0 start-50 translate-middle"
                style={{ marginTop: '-0px' }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-circle border border-3 border-white"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
              </div>

              {/* Quote & Info */}
              <p className="fst-italic mt-4 text-black">“{t.quote}”</p>
              <h6 className="fw-bold mb-0 text-black">{t.name}</h6>
              <small className="text-muted">{t.role}</small>
            </div>
          </div>
        ))}
      </div>
    </div>

            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <h5>Contact Us</h5>
              <p>
                Reach out to us anytime for inquiries, support, or just to say
                hello.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default Crimeabout