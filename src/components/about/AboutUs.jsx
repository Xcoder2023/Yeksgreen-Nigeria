import React from "react";
import user from "../../assets/about/users.png";
import kitchenview from "../../assets/about/kichenview.png";

const AboutUs = () => {
  return (
    <>
      <div style={{fontFamily:"work sans"}}>
        <div
          className="bg-[#04471C] lg:px-[7.5rem] px-5 py-4 text-white items-center flex"
          style={{fontSize: 24 }}
        >
          <img src={user} alt="this the user profile" className="hidden md:block"/>
          <p>About Us</p>
        </div>
        <div className="w-[100%] lg:w-[82%] m-auto flex flex-col md:gap-20 gap-5 lg:py-20 leading-8 px-5 lg:px-0">
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eget
            aliquet feugiat scelerisque senectus aliquet. Risus ante in elit
            suscipit nisi. Interdum et et iaculis nibh etiam commodo mattis
            fermentum. Libero, ipsum egestas non tincidunt gravida blandit vel
            semper mi. Amet, ac tristique purus interdum dictumst mollis
            dignissim lacus. Etiam a, nisl ut eleifend ultricies. Scelerisque
            lacus sit pharetra, et semper est curabitur aliquet cursus.
            Malesuada etiam egestas eu pharetra enim nisi malesuada duis.
            Malesuada duis nullam mattis nunc. Magna sit consectetur vitae id
            elementum aliquam mattis augue enim. Faucibus orci tellus est,
            maecenas consectetur enim habitant id. Duis quam tellus laoreet
            libero, scelerisque donec a. Eget integer tellus pretium vestibulum
            egestas tellus varius id. Netus sed penatibus at sed augue amet
            arcu, blandit euismod. Tempus praesent quam enim risus lorem lorem
            id interdum. Tellus mi vitae eget enim eget et. Aliquet sed donec
            odio sodales consectetur elementum. Sed eleifend cursus ac convallis
            volutpat. Diam lacus, sed ut sit. Vitae felis posuere maecenas
            fringilla sed nunc tortor. Suspendisse tempus, vitae cursus amet
            amet sed. Purus, vel aliquet condimentum id justo, egestas dui nibh
            odio. Aliquet in nisl morbi tellus. Quis ut parturient dolor dictum.
            Pellentesque lectus tortor vitae tempor et phasellus donec.
          </p>
          <p className="block md:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas imperdiet lobortis pulvinar vel ac, commodo dignissim ac tortor. Volutpat non convallis odio quis in. Lorem velit id arcu ac turpis laoreet nulla egestas. Sit suspendisse pellentesque posuere ligula. Fusce tristique risus ornare blandit pellentesque morbi. Amet, diam sit arcu cursus consequat. Leo tellus semper quam etiam.</p>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-20 gap-5">
            <img src={kitchenview} alt="" className="lg:w-[600px]" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sed
              sit leo a nulla et lacinia quam. Habitant imperdiet eros, quisque
              amet. Posuere in fermentum tellus pretium neque, sollicitudin nibh
              nullam. Leo volutpat pellentesque tortor, massa diam amet, sit.
              Volutpat aenean id magna egestas tristique. Rhoncus eget congue et
              ridiculus nisi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
